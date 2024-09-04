//addition

let addTwoNumbers=(a:number,b:number):number=>{
    return a+b
}
console.log(addTwoNumbers(2,4))
         
           //rest parameter
           
let restParameter=(c:number,d:number,...rest:number[])=>{
return (c+d)+rest.reduce((acc,num)=>acc+num,0)
}
console.log(restParameter(2,3,...[1,2,3,4,5,6,7,8,9]))