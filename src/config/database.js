module.exports = {
  dialect: 'postgres',
  host: 'ec2-54-156-53-71.compute-1.amazonaws.com',
  username: 'wsiuqslewoyvqf',
  password: '74824c536a5e7147bcbff34b52a0806237ce5f1708ab2f110641ea1355aa41a5',
  database: 'dethsbgmq3c0gt',
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