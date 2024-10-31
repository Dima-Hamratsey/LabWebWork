document.getElementById('create-car-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const brand = document.getElementById('brand').value.trim();
    const model = document.getElementById('model').value.trim();
    const power = document.getElementById('power').value.trim();
    const maxSpeed = document.getElementById('maxSpeed').value.trim();
    const imageFile = document.getElementById('image').files[0];

    if (!brand || !model || !power || !maxSpeed || isNaN(power) || isNaN(maxSpeed)) {
        alert('Please fill all fields correctly.');
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
        const base64Image = reader.result;

        const newCar = {
            brand: brand,
            model: model,
            power: Number(power),
            maxSpeed: Number(maxSpeed),
            image: base64Image  
        };

        fetch('http://localhost:3005/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCar),
        })
        .then(response => response.json())
        .then(data => {
            alert('Car added successfully!');
            window.location.href = 'index.html';  
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);  
    } else {
        alert('Please upload an image');
    }
});
