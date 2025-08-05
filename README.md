# NeoPhoenix - Campus Emergency App  

🚀 A React Native app for campus safety, enabling users to send emergency alerts with real-time location sharing.  

## Table of Contents  
- Overview  
- Features  
- Tech Stack  
- Installation  
- Usage  
- Backend Setup  
- API Integration  
- Screenshots (Optional)  
- Contributing  
- License  

## Overview  
NeoPhoenix is a campus safety mobile app that allows students and faculty to send emergency alerts with live location tracking. It integrates Twilio for SMS alerts and Firebase for real-time notifications.  

## Features  
- SOS Button - Sends emergency alerts with real-time location.  
- Admin Notifications - Allows mass alerts for urgent situations.  
- Real-time Firebase Notifications - Keeps users updated.  
- User Profile Management - Users can register as Students or Faculty.  
- Emergency Categories - Medical, Violence, Fire, Disaster.  
- Persistent User Data - Uses AsyncStorage to store user profiles.  
- Navigation System - Home, Contact, Instructions.  

## Tech Stack  
- Frontend: React Native (Expo)  
- Backend: Express.js  
- Database: Firebase  
- SMS Alerts: Twilio  
- Storage: AsyncStorage  
- Location Tracking: Expo Location  

## Installation  

### Clone the Repository  
```
git clone https://github.com/HarshanaRK/Neophoenix.git
cd Neophoenix
```

### Install Dependencies  
```
npm install
```

### Start the App  
```
cd NeoPhoenix_frontend
npx expo start
```

## Usage  
1. Register as a Student or Faculty  
2. Press the SOS Button to send emergency alerts  
3. Select Emergency Type (Medical, Fire, Violence, Disaster)  
4. Admins receive real-time notifications  

## Backend Setup  
1. Navigate to the backend folder  
```
cd NeoPhoenix_backend
```
2. Install dependencies  
```
npm install
```
3. Set up Twilio API keys in `.env`  
```
TWILIO_SID=your_twilio_sid  
TWILIO_AUTH_TOKEN=your_auth_token  
TWILIO_PHONE_NUMBER=your_twilio_number  
```
4. Start the backend server  
```
node server.js
```

## API Integration  

### Send SOS Alert  
**POST /send-sos**  
Request Body:  
```json
{
  "phone": "+911234567890",
  "message": "Emergency! Please help!",
  "location": "12.9716° N, 77.5946° E"
}
```
Response:  
```json
{
  "status": "Message sent successfully!"
}
```
 

## Contributers

Krishna Kumar,
Vishal LSK,
Harshana RK,
Sugash ,
Inrajith 
  

## License  
This project is MIT Licensed.  

---
