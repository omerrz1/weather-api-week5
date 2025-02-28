import { Request, Response } from "express";
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
} from "../services/weatherService";
import { validationResult } from "express-validator";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // Check if there are any validation errors
  const errors = validationResult(req);

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
    let finalWeatherData: WeatherData;

    // Determine city and generate weather data
    if (city === "london") {
      finalWeatherData = generateLondonWeatherData();
    } else if (city === "dublin") {
      finalWeatherData = generateDublinWeatherData();
    } else {
      return res.status(404).send("City not found");
    }

    // Return the weather data as JSON
    return res.status(200).json(finalWeatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return res.status(500).send("Error in fetching weather data");
  }
};
