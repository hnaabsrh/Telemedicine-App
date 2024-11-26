const express = require('express');
const router = express.Router();
const doctorModel = require('../models/doctorModel');

router.get('/appointments', doctorModel.getAppointments);
router.post('/set-appointment', doctorModel.setAppointment);
router.post('/add-next-appointment', doctorModel.addNextAppointment);

module.exports = router;
