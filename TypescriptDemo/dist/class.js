"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Empdetai_id;
Object.defineProperty(exports, "__esModule", { value: true });
//class
class Empdetails {
}
const obj1 = new Empdetails();
obj1.id = 1;
obj1.name = "Yvonne IZERIMANA";
obj1.address = "Kigali based";
console.log(obj1);
//adding constructor to our class
class Empdetail {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
const obj2 = new Empdetail(1, "Ange nelly", "musanze based");
console.log(obj2);
//adding  method to our class
class Empdetai {
    constructor(id, name, address) {
        _Empdetai_id.set(this, void 0);
        __classPrivateFieldSet(this, _Empdetai_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return this.name + " stays at " + this.address;
    }
}
_Empdetai_id = new WeakMap();
const obj3 = new Empdetai(1, "kabeza anet", "rwamagana based");
const getAddress = obj3.getNameWithAddress();
console.log(getAddress);
//extending to class
class Empdeta {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return this.name + " stays at " + this.address;
    }
}
class Manager extends Empdeta {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return this.name + " stays at " + this.address;
    }
}
let Objemp = new Empdeta(1, "masabo marie ange", "Rwinkwavu");
console.log(Objemp.getNameWithAddress());
let Objmanager = new Manager(2, "kelly kelia", "Nyamagabe based");
console.log(Objmanager.getNameWithAddress());
//setter and getter
class myDesk {
    set desk(id) {
        this.id = id;
    }
    get desk() {
        return +this.id;
    }
}
let OB = new myDesk();
OB.id = 20;
OB.size = 345;
OB.color = "Green";
console.log(OB.desk);
class displayStudentsMarks {
    getMarks() {
        return { regno: "230h100", name: "Abineza ange gabriel", email: "ange@gmail.com", marks: 97 };
    }
}
let oo = new displayStudentsMarks();
console.log(oo.getMarks());
//# sourceMappingURL=class.js.map