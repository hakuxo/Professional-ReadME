// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return ``;
  }else{
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return `https://www.mit.edu/~amini/LICENSE.md`
  }
  if (license === 'GPL'){
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  if (license === 'BSD') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ``;
  }else {
    return `##License \n This project is covered under the ${license} license. To learn more about what this license is, please click the license button at the top!`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#questions)
  
  ## Description
  ${data.description}

  ## Installtion
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions \n If you have any questions, please visit the repository on GitHub (https://www.github.com/${data.github}) or feel free to email me at ${data.email}.

  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;
