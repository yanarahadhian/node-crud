// Production GCP

module.exports = {
  HOST: "35.222.45.57",
  USER: "root",
  PASSWORD: "12345678",
  DB: "nodecrud",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// Localhost

// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "12345678",
//   DB: "node_crud",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
