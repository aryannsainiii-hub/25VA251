for(let i=1;i<=5;i++){
    console.log("apna college");
}

//sum of 1 to n

let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);

//for of loop ---> strings and arrays

let str="aryan";
let size =0;
for(let i of str){
    console.log(i);
    size++
}
console.log(size);


//for in loops---> objects/returns keys

let student ={
    name:"aryan",
    age:18,
    cgpa:9.23,
    isPass:true
};
for(let i in student){
    console.log(i,student[i]);
}

