const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/shopApp');

    console.log("Connection Open")
}

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function (){
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function (){
    this.first = "YO";
    this.last = "MAMA";
    console.log("About to Save")
})

personSchema.post('save', async function (){
    console.log("Just Saved")
})

const Person = mongoose.model('Person', personSchema);
