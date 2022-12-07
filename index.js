const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');


const inquirer = require('inquirer');
const fs = require('fs');
const createCards = require('./src/createCards');

const team = [];

function addManager (){
inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's ID number?",
      },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email?",
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the Manager's office number?",
    },
  ])
  .then((data) => {
    const {name, id, email, officeNum} = data;
    const managerInput = new manager (name, id, email, officeNum);
    
    team.push(managerInput);
    console.log(managerInput);

    addTeam()
  });
};

function addTeam(){
inquirer
  .prompt([
    {
        type: 'list',
        name: 'addType',
        message: "Add an Engineer or Intern to the team?",
        choices: ["Engineer","Intern","No"]
    },
  ])
  .then((data) => {
    console.log(data);
    if (data.addType == "Engineer"){
        console.log("adding Engineer");
        addEngineer();
    }
    else if (data.addType == "Intern"){
        console.log("adding Intern");
        addIntern();
    }
    else{
        draftFile();
    }
  });
};

function addEngineer(){
    inquirer
    .prompt([
      {
          type: 'input',
          name: 'name',
          message: "What is the Engineer's name?",
      },
      {
          type: 'input',
          name: 'id',
          message: "What is the Engineer's ID number?",
        },
      {
          type: 'input',
          name: 'email',
          message: "What is the Engineer's email?",
      },
      {
          type: 'input',
          name: 'gitHub',
          message: "What is the Engineer's GitHub?",
      },
    ])
    .then((data) => {
      const {name, id, email, gitHub} = data;
      const engineerInput = new engineer (name, id, email, gitHub);
      
      team.push(engineerInput);
      console.log(engineerInput);
  
      addTeam()
    });
};

function addIntern(){
    inquirer
    .prompt([
      {
          type: 'input',
          name: 'name',
          message: "What is the Intern's name?",
      },
      {
          type: 'input',
          name: 'id',
          message: "What is the Intern's ID number?",
        },
      {
          type: 'input',
          name: 'email',
          message: "What is the Intern's email?",
      },
      {
          type: 'input',
          name: 'school',
          message: "What is the Intern's school?",
      },
    ])
    .then((data) => {
      const {name, id, email, school} = data;
      const internInput = new intern (name, id, email, school);
      
      team.push(internInput);
      console.log(internInput);
  
      addTeam()
    });
};

function draftFile(){
    console.log(team);
    console.log(createCards(team));
    

    // fs.writeFile('./dist/index.html', data, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //  })
    
};

addManager()