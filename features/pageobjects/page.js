/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url('/');
    }

    setScreenSize(){
        return browser.setWindowRect(0, 0, 1920, 1080);
    }

    setValue(elem,value){
        elem.waitForClickable({timeout:5000});
        elem.click();
        this.filterInput.waitForClickable({timeout:5000});
        this.filterInput.setValue(value);
    }

    getHeaderTxt(element){
        element.waitForDisplayed({timeout:3000});
        return element.getText();
    }

    getUrl(){
        return browser.getUrl();
    }
    
    
}
