const pool = require('../db');

module.exports = {
    getAppointments: async (req, res) => {
        const result = await pool.query('SELECT * FROM patients');
        res.json(result.rows);
    },
    setAppointment: async (req, res) => {
        const { id, date, time } = req.body;
        await pool.query(
            'UPDATE patients SET appointment_date = $1, appointment_time = $2 WHERE id = $3',
            [date, time, id]
        );
        res.send('Appointment set successfully');
    },
    addNextAppointment: async (req, res) => {
        const { id, date, time } = req.body;
        await pool.query(
            'UPDATE patients SET next_appointment_date = $1, next_appointment_time = $2 WHERE id = $3',
            [date, time, id]
        );
        res.send('Next appointment added successfully');
    },
};
