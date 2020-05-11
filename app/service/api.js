
async function fetchRandomChuck() {
    await console.log('hi');
    const api = `https://api.chucknorris.io/jokes/random`;
    const response = await fetch(api);
    const body = await response.json();
    
    if(!response.ok){
        throw new Error("something whent wrong");     
    }

    return body;
    
}

async function fetchCategoryChuck(category) {
    console.log('hello');
    const defaulCat = animal;
    this.category = category || defaulCat;
    
    const api = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok) {
        throw new Error("something whent wrong");
    }

    return body;
}

async function searchChuck(terms) {
    console.log('searching');
    const defaultTerm = trump;
    this.terms = terms || defaultTerm;

    console.log(terms);  
    const api = `https://api.chucknorris.io/jokes/search?query=${terms}`;
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok) {
        throw new Error("something whent wrong");
    }

    return body;
}

export default fetchRandomChuck;
export { fetchCategoryChuck, searchChuck }