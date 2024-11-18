#include "ArduinoOSCWiFi.h"
#include "Wire.h"
#include "VL53L1X.h"
#include "Arduino_LED_Matrix.h"   // Include the LED_Matrix library

// Create an instance of the ArduinoLEDMatrix class
ArduinoLEDMatrix matrix;

// Distance sensor
VL53L1X sensor;
int rawDistance;
int distance;
int sensorStatus;
// light sensor
int light;

int direction=0;
int motorSpeed = 255;

// WiFi AP settings
char ssid[] = "matti";      // your network SSID (name)
char pass[] = "robomatti";  // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;           // your network key index number (needed only for WEP)

int status = WL_IDLE_STATUS;
WiFiUDP Udp;

const IPAddress ip(192, 168, 0, 202);
const IPAddress gateway(192, 168, 0, 1);
const IPAddress subnet(255, 255, 0, 0);

// for ArduinoOSC
const char* host = "192.168.0.203";
const int recv_port = 1234;
const int send_port = 4321;

void setup() {
  // initialize serial communication
  Serial.begin(115200);  
  // Initialize the LED matrix
  matrix.begin();
  // configure the motors
  setupMotors();
  // configure the distance sensor
  setupDistanceSensor();
  // configure WiFi and OSC settings
  setupWifi();
}

void loop() {
  OscWiFi.update();  // should be called to receive + send osc
  readLight();
  readDistance();

  switch (direction) {
    case 0:
      stopAll();
      break;
    case 1:
      goForward();
      break;
    case 2:
      goBackward();
      break;
    case 3:
      goLeft();
      break;
    case 4:
      goRight();
      break;
    default:
      stopAll();
      break;
  }
}
