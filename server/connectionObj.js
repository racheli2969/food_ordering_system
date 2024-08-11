const connection = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "Toor22",
      database: "takeABiteDB",
    },
    listPerPage: 10,
  };
  module.exports = connection;