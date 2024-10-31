const express = require('express');
const cors = require('cors');
const app = express();
const port = 3004;

let cars = [];

app.use(cors());
app.use(express.json());

// Отримання всіх автомобілів
app.get('/cars', (req, res) => {
    res.json(cars);
});
app.get('/', (req, res) => {
    res.send('Welcome to Elite Cars API!');
});


// Додавання нового автомобіля
app.post('/cars', (req, res) => {
    const newCar = req.body;
    newCar.id = cars.length + 1; // Генерація ID
    cars.push(newCar);
    res.status(201).json(newCar);
});

// Оновлення автомобіля за ID
app.put('/cars/:id', (req, res) => {
    const carId = req.params.id;
    const updatedCar = req.body;
    cars = cars.map(car => car.id === Number(carId) ? updatedCar : car);
    res.json(updatedCar);
});

// Видалення автомобіля за ID
app.delete('/cars/:id', (req, res) => {
    const carId = req.params.id;
    cars = cars.filter(car => car.id !== Number(carId));
    res.json({ message: 'Car deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
