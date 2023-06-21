const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'N/A') {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `\n* [License](#license)\n`;
  }
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `## License
    
        Licensed under the ${license} license.`;
  }
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Dependencies](#dependencies)
* [Languages & Technologies](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
## Dependencies
${data.require}
## Languages & Technologies
${data.usage}
## Contributors
${data.contributing}
## Testing
${data.tests}
## Questions
Contact me [here](mailto:${data.email})?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
