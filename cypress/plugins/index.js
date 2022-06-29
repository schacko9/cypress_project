const sqlServer = require('cypress-sql-server');
const dbconfig = require('../../cypress.config.js');


module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(dbconfig.db);
  on('task', tasks);
}