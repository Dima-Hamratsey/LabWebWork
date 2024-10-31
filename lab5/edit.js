let cars = [];

function loadCars() {
    fetch('http://localhost:3005/cars')
        .then(response => response.json())
        .then(data => {
            cars = data;
            populateCarSelect();
            loadCarData(carSelect.value);
        })
        .catch(error => {
            console.error('Error loading cars:', error);
        });
}

const carSelect = document.getElementById('car-select');
const brandInput = document.getElementById('brand');
const modelInput = document.getElementById('model');
const powerInput = document.getElementById('power');
const maxSpeedInput = document.getElementById('maxSpeed');
const editForm = document.getElementById('edit-car-form');
const deleteBtn = document.getElementById('delete-btn');

function populateCarSelect() {
    carSelect.innerHTML = '';

    cars.forEach((car, index) => {
        const option = document.createElement('option');
        option.value = car.id;  
        option.textContent = `${car.brand} ${car.model}`;
        carSelect.appendChild(option);
    });
}

function loadCarData(id) {
    const car = cars.find(c => c.id === id);
    brandInput.value = car.brand;
    modelInput.value = car.model;
    powerInput.value = car.power;
    maxSpeedInput.value = car.maxSpeed;
}

carSelect.addEventListener('change', function() {
    loadCarData(carSelect.value);
});

editForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedId = carSelect.value;

    const updatedCar = {
        brand: brandInput.value,
        model: modelInput.value,
        power: Number(powerInput.value),
        maxSpeed: Number(maxSpeedInput.value)
    };

    fetch(`http://localhost:3005/cars/${selectedId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCar),
    })
    .then(response => response.json())
    .then(data => {
        alert('Car updated successfully!');
        loadCars();
    })
    .catch(error => {
        console.error('Error updating car:', error);
    });
});

deleteBtn.addEventListener('click', function() {
    const selectedId = carSelect.value;

    fetch(`http://localhost:3005/cars/${selectedId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        alert('Car deleted successfully!');
        loadCars();
    })
    .catch(error => {
        console.error('Error deleting car:', error);
    });
});

loadCars();
