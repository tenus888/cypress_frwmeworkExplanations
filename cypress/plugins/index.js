const cucumber = require('cypress-cucumber-preprocessor').default
const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
const fs = require('fs')
module.exports = (on, config) => {  
  on('file:preprocessor', cucumber())
  on("before:browser:launch", (browser = {}, launchOptions) => {
  prepareAudit(launchOptions);
    })
  on('task',{
  log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)
          return null
        },
      lighthouse: lighthouse((lighthouseReport) => {
    const dirPath = './cypress/performanceReports'
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath) 
    }
    const name = (lighthouseReport.lhr.requestedUrl).replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, function (x) { return '' }) + " - " + (lighthouseReport.lhr.fetchTime).split('T')[0]
    fs.writeFileSync(`${dirPath}/GLH-(${name}).json`, JSON.stringify(lighthouseReport, null, 2))
  }),
   
    
})  
}  
//updated code of single module export