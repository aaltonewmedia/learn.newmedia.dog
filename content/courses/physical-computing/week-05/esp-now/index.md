---
title: "Wireless: ESP-NOW"
bookCollapseSection: false
weight: 30
p5js-widget: true
draft: false
---

ESP-NOW is a wireless communication protocol that is specifically used with the ESP-series boards.

## Links

- [ESP-NOW Website](https://www.espressif.com/en/solutions/low-power-solutions/esp-now)
- [Example for the XIAO Boards](https://wiki.seeedstudio.com/xiao_esp32s3_espnow/)

## Examples

---

### Simple Sender-Receiver

The basic operation with ESP-NOW is that you set a specific receiver MAC addreess where you send the messages. This example demonstrates that. You can have a maximum of 20 boards paired together.

{{<hint info>}}
First upload the Receiver Code and note down the MAC address of that board, you will need it for your Sender board.
{{</hint>}}

#### Receiver Code

```c
#include <WiFi.h>
#include <esp_now.h>
#include <esp_wifi.h>
#include <freertos/FreeRTOS.h>
#include <freertos/queue.h>

constexpr uint8_t WIFI_CHANNEL = 1;
QueueHandle_t receivedCounters = nullptr;

void onReceive(const esp_now_recv_info_t*, const uint8_t* data, int length) {
  uint32_t counter;
  if (length != sizeof(counter)) {
    return;
  }

  // Copy the bytes before the callback returns. Keep only the latest value.
  memcpy(&counter, data, sizeof(counter));
  xQueueOverwrite(receivedCounters, &counter);
}

void setup() {
  Serial.begin(115200);

  if (!WiFi.mode(WIFI_STA) ||
      esp_wifi_set_channel(WIFI_CHANNEL, WIFI_SECOND_CHAN_NONE) != ESP_OK) {
    Serial.println("Could not start Wi-Fi on the chosen channel.");
    return;
  }

  receivedCounters = xQueueCreate(1, sizeof(uint32_t));
  if (receivedCounters == nullptr) {
    Serial.println("Could not create the receive queue.");
    return;
  }

  if (esp_now_init() != ESP_OK ||
      esp_now_register_recv_cb(onReceive) != ESP_OK) {
    Serial.println("Could not start the ESP-NOW receiver.");
    return;
  }
  // delay to give time to the board to be able to report the MAC address
  delay(5000);
  Serial.print("Receiver MAC: ");
  Serial.println(WiFi.macAddress());

  Serial.println("Waiting for messages...");
}

void loop() {
  uint32_t counter;
  // Wait briefly for the callback to hand us a value, then print it here.
  if (receivedCounters != nullptr &&
      xQueueReceive(receivedCounters, &counter, pdMS_TO_TICKS(100)) == pdTRUE) {
    Serial.printf("Received %lu\n", static_cast<unsigned long>(counter));
  } else {
    delay(1);
  }
}
```

#### Sender Code

```c
#include <WiFi.h>
#include <esp_now.h>
#include <esp_wifi.h>

constexpr uint8_t WIFI_CHANNEL = 1;

// Replace these six bytes with the MAC shown by YOUR receiver.
// This is an example of what the Receiver Code would print out D8:3B:DA:74:A4:08
const uint8_t receiverMac[] = {0xD8, 0x3B, 0xDA, 0x74, 0xA4, 0x08};

uint32_t counter = 1;
bool ready = false;

void setup() {
  Serial.begin(115200);

  // Start the Wi-Fi radio in station mode without joining a router.
  if (!WiFi.mode(WIFI_STA) ||
      esp_wifi_set_channel(WIFI_CHANNEL, WIFI_SECOND_CHAN_NONE) != ESP_OK) {
    Serial.println("Could not start Wi-Fi on the chosen channel.");
    return;
  }

  if (esp_now_init() != ESP_OK) {
    Serial.println("Could not start ESP-NOW.");
    return;
  }

  // A peer is the device we want to send to.
  esp_now_peer_info_t peer = {};
  memcpy(peer.peer_addr, receiverMac, sizeof(peer.peer_addr));
  peer.channel = WIFI_CHANNEL;
  peer.ifidx = WIFI_IF_STA;
  peer.encrypt = false;

  if (esp_now_add_peer(&peer) != ESP_OK) {
    Serial.println("Could not add the receiver as a peer.");
    return;
  }

  ready = true;
}

void loop() {
  if (ready) {
    // Send the four bytes that make up the counter.
    esp_err_t result = esp_now_send(receiverMac,
                                    reinterpret_cast<const uint8_t*>(&counter),
                                    sizeof(counter));

    if (result == ESP_OK) {
      Serial.printf("Queued %lu for sending\n", static_cast<unsigned long>(counter));
      ++counter;
    } else {
      Serial.printf("Could not queue packet (%s)\n", esp_err_to_name(result));
    }
  }
  delay(10);
}
```

---

### Broadcast Mode

In Broadcast Mode, you have one board that sends to multiple boards that are receiving the messages. There is no theoretical limit to how many boards can listen to the messages, but WiFi noise, distance, and other interference can cause jitter in the messages or lost packets.

{{<hint info>}}
In Broadcast Mode, you don't need to know the MAC address of the receivers. Upload the Sender Code to the sender board and the Receiver Code to all of the receiving boards.
{{</hint>}}

#### Broadcast: Sender Code

```c
// Upload this sketch to ONE ESP32.
#include <WiFi.h>
#include <esp_now.h>
#include <esp_wifi.h>

const int wifiChannel = 1;  // Use this same channel on every board.
const uint8_t broadcastAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};

unsigned long messageNumber = 1;

// Stop here if a setup step fails, so the error stays visible.
void checkSetup(bool ok, const char* errorMessage) {
  if (ok) {
    return;
  }
  Serial.println(errorMessage);
  while (true) {
    delay(1000);
  }
}

void setup() {
  Serial.begin(115200);

  // Turn on Wi-Fi in station mode. We can send without joining a network.
  checkSetup(WiFi.mode(WIFI_STA), "Could not start Wi-Fi.");
  checkSetup(esp_wifi_set_channel(wifiChannel, WIFI_SECOND_CHAN_NONE) == ESP_OK,
             "Could not set the Wi-Fi channel.");
  checkSetup(esp_now_init() == ESP_OK, "Could not start ESP-NOW.");

  // A peer is a destination. This special address reaches every listener.
  esp_now_peer_info_t peer = {};
  memcpy(peer.peer_addr, broadcastAddress, sizeof(broadcastAddress));
  peer.channel = wifiChannel;
  peer.ifidx = WIFI_IF_STA;
  checkSetup(esp_now_add_peer(&peer) == ESP_OK, "Could not add broadcast peer.");
}

void loop() {
  // Build "Hello #1", "Hello #2", and so on.
  char message[32];
  snprintf(message, sizeof(message), "Hello #%lu", messageNumber);
  const uint8_t* messageBytes = reinterpret_cast<const uint8_t*>(message);

  // strlen counts the text bytes, excluding the string's end marker.
  if (esp_now_send(broadcastAddress, messageBytes, strlen(message)) == ESP_OK) {
    Serial.print("Queued for broadcast: ");
    Serial.println(message);
    messageNumber++;
  } else {
    Serial.println("Could not queue the message.");
  }

  delay(5);
}
```

#### Broadcast: Receiver Code

```c
// Upload this same sketch to EACH receiver.
#include <WiFi.h>
#include <esp_now.h>
#include <esp_wifi.h>
#include <freertos/FreeRTOS.h>
#include <freertos/queue.h>

const int wifiChannel = 1;  // Must match the sender.
const uint8_t broadcastAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};

const int textBufferSize = 32;
QueueHandle_t inbox;

// ESP-NOW calls this function whenever a packet arrives.
void onMessage(const esp_now_recv_info_t* packet, const uint8_t* data, int length) {
  if (memcmp(packet->des_addr, broadcastAddress, sizeof(broadcastAddress)) != 0) {
    return;  // Ignore packets addressed to an individual board.
  }
  if (length <= 0 || length >= textBufferSize) {
    return;  // Leave space for the end-of-text marker.
  }

  char text[textBufferSize] = {};
  memcpy(text, data, length);
  text[length] = '\0';

  // Hand the latest message to loop(), which takes care of printing it.
  xQueueOverwrite(inbox, text);
}

void checkSetup(bool ok, const char* errorMessage) {
  if (ok) {
    return;
  }
  Serial.println(errorMessage);
  while (true) {
    delay(1000);
  }
}

void setup() {
  Serial.begin(115200);

  checkSetup(WiFi.mode(WIFI_STA), "Could not start Wi-Fi.");
  checkSetup(esp_wifi_set_channel(wifiChannel, WIFI_SECOND_CHAN_NONE) == ESP_OK,
             "Could not set the Wi-Fi channel.");
  checkSetup(esp_now_init() == ESP_OK, "Could not start ESP-NOW.");

  // The inbox has space for one message. A newer one can replace it.
  inbox = xQueueCreate(1, textBufferSize);
  checkSetup(inbox != nullptr, "Could not create the inbox.");
  checkSetup(esp_now_register_recv_cb(onMessage) == ESP_OK,
             "Could not register the receive function.");

  Serial.println("Listening for broadcasts...");
}

void loop() {
  char text[textBufferSize];
  if (xQueueReceive(inbox, text, portMAX_DELAY) == pdTRUE) {
    Serial.print("Received: ");
    Serial.println(text);
  }
}
```