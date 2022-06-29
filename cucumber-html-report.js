const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'reports/cucumber-json',
	reportPath: 'reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'MAC',
            version: '2.3.1'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Project'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'June 27th 2022, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'June 27th 2022, 02:56 PM EST'}
        ]
    }
});