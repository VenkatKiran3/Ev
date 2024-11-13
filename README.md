# booktoplug    
This project provides an interactive map showing Electric Vehicle (EV) charging points in India, along with a booking feature for EV charging stations. Users can view charging station details, book a time slot, and receive email notifications upon successful booking.


Table of Contents
Demo
Features
Technologies Used
Getting Started
Installation
Usage
Contributing
License
Contact
Demo


Features
Interactive map with EV charging points in Bahrain.
Search functionality for locating nearby charging stations.
Detailed information about each charging station, including power capacity and availability.
Booking feature for reserving time slots at charging stations.
Email notifications for users upon successful booking.
Responsive design for use on both desktop and mobile devices.
Technologies Used
Frontend:

HTML5
CSS3
JavaScript
Map and Navigation:

Leaflet.js
Leaflet Routing Machine
Leaflet Extra Markers
Backend:

Node.js
Express.js
Nodemailer
Getting Started
To get a local copy up and running follow these simple steps.

Prerequisites
Node.js installed on your machine.
A Google account for sending emails (Nodemailer).
Installation
Clone the repo:

sh
Copy code

cd ev-charging-map
Install NPM packages:

sh
Copy code
npm install
Set up Nodemailer:

Ensure you have a Google account.
Enable "Less secure app access" in your Google account settings.
Create an app password in your Google account.
Configure environment variables:

Create a .env file in the root directory with the following content:

env
Copy code
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
Usage
Run the application:

sh
Copy code
node server.js
Open your browser and visit:

sh
Copy code
http://localhost:3000


