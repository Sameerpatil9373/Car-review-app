// backend/seeder.js
require('dotenv').config();
const mongoose = require('mongoose');
const Car = require('./models/Car');
const Review = require('./models/Review');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  // sample cars
  const cars = [
    { brand: "Hyundai", modelName: "Creta", variant: "S", year: 2023, fuelType: "Petrol", imageUrl: "https://images.carandbike.com/car-images/colors/hyundai/creta/hyundai-creta-white.png" },
    { brand: "Maruti", modelName: "Swift", variant: "VXI", year: 2022, fuelType: "Petrol", imageUrl: "/assets/cars/swift.png" },
    { brand: "Mahindra", modelName: "Thar", variant: "AX", year: 2023, fuelType: "Petrol", imageUrl: "/assets/cars/thar.png" },
  ];

  await Car.deleteMany({});
  const createdCars = await Car.insertMany(cars);
  console.log('Seeded cars:', createdCars.length);

  // optional sample reviews
  await Review.deleteMany({});
  await Review.insertMany([
    { carId: createdCars[0]._id, userId: "seed-user", kmDriven: 12000, cityMileage: 12, highwayMileage: 16, serviceCostAnnual: 7000, rating: 4, issues: ["AC noise"], pros: "Comfort", cons: "Fuel" },
    { carId: createdCars[0]._id, userId: "seed-user2", kmDriven: 8000, cityMileage: 14, highwayMileage: 17, serviceCostAnnual: 6500, rating: 4.2, issues: [], pros: "Feature-rich", cons: "" }
  ]);

  console.log("Seeding done.");
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
