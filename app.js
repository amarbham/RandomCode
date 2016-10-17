var Person = {
    full_name: function() {
        return this.first_name + " " + this.last_name 
    }
};


function createPerson(first_name, last_name){

    var person = Object.create(Person);

    person.first_name = first_name;
    person.last_name = last_name;

    return person;

};


var developer2 = createPerson()



function Car(name, color, wheels, type) {
    this.name = name;
    this.color = "red";
    this.wheels = wheels;
    this.type = type;
}

Car.prototype.getName = function () {
    return this.name;
};

Car.prototype.color = function () {
    return this.color;
}

Car.prototype.wheels = function () {
    return this.wheels;
}


function Porsche(racingText) {

    this.racingText = racingText;
}

function Robin(racingText) {

    this.racingText = racingText;
}

var porshe = new Car('Porsche boxter', 'red', '4', new Porsche("Porsching"));

var robin = new Car('Reliant Robin', 'blue', '3', new Robin("Robining"));


console.log(robin.type.racingText)



var doSomething = function (thing) {
    thing();
}


function log(input) {
    console.log(input)
}

var sayHello = function () {
    var message = 'Hello World!'
    log(message)
}


doSomething(sayHello)



"use strict";

var Car2 = {
    start: start,
    stop: stop
}

function start() {
    return 'Vroom!! Vroom!!!!'
}

function stop() {
    return 'Screech!!'
}

function log(input) {
    console.log(input);
}

var porshe = Object.create(Car2);

Object.defineProperty(porshe, 'color', {
    value: 'red',
    writeable: false
});

var luxuryPorshe = Object.create(porshe)


luxuryPorshe.chauffeur = 'james';


log(luxuryPorshe)
log(luxuryPorshe.start())


var data = ['data', 'data1']

data.forEach(function (data) {
    log(data)
})




var unicornEl = document.getElementById('unicorn');
unicornEl.className += ' magic';
spin(unicornEl);

var fairyEl = document.getElementById('fairy');
fairyEl.className += ' magic';
sparkle(fairyEl);

var kittenEl = document.getElementById('kitten');
kittenEl.className += ' magic';
rainbowTrail(kittenEl);



function addMagic(id, effect) {
    var element = document.getElementById(id);
    element.className += ' magic';
    effect(element);
}

addMagic('unicorn', spin);
addMagic('fairy', sparkle);
addMagic('kitten', rainbow);

'use strict';

function addColour(colour) {
    console.log(colour, 'added')
}

// addColour('red');
// addColour('orange');
// addColour('yellow');
// addColour('green');
// addColour('blue');
// addColour('purple');


var colours = ['red', 'blue', 'yellow'];


colours.forEach(function (colour) {
    addColour(colour)
});

var ids = ['unicorn', 'fairy', 'kitten'];

// elements now contains the elements we are after

// var map = function(callback, array) {
//     var newArray = [];
//     for (var i = 0; i < array.length; i = i + 1) {
//         newArray[i] = callback(array[i], i);
//     }
//     return newArray;
// }

// var getElement = function(id) {
//   return id'+id;
// };



var elements = ids.map(function (elem, index) {
    var message = "ts a " + elem

    return elem === 'fairy'
})

console.log(elements)

var numbers = [1, 3, 5, 7, 9];
var total = 0;
for (i = 0; i < numbers.length; i = i + 1) {
    total = total + numbers[i];
}


// Given an array of words, join them together with a space between each word.
// var words = ['sparkle', 'fairies', 'are', 'amazing'];
// var sentence = '';
// for (i = 0; i < words.length; i++) {
//     sentence = sentence + ' ' + words[i];
// }
// ' sparkle fairies are amazing'


var sum = numbers.reduce(function (previousValue, currentValue) {
    var total;

    return total = previousValue + currentValue;

});


var ponies = [
    [
        ['name', 'Fluttershy'],
        ['image', 'http://tinyurl.com/gpbnlf6'],
        ['description', 'Fluttershy is a female Pegasus pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Applejack'],
        ['image', 'http://tinyurl.com/gkur8a6'],
        ['description', 'Applejack is a female Earth pony and one of the main characters of My Little Pony Friendship is Magic.']
    ],
    [
        ['name', 'Twilight Sparkle'],
        ['image', 'http://tinyurl.com/hj877vs'],
        ['description', 'Twilight Sparkle is the primary main character of My Little Pony Friendship is Magic.']
    ]
];



var data = ponies.map(function (pony) {

    var obj = {}

    obj['name'] = pony[0][1];
    obj['image'] = pony[1][1];
    obj['description'] = pony[2][1];


    return obj
})

console.log(data)


function greaterThan(n) {
    return function (m) {
        return m > n;
    }
}

greaterThan(10)(9);

var numbers = [1, 2, 3]

var doubledNumbers = []


var doubled = numbers.map(function (number) {
    return number * 2
})


var paints = [{
    color: 'red'
}, {
    color: 'blue'
}, {
    color: 'yellow'
}];


function getColour(array, prop) {

    return array.map(function (index) {
        return index[prop]
    })
}

getColour(paints, 'color');


var products = [{
    name: 'cucumber',
    type: 'vegetable',
    quantity: 0,
    price: 1
}, {
    name: 'banana',
    type: 'fruit',
    quantity: 10,
    price: 15
}, {
    name: 'celery',
    type: 'vegetable',
    quantity: 30,
    price: 13
}, {
    name: 'orange',
    type: 'fruit',
    quantity: 3,
    price: 5
}, ];


var fruit = products.filter(function (product) {
    return product.type === 'fruit'
});

var stock = fruit.reduce(function (total, curr) {
    return total + curr.quantity
}, 0)


var ladders = [{
    height: '20 feet'
}, {
    height: '40 feet'
}]

function findWhere(array, criteria) {
    return array.find(function (index) {
        return criteria
    })
}

//findWhere(ladders, { height: '20 feet' });

var numbers = [10, 20, 30];

var sum = numbers.reduce(function (total, number) {
    return total + number;
}, 0)

var primaryColors = [{
    color: 'red'
}, {
    color: 'yellow'
}, {
    color: 'blue'
}, ]

var arr = primaryColors.reduce(function (prev, curr) {

    prev.push(curr.color);

    return prev;

}, [])


var string = '((())))))';

function checkMatching(string) {

    var arr = [];
    var openCount = 0;
    var closeCount = 0;

    for (var i = 0; i < string.length; i++) {

        string.charAt(i) === '(' ? openCount++ : closeCount++
    }

    return openCount === closeCount
};


checkMatching(string)

function balanced(string) {


    return !string.split('').reduce(function (prev, char) {

        if (char === '(') {
            return ++prev
        }
        if (char === ')') {
            return --prev
        }

        return prev
    }, 0)
}

balanced(string);


var trips = [{
    distance: 34
}, {
    distance: 12
}, {
    distance: 1
}];

var totalDistance = trips.reduce(function (total, trip) {
    return total += trip.distance
}, 0)



var desks = [{
    type: 'sitting'
}, {
    type: 'standing'
}, {
    type: 'sitting'
}, {
    type: 'sitting'
}, {
    type: 'standing'
}];

var deskTypes = desks.reduce(function (deskType, curr) {

    if (curr.type === 'sitting') {
        ++deskType.sitting
    }
    if (curr.type === 'standing') {
        ++deskType.standing
    }

    return deskType
}, {
    sitting: 0,
    standing: 0
});


// function unique(array){
//     return array.reduce(function(prev, curr, index, arr ){

//            arr.find(function(curr, index, arr){
//            console.log(curr, arr)
//            return arr
//         })

//         return prev

//     }, 0)
// }


function unique(arr) {

    return arr.reduce(function (prev, elem) {
        if (prev.indexOf(elem) === -1) {
            prev.push(elem)
        }
        return prev;
    }, [])

}


unique([1, 1, 2, 3, 4, 4])

const Palette = {};

Palette.get = function(colors){
    return this.colors
};

Palette.add = function(color){
    return this.colors.push(color)
}



const userPalette = Object.create(Palette);

userPalette.colors = ['red',  'green', 'blue']

'use strict'

const inventory = [
    {
        title: 'Harry Potter',
        price: 15
    },
    {
        title: 'Eloquent Javascript',
        price: 5
    }
];

const createBookShop = function(inventory){

    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce((total, book) => total += book.price, 0);
        },
        priceByTitle: function(title){
            return this.inventory.find(book => book.title == title ).price
        }
    }
};

const bookShop = createBookShop(inventory)