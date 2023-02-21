// const allImages = document.getElementsByTagName('img');

// for(let img of allImages){
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }image.png

// const allImages = document.getElementsByClassName('square');

// for(let images of allImages){
//     images.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

const links = document.querySelectorAll('p a');

for (let link of links){
    console.log(link.href)
}