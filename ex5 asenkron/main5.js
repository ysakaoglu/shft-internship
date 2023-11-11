const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function getCountries() {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()

        data.forEach(country => {
        console.log(`Ülke: ${country.name}`);
        console.log(`Başkent: ${country.capital}`);
        console.log(`Diller: ${country.languages.map(lang => lang.name).join(', ')}`);
        console.log(`Nüfus: ${country.population}`);
        console.log(`Alan: ${country.area}`);
        console.log('-----------------------');    
        })
    } catch (error) {
        console.error('Bir hata olustu:', error)
    }
}

getCountries()


/*fetch(countriesAPI) ...
    .then(response => response.json()).then(data => {
        data.forEach(country=> {
        console.log(`Ülke: ${country.name}`)
        console.log(`Başkent: ${country.capital}`)
        console.log(`Diller: ${country.languages.map(lang => lang.name).join(', ')}`);
        console.log(`Nüfus: ${country.population}`);
        console.log(`Alan: ${country.area}`);
        console.log(`--------------------------`)
    });
})
.catch(error => {
    console.error('Bir hata olustu:', error);
})*/
