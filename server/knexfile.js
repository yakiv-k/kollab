require("dotenv").config();

process.env.NODE_ENV === "production"
  ? (module.exports = {
      production: {
        client: "mysql",
        connection: process.env.JAWSDB_URL,
      },
    })
  : (module.exports = {
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
    });

// const connections = {
//   development: {
//     client: 'mysql',
//     connection: {
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: 'kollab',
//       charset: 'utf8',
//     },
//   },
//   production: {
//     client: 'mysql',
//     connection: process.env.JAWSDB_URL,
//   },
// };

// console.log(connections.development);

// module.exports =
//   process.env.NODE_ENV === 'production'
//     ? connections.production
//     : connections;
