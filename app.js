const fs = require('fs');
const generatePage = require('./src/page-template.js');
// the 2 grabs the third item in the array after the node app...
const profileDataArgs = process.argv.slice(2, process.argv.length);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// deconstructed version of the above code ^^^
const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };

// printProfileData(profileDataArgs);

// Below code allows for just name and github name
// const generatePage = (userName, githubName) => {
//     return `
//     Name: ${userName} 
//     Github: ${githubName}
//     `;
// };



// ---log the name and github inputs and confirm they match
// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Checkout index.html to see the output!');
})