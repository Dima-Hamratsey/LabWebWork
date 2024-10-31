
function displayCars(carArray) {
    const carGrid = document.querySelector('#car-grid');
    carGrid.innerHTML = '';  

    const cars = carArray || [];  

    cars.forEach(car => {
        const carCard = `
            <div class="car-card">
                <img src="${car.image}" alt="${car.brand} ${car.model}" style="width:100%; height:auto;">
                <div class="car-info">
                    <p><strong>Brand:</strong> ${car.brand}</p>
                    <p><strong>Model:</strong> ${car.model}</p>
                    <p><strong>Power:</strong> ${car.power} hp</p>
                    <p><strong>Max Speed:</strong> ${car.maxSpeed} km/h</p>
                </div>
            </div>
        `;
        carGrid.insertAdjacentHTML('beforeend', carCard);
    });
}


function loadCars() {
    fetch('http://localhost:3005/cars')
        .then(response => response.json())
        .then(cars => {
            displayCars(cars);
        })
        .catch(error => {
            console.error('Error fetching cars:', error);
        });
}


document.querySelector('#sort-asc-btn').addEventListener('click', () => {
    fetch('http://localhost:3005/cars')
        .then(response => response.json())
        .then(cars => {
            const sortedCars = cars.sort((a, b) => a.power - b.power);
            displayCars(sortedCars);
        })
        .catch(error => {
            console.error('Error sorting cars by power (asc):', error);
        });
});

document.querySelector('#sort-desc-btn').addEventListener('click', () => {
    fetch('http://localhost:3005/cars')
        .then(response => response.json())
        .then(cars => {
            const sortedCars = cars.sort((a, b) => b.power - a.power);
            displayCars(sortedCars);
        })
        .catch(error => {
            console.error('Error sorting cars by power (desc):', error);
        });
});


document.querySelector('#search-btn').addEventListener('click', () => {
    const searchInput = document.querySelector('#search-input').value.trim().toLowerCase();
    fetch('http://localhost:3005/cars')
        .then(response => response.json())
        .then(cars => {
            const filteredCars = cars.filter(car => car.brand.toLowerCase().includes(searchInput));
            displayCars(filteredCars);
        })
        .catch(error => {
            console.error('Error searching cars:', error);
        });
});


document.querySelector('#total-btn').addEventListener('click', () => {
    const totalSpeedElement = document.querySelector('#total-speed');
    fetch('http://localhost:3005/cars')
        .then(response => response.json())
        .then(cars => {
            const totalSpeed = cars.reduce((total, car) => total + car.maxSpeed, 0);
            totalSpeedElement.textContent = `Total Max Speed of All Cars: ${totalSpeed} km/h`;
        })
        .catch(error => {
            console.error('Error calculating total speed:', error);
        });
});


document.addEventListener('DOMContentLoaded', function() {
    loadCars();
});


function displayCars(carArray) {
    const carGrid = document.querySelector('#car-grid');
    carGrid.innerHTML = '';  

    const cars = carArray || JSON.parse(localStorage.getItem('cars')) || [];

    cars.forEach(car => {
        const carCard = `
            <div class="car-card">
                <img src="${car.image}" alt="${car.brand} ${car.model}" style="width:100%; height:auto;">
                <div class="car-info">
                    <p><strong>Brand:</strong> ${car.brand}</p>
                    <p><strong>Model:</strong> ${car.model}</p>
                    <p><strong>Power:</strong> ${car.power} hp</p>
                    <p><strong>Max Speed:</strong> ${car.maxSpeed} km/h</p>
                </div>
            </div>
        `;
        carGrid.insertAdjacentHTML('beforeend', carCard);
    });
}


initializeDefaultCars();
displayCars();  


document.querySelector('#search-btn').addEventListener('click', () => {
    const searchInput = document.querySelector('#search-input').value.trim().toLowerCase(); 
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const filteredCars = cars.filter(car => car.brand.toLowerCase().includes(searchInput));
    displayCars(filteredCars);
});


document.querySelector('#sort-asc-btn').addEventListener('click', () => {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const sortedCars = [...cars].sort((a, b) => a.power - b.power);
    displayCars(sortedCars);
});


document.querySelector('#sort-desc-btn').addEventListener('click', () => {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const sortedCars = [...cars].sort((a, b) => b.power - a.power);
    displayCars(sortedCars);
});


document.querySelector('#total-btn').addEventListener('click', () => {
    const totalSpeedElement = document.querySelector('#total-speed');
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const totalSpeed = cars.reduce((total, car) => total + car.maxSpeed, 0);
    totalSpeedElement.textContent = totalSpeed;
});

document.getElementById('explore-now').addEventListener('click', function(event) {
    event.preventDefault();  

    const carGridSection = document.getElementById('car-grid'); 

    
    carGridSection.scrollIntoView({
        behavior: 'smooth'  
    });
});
function displayCars() {
    const carGrid = document.querySelector('#car-grid');
    carGrid.innerHTML = '';

    fetch('http://localhost:3005/cars')
        .then(response => response.json())
        .then(cars => {
            cars.forEach(car => {
                const carCard = `
                    <div class="car-card">
                        <img src="${car.image}" alt="${car.brand} ${car.model}" style="width:100%; height:auto;">
                        <div class="car-info">
                            <p><strong>Brand:</strong> ${car.brand}</p>
                            <p><strong>Model:</strong> ${car.model}</p>
                            <p><strong>Power:</strong> ${car.power} hp</p>
                            <p><strong>Max Speed:</strong> ${car.maxSpeed} km/h</p>
                        </div>
                    </div>
                `;
                carGrid.insertAdjacentHTML('beforeend', carCard);
            });
        })
        .catch(error => {
            console.error('Error fetching cars:', error);
        });
}

displayCars();
