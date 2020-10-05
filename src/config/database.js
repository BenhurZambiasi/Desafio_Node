module.exports = {
  dialect: 'postgres',
  host: 'ec2-52-200-82-50.compute-1.amazonaws.com',
  username: 'tlgkuxdgkmvsqg',
  password: 'node',
  port: 5432,
  database: 'd2gj865h3ooui0',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};