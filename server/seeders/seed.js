const db = require('../config/connection');
const { User, Dog } = require('../models');
const userSeeds = require('./userSeeds.json');
const dogSeeds = require('./dogSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Dog.deleteMany({});

        await User.create(userSeeds);
        await Dog.create(dogSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('all done!');
    process.exit(0);
});