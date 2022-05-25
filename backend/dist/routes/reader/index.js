"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const login_1 = __importDefault(require("./login"));
const router = express_1.default.Router();
router.post('/login', (req, res) => {
    console.log(req.body);
    (0, login_1.default)(req.body)
        .then(token => {
        res.status(http_status_codes_1.StatusCodes.OK).json(token);
    })
        .catch(err => res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ error: err.message }));
});
exports.default = router;
//# sourceMappingURL=index.js.map