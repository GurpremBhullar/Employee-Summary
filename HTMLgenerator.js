function HTMLgenerator(empInfo) {
  console.log(empInfo)
  return 
  
  `<!DOCTYPE html>
  <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Employee Summary</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="card-header card border-dark mb-4">
                <h1>Gurprem's Team</h1>
                <p>my group of elites</p>
            </div>
        </div>
    </div>

    <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">{${empInfo.managersName}</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${empInfo.managersName ?empInfo.managersName : " "}</li>
                    <li class="list-group-item">Email: ${empInfo.managersId ?empInfo.managersId : " "}</li>
                    <li class="list-group-item">Office number: ${empInfo.emailManager ?empInfo.emailManager : " "}</li>
                </ul>
            </div>
        </div>

        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${empInfo.firstEngineer}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>engineer one</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${empInfo.idFirstEngineer}</li>
                <li class="list-group-item">Email: ${empInfo.emailFirstEngineer}</li>
                <li class="list-group-item">GitHub: ${empInfo.githubEngineer1}</li>
            </ul>
        </div>
    </div>
    
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${empInfo.secondEngineer}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>engineer 2</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${empInfo.IdSecondEngineer}</li>
            <li class="list-group-item">Email: ${empInfo.emailSecondEngineer}</li>
            <li class="list-group-item">GitHub: ${empInfo.githubEngineer2</li>
        </ul>
    </div>
</div>

<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{{ name }}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
        </ul>
    </div>
</div>
      
      <div class="container">
        <h2>The Intern Table</h2>
        <p>info</p>            
        <table class="table table-bordered">
          <thead>
            <tr>
            <th>${empInfo.internsName ?answers.internsName : " "}</th>
            <th>${empInfo.internsId ?answers.internsId : " "}</th>
            <th>${empInfo.internsEmail ?answers.internsEmail : " "}</th>
            </tr>
          </thead>
        </table>
      </div>


    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>    
</body>

</html>`;

}

module.exports = HTMLgenerator