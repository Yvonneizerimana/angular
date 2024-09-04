import*as studentMarks from './interfaces'

//class

class Empdetails{
id!:number
name!:string
address!:string
}

const obj1=new Empdetails()
obj1.id=1
obj1.name="Yvonne IZERIMANA"
obj1.address="Kigali based"

console.log(obj1)

//adding constructor to our class

class Empdetail{
    id:number
    name:string
    address:string

    constructor(id:number,name:string,address:string){
        this.id=id
        this.name=name
        this.address=address
    }
    }
    
    const obj2=new Empdetail(1,"Ange nelly","musanze based")
    console.log(obj2)

    //adding  method to our class

    class Empdetai{
        #id:number
        name:string
        address:string
    
        constructor(id:number,name:string,address:string){
            this.#id=id
            this.name=name
            this.address=address
        }

        getNameWithAddress(){
            return this.name +" stays at "+ this.address
        }

        }
        
        const obj3=new Empdetai(1,"kabeza anet","rwamagana based")
        const getAddress=obj3.getNameWithAddress()
        console.log(getAddress)

//extending to class

class Empdeta{
    id:number
    name:string
    address:string

    constructor(id:number,name:string,address:string){
        this.id=id
        this.name=name
        this.address=address
    }
    getNameWithAddress(){
        return this.name +" stays at "+ this.address
    }

    }
class Manager extends Empdeta{
    constructor(id:number,name:string,address:string){
        super(id,name,address)
    }

    getNameWithAddress(){
        return this.name +" stays at "+ this.address
    }
}
let Objemp=new Empdeta(1,"masabo marie ange","Rwinkwavu")
console.log(Objemp.getNameWithAddress())

let Objmanager=new Manager(2,"kelly kelia","Nyamagabe based")
console.log(Objmanager.getNameWithAddress())

//setter and getter

class myDesk{
    id!:number
    size!:number
    color!:string

    set desk(id:number){
       this.id=id
    }

    get desk(){
        return +this.id
    }
}

let OB=new myDesk()
OB.id=20
OB.size=345
OB.color="Green"

console.log(OB.desk)

class displayStudentsMarks{
     getMarks():studentMarks.marks{
    return {regno:"230h100",name:"Abineza ange gabriel",email:"ange@gmail.com",marks:97}
     }
}

let oo=new displayStudentsMarks();
console.log(oo.getMarks())




