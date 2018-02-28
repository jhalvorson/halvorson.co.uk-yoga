const projects = require('./projects');
const basic = require('./basic');
const sideProjects = require('./side-projects');

module.exports = {
  ...basic,
  projects,
  sideProjects
};