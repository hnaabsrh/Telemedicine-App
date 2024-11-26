const pool = require('../db');

module.exports = {
    requestAppointment: async (req, res) => {
        const { name } = req.body;
        await pool.query('INSERT INTO patients (name) VALUES ($1)', [name]);
        res.send('Appointment requested successfully');
    },
    getAppointments: async (req, res) => {
        const { id } = req.params;
        const result = await pool.query(
            'SELECT * FROM patients WHERE id = $1',
            [id]
        );
        res.json(result.rows);
    },
};
