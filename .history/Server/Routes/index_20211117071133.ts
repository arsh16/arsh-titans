import express from 'express';
const router = express.Router();
export default router;

import Survey from '../Models/survey';
import response from '../Models/response';

//instantiate an object of type index controller
import {  DisplayAddPage, DisplayHomePage, DisplaySurveyPage, ProcessAddPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET survey page. */
router.get('/survey', DisplaySurveyPage);

router.get('/add', DisplayAddPage);

router.post('/add', ProcessAddPage);
//module.exports = router;

/* GET  edit survey page. */
router.get('/survey', EditSurveyPa);