const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const pool = new Pool({
    user: process.env.DB_USER ? process.env.DB_USER : 'ckan',
    host: process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1',
    database: process.env.DB_NAME ? process.env.DB_NAME : 'ckan',
    password: process.env.DB_PASS ? process.env.DB_PASS : 'ckan',
    port: process.env.DB_PORT ? process.env.DB_PORT : 5432,
  });
  pool.connect();
  
  console.log({
      user: process.env.DB_USER ? process.env.DB_USER : 'ckan',
      host: process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1',
      database: process.env.DB_NAME ? process.env.DB_NAME : 'ckan',
      password: process.env.DB_PASS ? process.env.DB_PASS : 'ckan',
      port: process.env.DB_PORT ? process.env.DB_PORT : 5432,
  });

async function getUserNames() {
    try {
        let res = await pool.query('SELECT name FROM public.user');

        return res.rows;
    } catch(err) {
        console.error(err);
    }
}

// if passed an apikey, will use that to update, otherwise will generate a new one
async function updateUser(name, apikey = uuidv4()) {
    try {
        await pool.query("UPDATE public.user SET apikey = $1 WHERE name = $2", [apikey, name]);
    } catch(err) {
        console.error(err);
    }
}

async function main() {
    const userFile = process.argv[2];

    let users = [];
    // if passed a file location/name, will use that to update users, otherwise will get all users from db
    if (userFile) {
        users = JSON.parse(fs.readFileSync(userFile, 'utf8'));
    } else {
        users = await getUserNames();
    }

    for (let user of users) {
        await updateUser(user.name, user.apikey)
    }

    console.log('Updated apikeys!');
    process.exit();

}

main();
