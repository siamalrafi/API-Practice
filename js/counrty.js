const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    const counrtyContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const contryDiv = document.createElement('div');
        contryDiv.classList.add('Country');
        contryDiv.innerHTML = `
<h3>User Name >   ${country.name.common}</h3>
<p>User capital >   ${country.capital}</p>
<p>Description >   ${country.continents}</p>
<button onclick="loadCountryDetalils('${country.cca2}')">Details</button>
`;
        counrtyContainer.appendChild(contryDiv)
        // console.log(countries[0].name.nativeName)
    });
}
const loadCountryDetalils = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))
}
const displayDetails = country => {
    const CountryDetalils = document.getElementById('display-counrtyDetails');
    CountryDetalils.style.position = 'fixed'
    CountryDetalils.innerHTML = `
<h3>Country Name >  ${country.name.common} </h3>
<img src="${country.flags.png}" >
`

}
loadCountries()


