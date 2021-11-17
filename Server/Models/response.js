"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const responseDatabaseSchema = new Schema({
    response: String,
    res_s_id: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Survey'
    },
    q_id: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Survey'
    }
}, {
    collection: "response"
});
const Model = mongoose_1.default.model("response", responseDatabaseSchema);
exports.default = Model;
//# sourceMappingURL=response.js.map