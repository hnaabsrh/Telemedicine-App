const express = require('express');
const router = express.Router();
const patientModel = require('../models/patientModel');

router.post('/request-appointment', patientModel.requestAppointment);
router.get('/appointments/:id', patientModel.getAppointments);

module.exports = router;
