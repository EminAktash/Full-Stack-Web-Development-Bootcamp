// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// for (let i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// for (let i  = 100; i >= 0; i--){
//     console.log(i);
// }

const seetingChart = [
    ['EA','AK','OTY'],
    ['YG','MK','QW'],
    ['FA','AB','DE']
]

for (let i = 0; i < seetingChart.length; i++){
    const row = seetingChart[i];
    console.log(`Row # ${i}`);
    for (let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}


