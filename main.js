const ducks = [
    {color: 'white',
    name: 'Chelsea',
    breed: 'mallard',
    size: 'medium',
    temperament: 'chill',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31GhPm2isCL.jpg',
    gender: 'female',
    age: 13,
    isRubber: true},
    {color: 'yellow',
    name: 'Ernie',
    breed: 'pekin',
    size: 'tiny',
    temperament: 'quiet',
    imageUrl: 'https://s3.distributorcentral.com/uploads/6/1/6172FA6BE110D08BC61F6307A7E71B3C.jpg',
    gender: 'male',
    age: 45,
    isRubber: true},
    {color: 'green',
    name: 'Sally',
    breed: 'cayuga',
    size: 'medium',
    temperament: 'happy',
    imageUrl: 'https://www.mcmurrayhatchery.com/images/global/mc/McMurrayHatchery-Cayuga-Duck.jpg',
    gender: 'female',
    age: 12,
    isRubber: false},
    {color: 'green',
    name: 'Oliver',
    breed: 'mallard',
    size: 'medium',
    temperament: 'curious',
    imageUrl: 'https://hattiesburgzoo.com/wp-content/uploads/2018/03/mallard.jpg',
    gender: 'male',
    age: 20,
    isRubber: false},
    {color: 'pink',
    name: 'Cindy',
    breed: 'pekin',
    size: 'tiny',
    temperament: 'stoic',
    imageUrl: 'https://www.duckshop.com/shop_cfg/rubberducks/badeente09.05.201209-04-07.jpg',
    gender: 'female',
    age: 0,
    isRubber: true},
    {color: 'brown',
    name: 'Juan',
    breed: 'indian runner',
    size: 'large',
    temperament: 'bossy',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Runner-ducks.jpg/330px-Runner-ducks.jpg',
    gender: 'male',
    age: 0,
    isRubber: false},
    {color: 'yellow',
    name: 'Svenson',
    breed: 'blue swedish',
    size: 'tiny',
    temperament: 'curious',
    imageUrl: 'https://www.purelypoultry.com/images/blue-swedish-ducklings_01.jpg',
    gender: 'male',
    age: 0,
    isRubber: false},
    {color: 'white',
    name: 'Brooke',
    breed: 'indian runner',
    size: 'large',
    temperament: 'busy',
    imageUrl: 'https://poultrykeeper.com/wp-content/uploads/2015/01/Indian-Runner-Duck-cut-out1.jpg',
    gender: 'female',
    age: 100,
    isRubber: false}
]

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}

const buildDuckCards = () => {
    let domString = '';
    for (let i=0;i<ducks.length;i++) {
    
        domString += `
        <div class="duck">
            <h2>${ducks[i].name}</h2>
            <img src="${ducks[i].imageUrl}" alt="image of ${ducks[i].name}">
            <p>${ducks[i].name} is a ${ducks[i].age}-year old ${ducks[i].size} ${ducks[i].breed} who is often ${ducks[i].temperament}.</p>`;
        if (ducks[i].isRubber) {
            domString += '<h4>NOT A REAL DUCK</h4>';
        };
        domString += '</div>'
        
    };
    return domString;
}


printToDom('#duckContainer', buildDuckCards());