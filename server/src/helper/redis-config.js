const Redis = require('ioredis');

const redisClient = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host
    username: 'default', // needs Redis >= 6
    password: process.env.REDIS_PASSWORD,
    db: 0, // Defaults to 0
});

redisClient.on('error', (err) => {
    console.log('Redis error: ,', err);
});

redisClient.on('connect', () => {
    console.log('Redis Connected (connect event)');
});

module.exports = redisClient;
