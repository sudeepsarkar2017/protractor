var p= function() {
    var a = 2 + 3;
    // return a;
    console.log(a);
}
var q= function(){

}
exports.p;



it('nested step must pass', function() {
    browser.get('https://angularjs.org');
    allure.createStep('Filling data', function () {
        allure.createStep('Fill todo text', function () {})();
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();
    })();