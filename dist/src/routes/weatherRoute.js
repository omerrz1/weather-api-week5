"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const weatherController_js_1 = require("../controllers/weatherController.js");
const validators_js_1 = require("../middleware/validators.js");
const router = express_1.default.Router();
router.get("/:city", validators_js_1.validateCityName, weatherController_js_1.getWeatherData);
exports.default = router;
//# sourceMappingURL=weatherRoute.js.map