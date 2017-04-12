var object=require('./repository.json');
var using = require('jasmine-data-provider');

describe("testGmail", function () {

    beforeEach(function () {

        browser.ignoreSynchronization=true;
        browser.get(object.testSiteUrl);


    });
        using([{username:object.locators.userdetail.username1,password:object.locators.userdetail.password1},
            {username:object.locators.userdetail.username2,password:object.locators.userdetail.password2}],function (data) {
            it("validate user credential", function () {

                element(by.xpath(object.locators.login.email)).sendKeys(data.username);
                element(by.xpath(object.locators.login.next)).click();
                browser.sleep(3000);
                element(by.xpath(object.locators.login.password)).sendKeys(data.password);
                element(by.xpath(object.locators.login.signIn)).click();
                console.log(data.username);
                browser.sleep(3000);
                browser.restart();
                // browser.get('https://accounts.google.com/Logout?hl=en&continue=https://mail.google.com/mail&service=mail&timeStmp=1491990918&secTok=.AG5fkS9eu0BcPaGzzeAJ623h2bBwWzqkmg')

            });
        });



});