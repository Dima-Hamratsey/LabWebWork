export class Car {
  constructor(image, brand, model, power, maxSpeed) {
    this.image = image;
    this.brand = brand;
    this.model = model;
    this.power = power;
    this.maxSpeed = maxSpeed;
  }
}

export const cars = [
  new Car(require('./assets/toyota-corolla.jpg'), 'Toyota', 'Corolla 2021', 150, 180),
  new Car(require('./assets/BMW_E92_M3.jpg'), 'BMW', 'M3 E92', 200, 220),
  new Car(require('./assets/Honda-Civic.jpg'), 'Honda', 'Civic 2018', 100, 160),
  new Car(require('./assets/audi-a41.jpg'), 'Audi', 'A4 2017', 180, 200),
  new Car(require('./assets/Ford.jpg'), 'Ford', 'Focus ST 2019', 140, 190),
  new Car(require('./assets/chevrolet_corvette.jpg'), 'Chevrolet', 'Corvette 2020', 250, 320),
  new Car(require('./assets/merc_e220d_coupe_01.jpg'), 'Mercedes', 'E220d 2017', 190, 240),
  new Car(require('./assets/2020-nissan-gt-r-nismo-review.jpg'), 'Nissan', 'GT-R 2020', 180, 230),
  new Car(require('./assets/rp-992-press-drive-2.jpg'), 'Porsche', '911 Carrera 2019', 300, 330),
  new Car(require('./assets/tesla_model_3.jpg'), 'Tesla', 'Model 3 2020', 283, 250),
  new Car(require('./assets/ferrari_488_gtb.jpg'), 'Ferrari', '488 GTB', 670, 330),
  new Car(require('./assets/lamborghini_huracan.jpg'), 'Lamborghini', 'Huracan', 610, 325),
  new Car(require('./assets/mclaren_720s.jpg'), 'McLaren', '720S', 710, 341),
  new Car(require('./assets/bugatti_chiron.jpg'), 'Bugatti', 'Chiron', 1500, 420),
  new Car(require('./assets/aston_martin_db11.jpg'), 'Aston Martin', 'DB11', 630, 322),
  new Car(require('./assets/ford_mustang_shelby_gt500.jpg'), 'Ford', 'Mustang Shelby GT500', 760, 290),
  new Car(require('./assets/dodge_challenger_srt_hellcat.jpg'), 'Dodge', 'Challenger SRT Hellcat', 717, 320),
  new Car(require('./assets/bmw_i8.jpg'), 'BMW', 'i8', 369, 250),
  new Car(require('./assets/chevrolet_camaro_zl1.jpg'), 'Chevrolet', 'Camaro ZL1', 650, 315),
  new Car(require('./assets/jaguar_f_type_r.jpg'), 'Jaguar', 'F-Type R', 575, 300)
];
