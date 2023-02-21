const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/relationshipDemo');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})
const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async() => {
//     // const user = new User({ username: 'chickenfan99', age: 61});
//     const user = await User.findOne({ username: 'chickenfan99'})
//     const tweet2 = new Tweet({ text:'bock bock bock my chickens make noises', likes: 1231209});
//     tweet2.user = user;
//     // user.save();
//     tweet2.save();
// }

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    console.log(t);
}

findTweet();