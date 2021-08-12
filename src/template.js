const populateTeam = team => {

    const populateManager = Manager => {
        return `
        <h1 class="text-center">Team Members</h1> 
          </div>

    <div class="container">

        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Manager</h2>
            <h3 class="card-title">${Manager.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                <li class="list-group-item">${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
    };

    const populateEngineer = Engineer => {
        return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Engineer</h2>
            <h3 class="card-title">${Engineer.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub:${Engineer.getGithub()}></a></li>
            </ul>
        </div>
    </div>
    `
};

const populateIntern = Intern => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Intern</h2>
            <h3 class="card-title">${Intern.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
};

const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => populateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => populateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => populateIntern(intern))
    .join("")
);

return html.join("");

}

module.exports = team => {

    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container">
    <div class="container">
        <h1 class="text-center">Team Members</h1> 
          </div>

    <div class="container">

        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Manager</h2>
            <h3 class="card-title">My Manager's Name</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1234</li>
                <li class="list-group-item">Email: <a href="mailto:somename@gmail.com">somename@gmail.com</a></li>
                <li class="list-group-item">Office number: 11</li>
            </ul>
        </div>
    </div>


    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Engineer</h2>
            <h3 class="card-title">My Engineer's Name</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1234</li>
                <li class="list-group-item">Email: <a href="mailto:somename@gmail.com">somename@gmail.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/somegithubaccount"></a></li>
            </ul>
        </div>
    </div>


    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Intern</h2>
            <h3 class="card-title">My Intern's Name</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1234</li>
                <li class="list-group-item">Email: <a href="mailto:somename@gmail.com">somename@gmail.com</a></li>
                <li class="list-group-item">School: Some University</li>
            </ul>
        </div>
    </div>
    ${populateTeam(team)}
        </div>
            </div>
</body>
</html>
`
};