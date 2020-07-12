var data;
const someFunc= (a,b,sum)=>{
setTimeout(()=>{
     data=a+b;
    sum(data);   
},5000)
}

someFunc(1,2,(data)=>{
    console.log(data);
})