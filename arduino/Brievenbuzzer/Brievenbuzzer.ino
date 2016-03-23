/*
  Web client
 
 This sketch connects to a website (http://www.google.com)
 using an Arduino Wiznet Ethernet shield. 
 
 Circuit:
 * Ethernet shield attached to pins 10, 11, 12, 13
 
 created 18 Dec 2009
 by David A. Mellis
 modified 9 Apr 2012
 by Tom Igoe, based on work by Adrian McEwen
 
 */

#include <SPI.h>
#include <Ethernet.h>
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
char server[] = "project.cmi.hr.nl";
IPAddress ip(192,168,0,177);
EthernetClient client;

boolean canDetect = true;

void setup()
{
  Serial.begin(9600);
     while (!Serial) {
      ; // wait for serial port to connect. Needed for Leonardo only
    }
  
  Serial.println("Starten...");
  pinMode(9, INPUT_PULLUP);
  pinMode(8, OUTPUT);
  
  digitalWrite(8, HIGH);
  
  Serial.println("Gestart!");
}

void loop()
{ 
  if(canDetect)
  {
    if(digitalRead(9) == HIGH)
    {
      Serial.println("Brievenbus is nu open; stuur een bericht!");
      
      canDetect = false;
      digitalWrite(8, LOW);
      
      ConnectAndSend(); 
      
      digitalWrite(8, HIGH);
      
      Serial.println("Bericht verstuurd, brievenbus is nog open.");
      delay(500);
    }
  }
  else
  {
    if(digitalRead(9) == LOW)
    { 
      canDetect = true;
      Serial.println("Brievenbus is nu dicht.");
      delay(500);
    }
  }
}

void ConnectAndSend() 
{
  boolean success = false;
  
  while(!success)
  {
    // start the Ethernet connection:
    if (Ethernet.begin(mac) == 0) {
      Serial.println("Failed to configure Ethernet using DHCP");
      // no point in carrying on, so do nothing forevermore:
      // try to congifure using IP address instead of DHCP:
      Ethernet.begin(mac, ip);
    }
    Serial.println("Sending...");
  
    // if you get a connection, report back via serial:
    if (client.connect(server, 80)) {
      Serial.println("Message Sent");
      // Make a HTTP request:
      client.println("GET /2014_2015/iot_mt1f_t2/website/receiver/submit.php?msg=MESSAGE HTTP/1.1");
      client.println("Host: project.cmi.hr.nl");
      client.println("Connection: close");
      client.println();
      
      success = true;
    } 
    else {
      // kf you didn't get a connection to the server:
      Serial.println("connection failed");
    }
    
    if (client.available()) {
      char c = client.read();
      Serial.print(c);
    }
  
    // if the server's disconnected, stop the client:
    if (!client.connected()) {
      Serial.println();
      Serial.println("disconnecting.");
      client.stop();
    }
  }
}
