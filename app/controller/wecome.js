import fetchCategoryChuck from '../service/api.js';
import fetchRandomChuck from '../service/api.js';
import searchChuck from '../service/api.js';
import  {bind}  from '../view/welcome.js'
import {renderCanvas} from '../view/welcome.js'


async function getChuck () {
    let data = await fetchRandomChuck();
    console.log(data.value + ' //// random chuck');
    
    bind('refreshPage', refreshRandom);
    renderCanvas(data);
}


function refreshRandom() {
    window.location.reload();
}

async function catChuck(category) {
    this.category = category || 'animal';
    let data = await fetchCategoryChuck(category);
    console.log(category);
    console.log(data.value + ' ////// category');
    
}

async function search(terms) {
    let data = await searchChuck(terms)
    console.log(terms);
    console.log(data.value + ' ////// terms');
}





export default getChuck;
export { catChuck, search };