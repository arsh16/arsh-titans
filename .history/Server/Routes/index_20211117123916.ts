import express from 'express';
const router = express.Router();
export default router;

import Survey from '../Models/survey';
import response from '../Models/response';

//instantiate an object of type index controller
import {  DisplayAddPage, DisplayEditPage, DisplayHomePage, DisplaySurveyPage, performDelete, ProcessAddPage, ProcessEditPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET survey page. */
router.get('/survey', DisplaySurveyPage);

router.get('/add', DisplayAddPage);

router.post('/add', ProcessAddPage);

/* GET  edit survey page. */
router.get('/edit/:id', DisplayEditPage);

/* Process  edit survey page. */
router.post('/edit/:id', ProcessEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', performDelete);
module.exports = router;