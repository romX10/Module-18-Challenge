const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughts = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];

const emailAddresses = [
  '@gmail.com',
  '@hotmail.com',
  '@yahoo.com',
]

const reactions = [
  'Wicked',
  'Its pretty good',
  'Mid',
  'Kinda Bad',
  'Absolutely Disgusting'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

const getRandomEmail = () => 
  `${getRandomArrItem(emailAddresses)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (user) => {
  const results = [];
  for (let i = 0; i < 3; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: user,
      reactions: getRandomReactions(),
    });
  }
  return results;
};

const getRandomReactions = () => {
  const results = [];
  for (let i = 0; i < 3; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomArrItem(names),
    });
  }
  return results;
}

/* const generateUsers = () => {
  for (let i = 0; i < 20; i++) {
    const user = getRandomName();
    const email = `${user}${getRandomEmail()}`;
    const thoughts = getRandomThoughts(user);
    const friends = [];

    users.push({
      user,
      email,
      thoughts,
      friends
    });
  }
} */

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail, getRandomThoughts };
