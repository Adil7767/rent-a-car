import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  registrationNo: { 
    type: String, 
    required: [true, 'Registration number is required'], 
    unique: true 
  },
  yearOfModel: { 
    type: String, 
    required: [true, 'Year of model is required'] 
  },
  registeredCity: { 
    type: String, 
    required: [true, 'Registered city is required'] 
  },
  carType: { 
    type: String, 
    required: [true, 'Car type is required'] 
  },
  carMake: { 
    type: String, 
    required: [true, 'Car make is required'] 
  },
  carModel: { 
    type: String, 
    required: [true, 'Car model is required'] 
  },
  color: { 
    type: String, 
    default: 'Unknown' 
  },
  transmissionType: { 
    type: String, 
    default: 'Manual' 
  },
  engineCapacity: { 
    type: String, 
    required: [true, 'Engine capacity is required'] 
  },
  chassisNo: { 
    type: String, 
    required: [true, 'Chassis number is required'], 
    unique: true 
  },
  engineNo: { 
    type: String, 
    required: [true, 'Engine number is required'], 
    unique: true 
  },
  fuelType: { 
    type: String, 
    default: 'Petrol' 
  },
  fuelTankCapacity: { 
    type: String, 
    default: '50L' 
  },
  maxSpeed: { 
    type: String, 
    default: '120 km/h' 
  },
  seatingCapacity: { 
    type: String, 
    default: '4' 
  },
  inspectionDate: { 
    type: Date, 
    default: null 
  },
  inspectionMileage: { 
    type: String, 
    default: '0 km' 
  },
  inspectionLocation: { 
    type: String, 
    default: 'Unknown' 
  },
  ratePerDay: { 
    type: Number, 
    required: [true, 'Rate per day is required'], 
    min: [0, 'Rate per day must be positive'] 
  },
  priceOfVehicle: { 
    type: Number, 
    required: [true, 'Price of vehicle is required'], 
    min: [0, 'Price of vehicle must be positive'] 
  },
  fuelAverage: { 
    type: String, 
    default: 'Unknown' 
  },
  features: {
    airConditioner: { type: Boolean, default: false },
    heater: { type: Boolean, default: false },
    sunRoof: { type: Boolean, default: false },
    cdDvdPlayer: { type: Boolean, default: false },
    androidPlayer: { type: Boolean, default: false },
    frontCamera: { type: Boolean, default: false },
    rearCamera: { type: Boolean, default: false },
    cigaretteLighter: { type: Boolean, default: false },
    steeringLock: { type: Boolean, default: false },
    wheelCups: { type: Boolean, default: false },
    spareWheel: { type: Boolean, default: false },
    airCompressor: { type: Boolean, default: false },
    jackHandle: { type: Boolean, default: false },
    wheelPanna: { type: Boolean, default: false },
    mudFlaps: { type: Boolean, default: false },
    floorMats: { type: Boolean, default: false },
    vehicleDocuments: { type: Boolean, default: false },
  },
  images: { 
    type: [String], 
    default: [] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

export const Car =  mongoose.model('Car', carSchema);
