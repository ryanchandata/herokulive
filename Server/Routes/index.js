/* 
///////////////////////////////////////////////////////////////////////////////
//   
// Title:            COMP229
// Semester:         Summer 2022
// Author:           Chan Po Fai
// Email:            cpofai@my.centennialcollege.ca
// StudentID:        301220725
// Date:             01-June-2022
///////////////////////////////////////////////////////////////////////////////
*/

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Our Projects', page: 'projects' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact Us', page: 'contact' });
});
exports.default = router;
//# sourceMappingURL=index.js.map