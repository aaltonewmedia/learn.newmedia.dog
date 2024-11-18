void setupWifi(){
  WiFi.config(ip, gateway, subnet);
  // check for the WiFi module:
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true)
      ;
  }

  String fv = WiFi.firmwareVersion();
  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
    Serial.println("Please upgrade the firmware");
  }

  // print the network name (SSID);
  Serial.print("Creating access point named: ");
  Serial.println(ssid);

  // Create network with the ssid and password
  status = WiFi.beginAP(ssid, pass);
  if (status != WL_AP_LISTENING) {
    Serial.println("Creating access point failed");
    // don't continue
    while (true)
      ;
  }

  Udp.begin(recv_port);
  printWifiStatus();  // you're connected now, so print out the status
  OscWiFi.subscribe(recv_port, "/direction", onDirReceived);
  OscWiFi.publish(host, send_port, "/sensor/light", light)->setFrameRate(60.f);
  OscWiFi.publish(host, send_port, "/sensor/rawdistance", rawDistance)->setFrameRate(60.f);
}

void onDirReceived(const OscMessage& m) {
  direction = m.arg<int>(0);
  Serial.println(direction);
}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}