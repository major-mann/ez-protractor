// spec.js
describe('Protractor Demo App', function() {
    beforeEach(function () {
        // Doing this allows for running without Angular.js
        browser.ignoreSynchronization = true;
    });

    it('should have a title', function() {
        browser.get('https://www.google.com/?gws_rd=ssl');
        expect(browser.getTitle()).toEqual('Google');
    });
});