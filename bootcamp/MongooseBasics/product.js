const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/shopApp');

    console.log("whoohhohohohoho")
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, //this syntax helps us to add additional information, like this one
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String], // that says that categories should be an array and all the values in it 
    // should be Strings
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

// productSchema.methods.greet = function (){
//     console.log("Hello !!! Hi !!! Howdy!!!");
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale; //set it to the oppostie (false to true and true to false)
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}


const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res))
// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })//color is gonna be ignored

// bike.save()

//     .then(data => {
//         console.log("It worked")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("oH NOOO ERROOR!")
//         console.log(err)
//     })


// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 0},{ new: true, runValidators: true})
//     .then(data => {
//         console.log("It worked")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("oH NOOO ERROOR!")
//         console.log(err)
//     })