"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
//instantiate an object of type index controller
const index_1 = require("../Controllers/index");
/* GET home page. */
router.get('/', index_1.DisplayHomePage);
/* GET home page. */
router.get('/home', index_1.DisplayHomePage);
/* GET survey page. */
router.get('/survey', index_1.DisplaySurveyPage);
router.get('/add', index_1.DisplayAddPage);
router.post('/add', index_1.ProcessAddPage);
/* GET  edit survey page. */
router.get('/edit/:id', index_1.DisplayEditPage);
/* Process  edit survey page. */
router.post('/edit/:id', index_1.ProcessEditPage);
/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', index_1.performDelete);
module.exports = router;
//# sourceMappingURL=index.js.map