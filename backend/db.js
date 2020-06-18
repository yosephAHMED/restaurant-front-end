const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'nasbuvfd',
    password: '7chVFyzHbHkvGt6DHho4Ay1Ar-vi7nVX',
    host: 'ruby.db.elephantsql.com',
    port: 5432,
    database: 'nasbuvfd'
});

module.exports = pool;
