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
    size: 'small',
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
    size: 'small',
    temperament: 'stoic',
    imageUrl: 'https://www.duckshop.com/shop_cfg/rubberducks/badeente09.05.201209-04-07.jpg',
    gender: 'female',
    age: 0,
    isRubber: false},
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
    size: 'small',
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

const buildDuckCards = (duckCollection) => {
    let domString = '';
    domString += '<div class="row">';
    for (let i=0;i<duckCollection.length;i++) {
        domString += `
        <div class="card duck col-4" style="width: 18rem;">
        <h3>${duckCollection[i].name}</h3>
            <img src="${duckCollection[i].imageUrl}" class="card-img-top" alt="pic of ${duckCollection[i].name}">
            <div class="card-body">
                <p class="card-text">${duckCollection[i].name} is a ${duckCollection[i].age}-year old ${duckCollection[i].size} ${duckCollection[i].breed} who is often ${duckCollection[i].temperament}.</p>`;
                if (ducks[i].isRubber) {
                    domString += '<h4>NOT A REAL DUCK</h4>';
                };
            domString += '</div>'
        domString += '</div>'
    };
    domString += '</div>'
    return domString;
}

const filterDucksSizeEvent = (event) => {
    const buttonId = event.target.id;
    const tempDuckCollection = [];
    for (let i=0;i<ducks.length;i++) {
        if (ducks[i].size === buttonId) {
            tempDuckCollection.push(ducks[i]);
        }
    }
    printToDom('#duckContainer', buildDuckCards(tempDuckCollection));
}

const filterDucksGenderEvent = (event) => {
    const buttonId = event.target.id;
    const tempDuckCollection = [];
    for (let i=0;i<ducks.length;i++) {
        if (ducks[i].gender === buttonId) {
            tempDuckCollection.push(ducks[i]);
        }
    }
    printToDom('#duckContainer', buildDuckCards(tempDuckCollection));
}

const filterDucksRubberEvent = () => {
    const tempDuckCollection = [];
    for (let i=0;i<ducks.length;i++) {
        if (ducks[i].isRubber === true) {
            tempDuckCollection.push(ducks[i]);
        }
    }
    printToDom('#duckContainer', buildDuckCards(tempDuckCollection));
}

const clickEvents = () => {
    document.querySelector('#small').addEventListener('click', filterDucksSizeEvent);
    document.querySelector('#medium').addEventListener('click', filterDucksSizeEvent);
    document.querySelector('#large').addEventListener('click', filterDucksSizeEvent);
    document.querySelector('#male').addEventListener('click', filterDucksGenderEvent);
    document.querySelector('#female').addEventListener('click', filterDucksGenderEvent);
    document.querySelector('#rubber').addEventListener('click', filterDucksRubberEvent);
}

const init = () => {
    printToDom('#duckContainer', buildDuckCards(ducks));
    clickEvents();
}

init ();