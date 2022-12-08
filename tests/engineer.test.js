const Engineer = require("../lib/Engineer");

describe("Testing Engineer Class",() =>{
    it ("should be able to create instance", () =>{
        //data setup
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com"
        //create case
        const engineer = new Engineer(name, id, email)
        //make assertion
        expect(engineer.name).toBe(name);
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
    });
});