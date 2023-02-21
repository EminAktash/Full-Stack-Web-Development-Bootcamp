// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log('response', res)
//     })
//     .catch((e)=>{
//         console.log('ERROR',e)
//     })

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }
//     catch (e) {
//         console.log("Error", e)
//     }

// };

// getStarWarsPerson(5)

const jokes = document.querySelector("#jokes")
const button = document.querySelector("button")


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    }
    catch(e){
        return 'No Jokes Are Available :('
    }
}
button.addEventListener('click', addNewJoke)