
class Car {
    constructor(image, brand, model, power, maxSpeed) {
        this.image = image;
        this.brand = brand;
        this.model = model;
        this.power = power;
        this.maxSpeed = maxSpeed;
    }
}


const cars = [
    new Car('assets/toyota-corolla.jpg', 'Toyota', 'Corolla 2021', 150, 180),
    new Car('assets/BMW_E92_M3.jpg', 'BMW', 'M3 E92', 200, 220),
    new Car('assets/Honda-Civic.jpg', 'Honda', 'Civic 2018', 100, 160),
    new Car('assets/audi-a41.jpg', 'Audi', 'A4 2017', 180, 200),
    new Car('assets/Ford.jpg', 'Ford', 'Focus ST 2019', 140, 190),
    new Car('assets/chevrolet_corvette.jpg', 'Chevrolet', 'Corvette 2020', 250, 320),
    new Car('assets/merc_e220d_coupe_01.jpg', 'Mercedes', 'E220d 2017', 190, 240),
    new Car('assets/2020-nissan-gt-r-nismo-review.jpg', 'Nissan', 'GT-R 2020', 180, 230),
    new Car('assets/rp-992-press-drive-2.jpg', 'Porsche', '911 Carrera 2019', 300, 330),
    new Car('assets/tesla_model_3.jpg', 'Tesla', 'Model 3 2020', 283, 250),
];


const carGrid = document.querySelector('#car-grid');
const totalSpeedElement = document.querySelector('#total-speed');


function displayCars(carArray) {
    carGrid.innerHTML = ''; 
    carArray.forEach(car => {
        const carCard = `
            <div class="car-card">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
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


displayCars(cars);



document.querySelector('#search-btn').addEventListener('click', () => {
    const searchInput = document.querySelector('#search-input').value.trim().toLowerCase(); // trim() видаляє пробіли з початку і кінця
    const filteredCars = cars.filter(car => car.brand.toLowerCase().includes(searchInput));
    displayCars(filteredCars);
});


document.querySelector('#sort-asc-btn').addEventListener('click', () => {
    const sortedCars = cars.sort((a, b) => a.power - b.power);
    displayCars(sortedCars);
});


document.querySelector('#sort-desc-btn').addEventListener('click', () => {
    const sortedCars = cars.sort((a, b) => b.power - a.power);
    displayCars(sortedCars);
});


document.querySelector('#total-btn').addEventListener('click', () => {
    const totalSpeed = cars.reduce((total, car) => total + car.maxSpeed, 0);
    totalSpeedElement.textContent = totalSpeed; 
});
const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});