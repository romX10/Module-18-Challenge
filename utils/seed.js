const connection = require('../config/connection');
const { User } = require('.././models/User');
const { Thought } = require('.././models/Thought');
const { getRandomName, getRandomEmail, getRandomThoughts } = require('./data');

connection.on('error', (err) => {
    console.error('CONNECTION ERROR:', err);
    process.exit(1);
});

connection.once('open', async () => {
    console.log('CONNECTION OPEN');
    //connection.set('strictQuery', false);
    //await User.deleteMany({});
    //await Thought.deleteMany({});
    const users = [];
    for (let i = 0; i < 20; i++) {
        const user = getRandomName();
        const email = `${user}${getRandomEmail()}`;
        const thoughts = getRandomThoughts(user);
        const friends = getRandomName();
    
        users.push({
          user,
          email,
          thoughts,
          friends
        });
      }
    await User.collection.insertMany(users);
    console.table(users);
    console.info('Seeding Completed');
    process.exit(0);
});
