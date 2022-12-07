function createManager (manager){
    return `
        <div class="card">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNum}</p>
        </div>
    `;
};

function createEngineer (engineer){
    return `
        <div class="card">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    `;
};

function createIntern (intern){
    return `
        <div class="card">
                <h3>${intern.name}</h3>
                <h4>Engineer</h4>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
        </div>
    `;
};

const cardArray = [];

function createCards(data){

    for (let i=0; i<data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

            if (role == "Manager"){
                const managerCard = createManager(employee);
                cardArray.push(managerCard);
            }
            if (role == "Engineer"){
                const engineerCard = createEngineer(employee);
                cardArray.push(engineerCard);
            }
            if (role == "Intern"){
                const internCard = createIntern(employee);
                cardArray.push(internCard);
            }
    }    
   console.log("******"+cardArray);
   createTeam(cardArray);
}

function createTeam(cardArray){
    return `
<!DOCTYPE html>
<html>

<head>
    <title>Team Profile Generator</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
    <header>
      <div class= "large-font">Team Profile Generator</div>
    </header>

    <main>
        ${cardArray}
    </main>
    <script src="./index.js"></script>
</body>
</html>
    `;
    
}

module.exports = createCards; 