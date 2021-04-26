const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

// promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    // If ther's no 'projects' array property, create one
    if (!portfolioData.projects) {
     portfolioData.projects = [];
    };
    console.log(`
    =================
    Add a New Project
    =================
    `);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)'
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What did you build this project with? (Check all the apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'link',
                message: 'Enter the GitHub link to your project. (Required)'
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to enter another project?',
                default: false
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData) 
                } else {
                    return portfolioData;
                }
            })
};

promptUser()
    .then(promptProject)
    .then(projectAnswers => {
        console.log(portfolioData)
    });

// the 2 grabs the third item in the array after the node app...
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const pageHTML = generatePage(name, github);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// deconstructed version of the above code ^^^
// const [name, github] = profileDataArgs;

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

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Checkout index.html to see the output!');
// })

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Checkout index.html to see the output!');
// });