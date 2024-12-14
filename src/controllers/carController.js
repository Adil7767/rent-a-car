import { Car } from '../models/car.js';
import { uploadFileToS3 } from '../utills/functions.js';
export const createCar = async (req, res) => {
    try {


        const files = req.files;
        const imageUrls = await Promise.all(files.map(uploadFileToS3));

        const car = new Car({
            ...req.body,
            images: imageUrls,
        });

        await car.save();
        res.status(201).send(car);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).send();
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateCar = async (req, res) => {
    try {
        const files = req.files;
        let imageUrls = [];

        if (files && files.length > 0) {
            imageUrls = await Promise.all(files.map(uploadFileToS3));
        }

        const updateData = {
            ...req.body,
            ...(imageUrls.length > 0 && { images: imageUrls }),
        };

        const car = await Car.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!car) return res.status(404).send();
        res.status(200).send(car);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) return res.status(404).send();
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send(error);
    }
};
