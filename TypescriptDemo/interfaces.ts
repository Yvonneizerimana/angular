//interace

export interface students{
    regno:string
    name:string
    email:string
}
let user:students={regno:"19RP00512",name:"jhon",email:"jhon@gmail.com"}

export interface marks extends students{
    marks:number
}
let stMarks:marks={regno:"20RP00512",name:"Yvonne IZERIMANA",email:"yvonneizere@gmail.com",marks:80}

let [user11,user2,user3,...restUsers]:students[]=[
    {regno:"74382bs",name:"igabe honette", email:"igabe@gmail.com"},
    {regno:"heuuo878",name:"MUNYANA", email:"munyana@gmail.com"},
    {regno:"jd76293t",name:"ingabire", email:"ingabire@gmail.com"},
    {regno:"76587vdg",name:"karenzi", email:"karenzi@gmail.com"},
    {regno:"9874hkj8",name:"Kaneza", email:"kaneza@gmail.com"}
    
]
console.log(user11)
console.log(user2)
console.log(user3)
console.log(restUsers)

let someResult=restUsers.filter(user=>user.name==="kaneza")
console.log(someResult)



