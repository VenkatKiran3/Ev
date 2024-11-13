document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([13.0843, 80.2705], 11);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    const greenIcon = L.ExtraMarkers.icon({
      icon: 'fa-bolt',
      markerColor: 'green',
      shape: 'circle',
      prefix: 'fa'
    });
  
    const redIcon = L.ExtraMarkers.icon({
      icon: 'fa-bolt',
      markerColor: 'red',
      shape: 'circle',
      prefix: 'fa'
    });
  
    const blueIcon = L.ExtraMarkers.icon({
      icon: 'fa-bolt',
      markerColor: 'blue',
      shape: 'circle',
      prefix: 'fa'
    });
  
    const chargingPoints = [
      {
        location: 'India',
        coords: [13.230127335979654, 80.02678200750498],
        capacity: '50 kW',
        distance: '2 km',
        available: true,
        city: 'Chennai',
        selectedPort: 'A',
        price: '',
        icon: greenIcon
      },
      {
        location: 'India',
        coords: [13.07989784095866, 80.26141858343907],
        capacity: '75 kW',
        distance: '5 km',
        available: false,
        city: 'Chennai',
        selectedPort: 'B',
        price: '',
        icon: redIcon
      },
      {
        location: 'India',
        coords: [13.225841844078987, 80.03224156967676],
        capacity: '100 kW',
        distance: '7 km',
        available: true,
        city: 'Chennai',
        selectedPort: 'C',
        price: '20 BHD',
        icon: blueIcon
      }
    ];
  
    chargingPoints.forEach(point => {
      const marker = L.marker(point.coords, { icon: point.icon }).addTo(map);
      const availability = point.available ? 'Available' : 'Busy';
      marker.bindPopup(`<strong>Location:</strong> ${point.location}<br><strong>Capacity:</strong> ${point.capacity}<br><strong>Distance:</strong> ${point.distance}<br><strong>Status:</strong> ${availability}<br><button class="bookButton">Book</button>`);
  
      marker.on('click', () => {
        L.Routing.control({
          waypoints: [
            L.latLng(13.225841844078987, 80.03224156967676),
            L.latLng(point.coords[0], point.coords[1])
          ],
          routeWhileDragging: true
        }).addTo(map);
      });
  
      marker.on('popupopen', function() {
        const bookButton = marker.getPopup().getElement().querySelector(".bookButton");
        if (bookButton) {
          bookButton.addEventListener('click', () => {
            document.getElementById("chargingPoint").value = point.location;
            document.getElementById("city").value = point.city;
            document.getElementById("selectedPort").value = point.selectedPort;
            document.getElementById("price").value = point.price;
            modal.style.display = "block";
          });
        }
      });
    });
  
    const modal = document.getElementById("bookingModal");
    const span = document.getElementsByClassName("close")[0];
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    document.getElementById("bookingForm").addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
  
      fetch('http://localhost:3000/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
      alert('Thank you for your booking!');
      modal.style.display = "none";
    });
  });
  