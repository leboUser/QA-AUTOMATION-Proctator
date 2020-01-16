exports.config ={
    framework: 'jasmine2',

    specs:['Web_case.js'],

    capabilities: {
        browserName:'chrome'
    },
    onPrepare: function(){
        var AllureReporter =require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport:{
                resultsDir:'Test_Case_Task-2_result'
            }
        }));
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
    }
};