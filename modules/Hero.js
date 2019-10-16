import { Person } from "./Person.js";


export class Hero extends Person{
    constructor(fname,lname, cty){
        super(cty)
        this.firstname = fname;
        this.lastname = lname;
        this._mission = "Default Mission";
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission = nmission;
    }
};