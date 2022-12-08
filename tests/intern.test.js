const Intern = require("../lib/Intern");

describe("Testing Intern Class",() =>{
    it ("should be able to create instance", () =>{
        //data setup
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com"
        //create case
        const intern = new Intern(name, id, email)
        //make assertion
        expect(intern.name).toBe(name);
        expect(intern.id).toBe(id);
        expect(intern.email).toBe(email);
    });
});