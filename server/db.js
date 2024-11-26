const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'telemedicine',
    password: 'hana11',
    port: 5432,
});

module.exports = pool;
