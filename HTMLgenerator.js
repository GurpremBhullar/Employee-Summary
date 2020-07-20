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

    <div class="container">
        <h2>The Managers Table</h2>
        <p>info</p>            
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>${empInfo.managersName ?answers.managersName : " "}</th>
              <th>${empInfo.managerId ?answers.managerId : " "}</th>
              <th>${empInfo.emailManager ?answers.emailManager : " "}</th>
            </tr>
          </thead>
        </table>
      </div>
    
      <div class="container">
        <h2>The Engineer one Table</h2>
        <p>info</p>            
        <table class="table table-bordered">
          <thead>
            <tr>
            <th>${empInfo.firstEngineer ?answers.firstEngineer : " "}</th>
            <th>${empInfo.idFirstEngineer ?answers.idFirstEngineer : " "}</th>
            <th>${empInfo.emailFirstEngineer ?answers.emailFirstEngineer : " "}</th>
            </tr>
          </thead>
        </table>
      </div>

      <div class="container">
        <h2>The e2 Table</h2>
        <p>info</p>            
        <table class="table table-bordered">
          <thead>
            <tr>
            <th>${empInfo.secondEngineer ?answers.secondEngineer : " "}</th>
            <th>${empInfo.idSecondEngineer ?answers.idSecondEngineer : " "}</th>
            <th>${empInfo.emailSecondEngineer ?answers.emailSecondEngineer : " "}</th>
            </tr>
          </thead>
        </table>
      </div>

      <div class="container">
        <h2>The e3 Table</h2>
        <p>info</p>            
        <table class="table table-bordered">
          <thead>
            <tr>
            <th>${empInfo.thirdEngineer ?answers.thirdEngineer : " "}</th>
            <th>${empInfo.idThirdEngineer ?answers.idThirdEngineer : " "}</th>
            <th>${empInfo.emailThirdEngineer ?answers.emailThirdEngineer : " "}</th>
            </tr>
          </thead>
        </table>
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