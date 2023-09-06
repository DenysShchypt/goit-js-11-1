import {searchWeather} from './api';

const refs= {
    form:document.querySelector('.search-form'),
    inputWeather: document.querySelector('.search-input'),
    btnSearchWeather: document.querySelector('.btn')
};

refs.form.addEventListener('submit',handlerWeather);

function handlerWeather(e) {
    e.preventDefault()
    const weatherCity= e.currentTarget.elements.searchQuery.value;
    searchWeather(weatherCity).then(createCardWeather).catch(error=>{console.log(error);})
    
}
function createCardWeather(res) {
   const markupCard= createMarkupCard(res.data);
   refs.form.insertAdjacentHTML('afterend',markupCard);
}

function createMarkupCard(params) {
    const{current:{temp_c},location:{country,name,localtime}}=params
    return `    <ul  class="card list"> Weather 
    <li class="item-card">Country: ${country}</li>
    <li class="item-card">City: ${name}</li>
    <li class="item-card">Temp: ${temp_c}°С</li>
    <li class="item-card">Data: ${localtime}</li>
  </ul>`
}