# ev-charging-points
https://ahmadrzaa.github.io/ev-charging-points/      
This project provides an interactive map showing Electric Vehicle (EV) charging points in Bahrain, along with a booking feature for EV charging stations. Users can view charging station details, book a time slot, and receive email notifications upon successful booking.

![Screenshot 2024-06-09 162330](https://github.com/ahmadrzaa/ev-charging-points/assets/43694428/c535c19e-7cd7-48e3-86d9-483610aefff9)
![Screenshot 2024-06-09 162443](https://github.com/ahmadrzaa/ev-charging-points/assets/43694428/9f2fdc1c-55da-43eb-bac8-879a74df988e)
![Screenshot 2024-06-09 162603](https://github.com/ahmadrzaa/ev-charging-points/assets/43694428/41974f86-b87e-49cb-af5b-ab804f0907cd)
![Screenshot 2024-06-09 162643](https://github.com/ahmadrzaa/ev-charging-points/assets/43694428/1b892e10-12a0-4b6b-bfb9-170b2622e7d5)
![Screenshot 2024-06-09 162723](https://github.com/ahmadrzaa/ev-charging-points/assets/43694428/60571abd-517c-47fc-aded-50489ab6eec2)

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
A live demo of the project can be accessed at: [GitHub Pages Link]

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
git clone https://github.com/ahmadrzaa/ev-charging-map.git
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


