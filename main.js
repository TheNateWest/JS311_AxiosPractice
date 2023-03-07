// just a check
console.log("we are working")

const axios = require('axios');

const getContact = () => {

    try {
        const res = axios.get('https://randomuser.me/api/')
        .then(res => { console.log(res.data.results)})
    } catch(e) {
        console.log("ERROR", e)  
    } finally {
        // always executed
    }
}


// console.log(getContact())

// https://swapi.dev/api/people/1 // but i want to pick different numbers

const getStarwarsPerson = (id) => {

    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)

    } catch(e) {

        console.log("ERROR", e)  
    }
}

console.log(getStarwarsPerson(5));

console.log(getStarwarsPerson2(15));