//         // map
        
//         function double(num){
//             return num*2;
//         }
//         let arr=[2,3,4,5,6,7];
//         let doubledArr=arr.map(double);
//         console.log(doubledArr);
//         const tripleArr=arr.map((n)=>n*3);
//         console.log(tripleArr);
 
 

//         let students=[
//             {name:"suba",std:"clg"},
//             {name:"har",std:"sch"}
//         ]
//         let prnnames=students.map(names=>names.name);
//         console.log(prnnames);


//         // even or odd
// let number=[1,2,3,4,5,6,7,8,9,21];
// let odd=number.filter(num=>num%2!=0);
// let even=number.filter(num=>num%2==0);
// console.log(odd);
// console.log(even);

// console.log(number.map(mul=>mul*5));

// // multiples of 5

//  import readline from 'node:readline';
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("enter number sep by ,",(input)=>{
//     let numbers =input.split(",").map(Number);
//     function multof5(numbers){
//     return numbers.filter(num=>num%5===0);
// }
// console.log('5 multipliers: ',multof5(numbers));
// rl.close();
// });


// // array.reduce((accumulator, currentValue) => { ... }, initialValue)

// // let array=[1,2,3,4,5];
// // let sum=array.reduce((product,current)=>{
// //     return product*current},3)
// //     console.log(sum);

// let a=[1,2,3,4,5,6];
// let ans=a.map(n=>n*3).filter((n)=>n%2==0).reduce((sum,cur)=>{return sum+cur},0);
// console.log(ans);

// let b=[1,2,3,4,5];
// const [one,three,two]=b;
// console.log(three);

// let b=[1,2,3,4,5];
// const [one,...two]=b;
// console.log(two);

// let b=[1,2,3,4,5];
// const [one,...two]=b;
// console.log(two);
// let num=[0,...b,6,7];
// console.log(num);

// const obj1={x:4,y:7};
// const obj2={y:3,z:8};
// const spread={...obj1,...obj2}
// console.log(spread);

// macrotime(executed only after the completion of microtask),promises(pending,success, )

// const promise= new promise (resolve,reject)=>{
//     setTimeout(()=>{
//         const success=true;
//         if(success){
//             resolve("resolved successfully");
//         }
//         else{
//             reject("rejected");
//         }
//     },2000)
// }


// JSON,fetch,api,.then,.catch

// assync function
async function fetchApi(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json();
        data.map((user)=>{
            console.log(user.name)
        })
    }
    catch(error){
        console.log(error);
    }
}
fetchApi();