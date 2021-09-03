"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadApiEndpoints = void 0;
const test_json_1 = __importDefault(require("../../data/test.json"));
const loadApiEndpoints = (app) => {
    app.get("/api", (req, res) => {
        return res.status(200).send(test_json_1.default);
    });
};
exports.loadApiEndpoints = loadApiEndpoints;
//# sourceMappingURL=api.js.map