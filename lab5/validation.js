
const createForm = document.getElementById('create-car-form');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalText = document.getElementById('modal-text');


if (createForm) {
    createForm.addEventListener('submit', function(event) {
        const brand = document.getElementById('brand').value.trim();
        const model = document.getElementById('model').value.trim();
        const power = parseInt(document.getElementById('power').value);
        const maxSpeed = parseInt(document.getElementById('maxSpeed').value);

       
        if (!brand || !model || power < 50 || power > 1500 || maxSpeed < 100 || maxSpeed > 400) {
            event.preventDefault(); 
            modalText.textContent = 'Please fill all fields correctly! Power must be between 50 and 1500 hp, and Max Speed must be between 100 and 400 km/h.'; 
            modal.style.display = 'flex'; 
        }
    });
}


if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
