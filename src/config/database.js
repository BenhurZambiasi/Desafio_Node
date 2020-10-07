module.exports = {
  dialect: 'postgres',
  host: 'ec2-52-200-48-116.compute-1.amazonaws.com',
  username: 'hysbsrhxrcpkvn',
  password: '48b05ed228e33f1d1b1e8f94d7bb345682bd3fe8f9be95aca9be7788cc782821',
  database: 'dbt78puj8h1l3m',
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