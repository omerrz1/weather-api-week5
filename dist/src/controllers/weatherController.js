"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const weatherService_1 = require("../services/weatherService");
const express_validator_1 = require("express-validator");
/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
const getWeatherData = async (req, res) => {
    // Check if there are any validation errors
    const errors = (0, express_validator_1.validationResult)(req);
    // Log errors and send a 400 status code
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Get the city param from the request
        const { city } = req.params;
        console.log(city);
        // Variable to store weather data
        let finalWeatherData;
        // Determine city and generate weather data
        if (city === "london") {
            finalWeatherData = (0, weatherService_1.generateLondonWeatherData)();
        }
        else if (city === "dublin") {
            finalWeatherData = (0, weatherService_1.generateDublinWeatherData)();
        }
        else {
            return res.status(404).send("City not found");
        }
        // Return the weather data as JSON
        return res.status(200).json(finalWeatherData);
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        return res.status(500).send("Error in fetching weather data");
    }
};
exports.getWeatherData = getWeatherData;
//# sourceMappingURL=weatherController.js.map