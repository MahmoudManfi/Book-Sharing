"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const app_1 = __importDefault(require("./app"));
const http_status_codes_1 = require("http-status-codes");
app_1.default.use((req, res) => {
    const meg = 'Not found page';
    console.error(meg);
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ error: meg });
});
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log('listen to port: ' + PORT);
});
//# sourceMappingURL=server.js.map