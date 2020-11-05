# Employee Directory 
  ![GitHub license](https://img.shields.io/badge/Made%20by-%40wilsoncollin7-orange) [![GitHub followers](https://img.shields.io/github/followers/wilsoncollin7.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/wilsoncollin7?tab=followers) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  This app allows a manager to filer their employees by first or last name. The user can also sort the table alphabetically by first or last name. This is a simple example of how React can be used and how you can use context APIs to send data to components instead of using prop drilling. :rocket:

  Here is the live app: [Employee Directory](https://directory-collin.herokuapp.com/)

  <p align="center">
    <img src="./public/example.gif" width="600">
  </p>

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  Download this repo and run:

  ```
  npm install
  npm start
  ```

  The data is pulled from the employees.json. This app can be converted to use a external database. To add further employees to json for testing use this structure:

  ```
  {
    "id": 1, // make sure id is in consecutive order, otherwise you will get key errors from React
    "firstName": "Collin",
    "lastName": "Wilson",
    "phone":  "(111) 111-1111",
    "email": "Collin@FakeEmail.com"
  }
  ```

  ## Usage

  This project uses React and is hosted on Heroku. The styling of the page uses Bootstrap. Inside, the app is separated into smaller components to allow future expansion. The data is sent to the child components using the EmployeeContext and the SearchContext found in utils. The functions are in the Directory.js in the pages folder.

  ## License

  This application is made with the [MIT License](https://opensource.org/licenses/MIT)

  ## Contributing

  To contribute please contact me.

  ## Tests

  If you find any bugs please contact me!

  ## Questions

  For any questions you might have, you can email me at wilsoncollin7@gmail.com. You can also check out my [GitHub Profile](https://github.com/wilsoncollin7).

  <img src="https://avatars2.githubusercontent.com/u/65512203?s=460&u=fb31e3048d1cfa064b8ee0ec696be762b96343f8&v=4" width="200" style="border-radius:50%"/>
