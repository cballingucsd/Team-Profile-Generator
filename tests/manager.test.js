const Manager = require("../lib/Manager");

describe("Testing Manager Class",() =>{
    it ("should be able to create instance", () =>{
        //data setup
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com"
        //create case
        const manager = new Manager(name, id, email)
        //make assertion
        expect(manager.name).toBe(name);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
    });
});