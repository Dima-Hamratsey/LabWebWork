

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
  { id: 1, image: '/assets/toyota-corolla.jpg', brand: 'Toyota', model: 'Corolla 2021', power: 150, maxSpeed: 180, price: 15000 },
  { id: 2, image: '/assets/BMW_E92_M3.jpg', brand: 'BMW', model: 'M3 E92', power: 200, maxSpeed: 220, price: 30000 },
  { id: 3, image: '/assets/Honda-Civic.jpg', brand: 'Honda', model: 'Civic 2018', power: 100, maxSpeed: 160, price: 18000 },
  { id: 4, image: '/assets/audi-a41.jpg', brand: 'Audi', model: 'A4 2017', power: 180, maxSpeed: 200, price: 25000 },
  { id: 5, image: '/assets/Ford.jpg', brand: 'Ford', model: 'Focus ST 2019', power: 140, maxSpeed: 190, price: 20000 },
  { id: 6, image: '/assets/chevrolet_corvette.jpg', brand: 'Chevrolet', model: 'Corvette 2020', power: 250, maxSpeed: 320, price: 60000 },
  { id: 7, image: '/assets/merc_e220d_coupe_01.jpg', brand: 'Mercedes', model: 'E220d 2017', power: 190, maxSpeed: 240, price: 50000 },
  { id: 8, image: '/assets/2020-nissan-gt-r-nismo-review.jpg', brand: 'Nissan', model: 'GT-R 2020', power: 180, maxSpeed: 230, price: 75000 },
  { id: 9, image: '/assets/rp-992-press-drive-2.jpg', brand: 'Porsche', model: '911 Carrera 2019', power: 300, maxSpeed: 330, price: 120000 },
  { id: 10, image: '/assets/tesla_model_3.jpg', brand: 'Tesla', model: 'Model 3 2020', power: 283, maxSpeed: 250, price: 50000 },
  { id: 11, image: '/assets/ferrari_488_gtb.jpg', brand: 'Ferrari', model: '488 GTB', power: 670, maxSpeed: 330, price: 250000 },
  { id: 12, image: '/assets/lamborghini_huracan.jpg', brand: 'Lamborghini', model: 'Huracan', power: 610, maxSpeed: 325, price: 300000 },
  { id: 13, image: '/assets/mclaren_720s.jpg', brand: 'McLaren', model: '720S', power: 710, maxSpeed: 341, price: 280000 },
  { id: 14, image: '/assets/bugatti_chiron.jpg', brand: 'Bugatti', model: 'Chiron', power: 1500, maxSpeed: 420, price: 3000000 },
  { id: 15, image: '/assets/aston_martin_db11.jpg', brand: 'Aston Martin', model: 'DB11', power: 630, maxSpeed: 322, price: 220000 },
  { id: 16, image: '/assets/ford_mustang_shelby_gt500.jpg', brand: 'Ford', model: 'Mustang Shelby GT500', power: 760, maxSpeed: 290, price: 70000 },
  { id: 17, image: '/assets/dodge_challenger_srt_hellcat.jpg', brand: 'Dodge', model: 'Challenger SRT Hellcat', power: 717, maxSpeed: 320, price: 60000 },
  { id: 18, image: '/assets/bmw_i8.jpg', brand: 'BMW', model: 'i8', power: 369, maxSpeed: 250, price: 140000 },
  { id: 19, image: '/assets/chevrolet_camaro_zl1.jpg', brand: 'Chevrolet', model: 'Camaro ZL1', power: 650, maxSpeed: 315, price: 65000 },
  { id: 20, image: '/assets/jaguar_f_type_r.jpg', brand: 'Jaguar', model: 'F-Type R', power: 575, maxSpeed: 300, price: 120000 },
];





module.exports = cars; 
