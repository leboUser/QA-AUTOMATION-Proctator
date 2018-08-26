//Created by Lebogang Mokaila
describe('Task 2 - Web Case', function () {

    it("Validate title", function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
      expect(browser.getTitle()).toEqual('Protractor practice website - WebTables');
    });
   


describe("Create User", function() {

    beforeEach(function(){
        element(by.partialButtonText(' Add User')).click();
        //Clear all fields
        element(by.name('FirstName')).clear();
        element(by.name('LastName')).clear();
        element(by.name('UserName')).clear();
        element(by.name('Password')).clear();
        element(by.name('Email')).clear();
        element(by.name('Mobilephone')).clear();
       browser.sleep(2000);
    });

    afterEach(function(){
        //Submit Form
        element(by.buttonText('Save')).click();
        
    });

     it('Creating First user',function(){
    
        element(by.name('FirstName')).sendKeys('FName1');
        element(by.name('LastName')).sendKeys('LName');
        element(by.name('UserName')).sendKeys('User1');
        element(by.name('Password')).sendKeys('Pass1');
        element.all(by.name('optionsRadios')).get(0).click();
        element.all(by.tagName('option')).get(3).click();
        element(by.name('Email')).sendKeys("admin@gmail.com");
        element(by.name('Mobilephone')).sendKeys('082555');
        
    });

    it('Creating Second user', function(){
        
        element(by.name('FirstName')).sendKeys('FName2');
        element(by.name('LastName')).sendKeys('LName2');
        element(by.name('UserName')).sendKeys("User2");
        element(by.name('Password')).sendKeys('Pass2');
        element.all(by.name('optionsRadios')).get(1).click();
        element.all(by.tagName('option')).get(2).click();
        element(by.name('Email')).sendKeys('customer@gmail.com');
        element(by.name('Mobilephone')).sendKeys('083444');

        });
        
    
    });

    describe("validate User 1 and User 2", function() {
        beforeEach(function(){
            element(by.model('searchValue')).clear();
        });
        it("User 1",function(){

            //Search For User 1
            element(by.model('searchValue')).sendKeys('FName1');
            
            
                var tabledata = element.all(by.repeater('dataRow in displayedCollection'));
                var cells  = tabledata.all(by.tagName('td'));
               //validating User 1
               expect(cells.get(0).getText()).toEqual('FName1');
               expect(cells.get(1).getText()).toEqual('LName');
               expect(cells.get(2).getText()).toEqual('User1');
               expect(cells.get(3).getText()).toEqual('Company AAA');
               expect(cells.get(5).getText()).toEqual('Admin');
               expect(cells.get(6).getText()).toEqual('admin@gmail.com');
               expect(cells.get(7).getText()).toEqual('082555');
               
             //browser.sleep(20000);
                
                
        });

        it("User 2",function(){
            
            //Search For User 2
            element(by.model('searchValue')).sendKeys('FName2');
            
                var tabledata = element.all(by.repeater('dataRow in displayedCollection'));
                var cells  = tabledata.all(by.tagName('td'));
               //validating User 2
               expect(cells.get(0).getText()).toEqual('FName2');
               expect(cells.get(1).getText()).toEqual('LName2');
               expect(cells.get(2).getText()).toEqual('User2');
               expect(cells.get(3).getText()).toEqual('Company BBB');
               expect(cells.get(5).getText()).toEqual('Customer');
               expect(cells.get(6).getText()).toEqual('customer@gmail.com');
               expect(cells.get(7).getText()).toEqual('083444');
               
             browser.sleep(20000);
                
                
        });

    });

});
   



