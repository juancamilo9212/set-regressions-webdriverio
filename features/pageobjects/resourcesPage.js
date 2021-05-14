const Page = require('./page');

class ResourcePage extends Page {

    get resourceBtn() {return $('.ant-menu-inline').$$('li')[2]} 
    
    hoverOverResource(){
        this.resourceBtn.waitForDisplayed();
        this.resourceBtn.moveTo();
    }

    clickOnResource(){
        this.resourceBtn.click();
    }

}
module.exports = new ResourcePage;