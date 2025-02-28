"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const weatherRoute_js_1 = tslib_1.__importDefault(require("./routes/weatherRoute.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
// Our new route
app.use("/api/weather", weatherRoute_js_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map