module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "kollab",
      charset: "utf8",
    },
  },
  production: {
    client: "mysql",
    connection: process.env.JAWSDB_URL,
    migrations: {
      directory: __dirname +  "./migrations",
    },
    seeds: {
      directory: __dirname + "./seeds",
    }
  },
};
