// define the pin numbers for controlling the H-Bridge
#define ML_EN 9
#define ML_C1 10
#define ML_C2 11

#define MR_EN 5
#define MR_C1 6
#define MR_C2 7

// this is called in the setup
// sets the pins to the correct modes
void setupMotors(){
  pinMode(MR_EN, OUTPUT);
  pinMode(MR_C1, OUTPUT);
  pinMode(MR_C2, OUTPUT);

  pinMode(ML_EN, OUTPUT);
  pinMode(ML_C1, OUTPUT);
  pinMode(ML_C2, OUTPUT);

  motorSpeed = 255;
  leftSpeed(motorSpeed);
  rightSpeed(motorSpeed);
  stopAll();
}

// Functions for different movements

void goForward() {
  leftSpeed(motorSpeed);
  rightSpeed(motorSpeed);
  leftMotorForward();
  rightMotorForward();
  matrix.loadFrame(up);
}

void goBackward() {
  leftSpeed(motorSpeed);
  rightSpeed(motorSpeed);
  leftMotorBackward();
  rightMotorBackward();
  matrix.loadFrame(down);
}

void goLeft() {
  leftSpeed(motorSpeed/2);
  rightSpeed(motorSpeed/2);
  rightMotorForward();
  leftMotorBackward();
  matrix.loadFrame(left);
}

void goRight() {
  leftSpeed(motorSpeed/2);
  rightSpeed(motorSpeed/2);
  leftMotorForward();
  rightMotorBackward();
  matrix.loadFrame(right);
}

void stopAll() {
  leftMotorStop();
  rightMotorStop();
  matrix.loadFrame(heart);
}

void leftMotorForward() {
  digitalWrite(ML_C1, HIGH);
  digitalWrite(ML_C2, LOW);
}

void leftMotorBackward() {
  digitalWrite(ML_C1, LOW);
  digitalWrite(ML_C2, HIGH);
}

void leftMotorStop() {
  digitalWrite(ML_C1, LOW);
  digitalWrite(ML_C2, LOW);
}

void rightMotorStop() {
  digitalWrite(MR_C1, LOW);
  digitalWrite(MR_C2, LOW);
}

void rightMotorForward() {
  digitalWrite(MR_C1, HIGH);
  digitalWrite(MR_C2, LOW);
}

void rightMotorBackward() {
  digitalWrite(MR_C1, LOW);
  digitalWrite(MR_C2, HIGH);
}

void leftSpeed(int mSpeed) {
  analogWrite(ML_EN, mSpeed);
}

void rightSpeed(int mSpeed) {
  analogWrite(MR_EN, mSpeed);
}