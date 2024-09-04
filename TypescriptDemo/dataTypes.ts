//string
let myNames="Yvonne IZERIMANA"
let newMyNames=myNames.toLocaleUpperCase()
console.log(newMyNames)

//number

let age:number
age=25
console.log(age)

let dob="25"
let result=parseInt(dob)
console.log(result)

//array

let empList:string[]
empList=["ange","nelly","netty","agabe"]
console.log(empList)

let reverse=empList.reverse()
console.log(reverse)

let numList:Array<number>
numList=[1,2,3,4,5,6,6]
let filterNumber=numList.filter((num)=>num>3)
console.log(filterNumber)

let findNumber=numList.find((num1)=>num1===2)
console.log(findNumber)

let addArray=numList.reduce((a,b)=>a+b,0)
console.log(addArray)

//enum

enum color{
    red=1,
    blue,
    green,
    yellow
}

let getEnum:color=color.green
console.log(getEnum)

//tuples

let swappNumbers:[number,number,number]
let swapp=(num1:number,num2:number,num3:number):[number,number,number]=>{
    return [num1,num2,num3]
}
console.log(swapp(23,34,56))

//any

let department:any
department="IT"
department=45
department=true

console.log(department)
