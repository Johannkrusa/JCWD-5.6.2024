// exercise

// query 1
function drawTriangle(size)
{
    var result = '';
    for (var i = 1; i <= size; i ++)
        {
            result += i;
            console.log(result)
        }
}

drawTriangle(5)

function drawTriangle2(size)
{
    var result = '';
    var counter = 0;

    for (var i = 1; i <= size; i++)
        {
            for (var j = 1; j <= i; j++)
                {
                counter++;
                if (counter < 10) {
                    result += '0';
                }
                result += counter + ' ';
            }
            console.log (result);
            result = '';
        }
}
drawTriangle2(10)

// query 2
function FizzBuzz(size)
{
    var result = '';
    
    for (var i = 1; i <= size; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
                {
                    result += "FizzBuzz";
                }
            else if (i % 3 == 0)
                {
                    result += "Fizz";
                }
            else if (i % 5 == 0)
                {
                    result += "Buzz";
                }
            else
            {
                result += i;
            }
            result += ", ";
        }
    return result;
}

console.log(FizzBuzz(15))

// query 3

function BMI_Calc(weight, height)
{
    BMI = weight / ((height / 100)**2)
    if (BMI < 18.5)
    {
        return "less weight";
    }
    else if (BMI < 24.9)
    {
        return "ideal";
    }
    else if (BMI < 29.9)
    {
        return "overweight";
    }
    else if (BMI < 39.9)
    {
        return "very overweight";
    }
    else
    {
        return "obesity";
    }
}

console.log(BMI_Calc(85, 175))

// query 4

function removeFromArray(givenArray)
{
    var tempArray = [];
    for (item of givenArray)
        {
            if (item % 2 == 0)
                {
                    tempArray.push(item);
                }
        }
    return tempArray;
}

var newArray = [1,2,3,4,5,6,7,8,9,10];

console.log(removeFromArray(newArray))

function removeFromArray2(givenArray) {
    for (let i = givenArray.length - 1; i >= 0; i--)
    {
        if (givenArray[i] % 2 !== 0)
        {
            givenArray.splice(i, 1);
        }
    }
    return givenArray;
}

var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(removeFromArray2(newArray));

// simplest way
function removeFromArray3(givenArray) {
    return givenArray.filter(item => item % 2 === 0);
}

var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(removeFromArray3(newArray));

// query 5

function stringToArray(string)
{
    return string.split(" ");
}

console.log(stringToArray("nights of nights"));
