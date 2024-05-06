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
