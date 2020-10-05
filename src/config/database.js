module.exports = {
  dialect: 'postgres',
  host: 'ec2-52-200-82-50.compute-1.amazonaws.com',
  username: 'tlgkuxdgkmvsqg',
  password: '95572d92c65c6612c166b6159f5d41334d33af93331e03ddfcb68ed96316ac14',
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