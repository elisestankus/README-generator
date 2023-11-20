// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

  if (data.license == 'Apache 2.0') {
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (data.license == 'MIT'){
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (data.license == 'GPLv2') {
    badge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
  } else if (data.license == 'GPLv3') {
    badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (data.license == 'BSD 3-clause') {
    badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else {
    badge = ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data)
  return `# ${data.title}   ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  Installation

  Usage

  License

  Contributing

  Tests

  Questions

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License 

  ${data.license}

  ## Contributing 

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  GitHub: ${data.githubUsername}

  Email: ${data.email}

`;
}

module.exports = generateMarkdown;



