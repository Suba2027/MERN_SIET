let a=10;
let b=a;
a=20;
console.log(b);

console.log("testing");
let object1={age:33};
let object2=object1;
object1.age=22;
console.log(object2.age);

function sum(a,b){
    console.log(a+b);
}

sum(11,12);

// arrow fun

const sum2=(a,b,c)=>{
    console.log(a+b+c);
}
sum2(11,22,33);

