"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reader_1 = require("@src/models/Reader");
function login(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = body;
        console.log('In login function');
        const user = yield Reader_1.Reader.findOne({ email });
        if (!user)
            throw Error('Incorect Email');
        console.log(password, user.password);
        if (password.localeCompare(user.password) !== 0)
            throw Error('Incorect Password');
        return user;
    });
}
exports.default = login;
//# sourceMappingURL=login.js.map