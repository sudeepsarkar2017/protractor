describe('angularjs homepage todo list', function() {

    // beforeEach(function () {
    //     browser.get('')
    // }) ;



    // it('should add a todo', function() {
    //     browser.get('https://angularjs.org');
    //
    //
    //     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    //     element(by.css('[value="add"]')).click();
    //
    //     var todoList = element.all(by.repeater('todo in todoList.todos'));
    //     expect(todoList.count()).toEqual(3);
    //     expect(todoList.get(2).getText()).toEqual('write first protractor test');
    //
    //     // You wrote your first test, cross it off the list
    //     todoList.get(2).element(by.css('input')).click();
    //     var completedAmount = element.all(by.css('.done-true'));
    //     expect(completedAmount.count()).toEqual(2);
    // });

    it('test script', function () {
       browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        // browser.sleep(2000);
        allure.createStep('Filling data', function () {
        element (by.model('Auth.user.name')).sendKeys('angular');
        // browser.sleep(2000);
        element (by.model('Auth.user.password')).sendKeys('password');
        // browser.sleep(2000);
        element (by.model('model[options.key]')).sendKeys('angular');
        element(by.buttonText("Login"));


         // browser.sleep(4000);
        // element (by.model('Auth.login()')).click();
        browser.sleep(3000);

        // var homeText=element(by.tagName('h1')).getText();
        // homeText.then(function (text) {
        //    expect(text).toBe('Home');
        // });

        // let homeText = element.all(by.xpath(@class="ng-scope"])).first();

    })});
    // it ('calculator test', function () {
    //
    //     browser.get('')
    //
    // });
});
