const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get entrarBtn () { return $('div=Entrar')}
    get inputEmail () { return $('[name="email"]') } 
    get inputPassword () { return $('[name="password"]') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (email, password) {
        this.entrarBtn.click();
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        super.open();
        super.setScreenSize();
    }
}

module.exports = new LoginPage();
