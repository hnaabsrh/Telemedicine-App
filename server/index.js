const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');

app.use(cors());
app.use(bodyParser.json());

app.use('/doctor', doctorRoutes);
app.use('/patient', patientRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
