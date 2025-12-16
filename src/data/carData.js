import creta from "../assets/cars/creta.png";
import swift from "../assets/cars/swift.png";
import thar from "../assets/cars/thar.png";
import innova from "../assets/cars/innova.png";

export const carData = [
  {
    id: 1,
    name: "Hyundai Creta",
    image: creta,
    price: "₹10.87 - ₹19.20 Lakh",
    fuel: "Petrol / Diesel",
    mileage: "17 - 21 kmpl",
    engine: "1497 cc",
    rating: 4.5,
    reviews: [
      "Super comfortable and value for money.",
      "Great for family trips.",
    ],
  },
  {
    id: 2,
    name: "Maruti Swift",
    image: swift,
    price: "₹6.49 - ₹9.65 Lakh",
    fuel: "Petrol / CNG",
    mileage: "22 - 30 kmpl",
    engine: "1197 cc",
    rating: 4.3,
    reviews: ["Best mileage in its segment."],
  },
  {
    id: 3,
    name: "Mahindra Thar",
    image: thar,
    price: "₹11.25 - ₹17.20 Lakh",
    fuel: "Petrol / Diesel",
    mileage: "15 - 18 kmpl",
    engine: "2184 cc",
    rating: 4.7,
    reviews: ["Amazing off-road performance!"],
  },
  {
    id: 4,
    name: "Toyota Innova",
    image: innova,
    price: "₹19.99 - ₹26.05 Lakh",
    fuel: "Petrol / Hybrid",
    mileage: "16 - 23 kmpl",
    engine: "1987 cc",
    rating: 4.8,
    reviews: ["Comfort king for highway rides!"],
  },
];
