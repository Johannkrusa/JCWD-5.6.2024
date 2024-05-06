for(var i = 0; i < 10; i++)
{
    if(i == 0 || i % 2 == 0)
    {
        console.log("hello");
    }
    else
    {
        console.log("world");

    }
}

var str = "";

for(var i = 0; i<10; i++)
{
    str += "+";
}
console.log(str);


// array

var nums = [1,2,3,4,5,6];
console.log(nums);
nums [7] = 8;
console.log(nums);
console.log(nums.length)

// adds array from behind
nums.push(9, 10);
console.log(nums);

// adds array from upfront
nums.unshift(-2,-1,0);
console.log(nums);

let player_1 = {
    name : "Virdian",
    baseHealth : 100,
    basePower : 90
};

let player_2 = {
    name : "Arthur",
    baseHealth : 120,
    basePower : 150
};

let players = [player_1, player_2];

console.log(players);

let npc = [{
    name : "Tarkov",
    baseHealth : 150,
    basePower : 50
},
{
    name : "Yunyun",
    baseHealth : 10,
    basePower : 250
}]

let allCharacters =  players.concat(npc);
console.log(allCharacters);

let names = allCharacters.map(item => item.name);

console.log(names);

console.log(nums.map(function(item, index){
    return{
        value: item*index
    }
}))

let char_names = ["Circa", "Politoad", "Arceus"];
console.log (char_names.join(","));
let pokemon_names = ("bidoof,arceus,pikachu");
console.log (pokemon_names.split(","));

for(item of allCharacters)
    {
        console.log(item.name);
    }
// doesnt have to be "item"
for(segs of allCharacters)
    {
        console.log(segs.name);
    }

// function

function compute (x)
{
    let result = (5*x) - 10;
    return result;
}

console.log(compute(5));

function compute2(x)
{
    result = 5*x -10;
    return result;
}   


// fetch the return value from the function
result = compute2(10);

console.log(result);


// declaration => function
// expression => calling that said function

// anonymous function, where the function's name is equal to the name of the variable given;
const test2 = function(x)
{
    return x*x;
}

console.log(test2(10));

// nested function = writing function inside another function

var name_2 = "ash"
function callName(){
    let i = 10;
    console.log(i);

    console.log(name_2)

    // can only be called inside this scope "callName()" scope;
    function callName_2()
    {
        name_2 = "ardiis"
        console.log(name_2)
    }
    
    callName_2();
}
callName();

// default parameter, can only be assigned to param >1 
function showStats(name, baseHealth, basePower = 10)
{
    return{
        name:name,
        baseHealth:baseHealth,
        basePower:basePower
    }
}

console.log(showStats("Tarkov", 150));

// rest parameter 
function restParam(x, y, ...z)
{
    console.log(x);
    console.log(y);
    console.log(z);
}

restParam(1,2,3,4,5,6,7,8,9,10);

// 

function factorial (x)
{
    if (x > 1)
        {
            return (factorial(x-1)* x);
        }
    else{
        return 0;
    }
}

console.log(factorial(7));

// arrow function have their own limitation
// expression cannot use the method "this"
const palindrome = (word) => {
    console.log("this -->", this);
    let word2 = "";
    for ( let i = word.length-1; i>= 0; i--)
        {
            word2 += word[i];
        }
        return word == word2;
}

console.log(palindrome("kasur ini rusak"));

// declare function
function palindrome2(word) {
    console.log("this -->", this); // Will refer to the global object or undefined in strict mode
    let word2 = "";
    for (let i = word.length - 1; i >= 0; i--) {
        word2 += word[i];
    }
    return word == word2;
}
console.log(palindrome2("kasur ini rusak"));
