const add = (x,y) => x + y;

const PI = 3.14159;

const square = x => x * x;

//First way
const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;

// =============================================
//Second way
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


// ============================================

//Third way
// module.exports.add = (x,y) => x + y;

// module.exports.PI = 3.14159;

// module.exports.square = x => x * x;

// ========================================

//Shortcut
// const add = (x,y) => x + y;

// const PI = 3.14159;

// const square = x => x * x;

// exports.add = add;
// exports.PI = PI;
// exports.square = square;