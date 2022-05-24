"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
if (fs_1.default.existsSync('.env')) {
    console.log('Using .env file to supply config environment variables');
    dotenv_1.default.config({ path: '.env' });
}
else {
    console.error('.env file doesn\'t exist');
    process.exit(1);
}
exports.MONGODB_URI = process.env.MONGO_URI;
if (!exports.MONGODB_URI) {
    console.error('No mongo connection string. Set MONGODB_URI environment variable.');
    process.exit(1);
}
//# sourceMappingURL=database.js.map