
// Function Definition
function greet(){
    alert("Good Afternoon")
}

// Function Call
// greet();
// greet();



//Function Argument and parameter
// function add(a,b){ //parameters are the placeholders like a,b
//     console.log(a+b);
    
// }

// add(10,20)//arguments are actual values
// add(100,20)



// Return keyword in function 

// function square(n){
// return(n*n);
    
// }

// console.log("Square : ",square(7) )

// console.log(3.14*square(6));


// console.log("Area of cicrle: ",(3.14*square(5)));


// Function Expression (hoisting)



// var cube = function (num){
//      return num*num*num;
// }

// console.log(cube(2));



// console.log(PI());

// function PI(){
//     return Math.PI
// }


// Arrow Function (Shorthand for the function)

// function sub(a,b)
// {
//     return a-b
// }


// let mul = (a,b) => {
//     console.log("Multiplication is :");
//     console.log(a*b);
    
//     return 0
// }  

// console.log(mul(10,4));




// Nested Function 


// function greet(name){
//     function morning(){
//         return `Goood Morning,${name} !`
//     }
//     function noon(){
//         return `Goood Afternoon,${name} !`
//     }
//     function evening(){
//         return `Goood Evening,${name} !`
//     }
//     console.log(morning() )
//     console.log(noon() )
//     console.log(evening())
    
//     return 0
// }


// console.log(greet("Jhon"))



// Function Define create
// function print(){
//     console.log("Hello User");   
// }

// function addition(a,b,c,d){
//     let result =a+b+c+d
//     console.log("a+b=",result);
//     console.log("Square=",Math.pow(result,2));
    
    
// }

function square(num){
    // console.log(num*num);
    // return num*num
}

// Function Call use
// print();
// print();
square(4)

// addition(100,45);
// addition(1,1,1,1);
// square(10)
// console.log(square(10))

// console.log("Area of Circle : ",3.14*square(4));

function cube (num){
    // console.log(num*num*num);
    return num*num*num
}
// cube(4)
console.log( "area of circle :",3.14*cube(4) );