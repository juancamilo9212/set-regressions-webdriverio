const Page = require('./page');

class LawsPage extends Page {

get lawsBtn () { return $('ul').$$('li')[0]}
get lawListCard () { return $('.law-list .law-list__cards:nth-child(1)')}
get cardTitle () { return $('.law-list__cards:nth-child(1) .ant-card-head-title')}
get detailBtn () { return $('.law-list .law-list__cards:nth-child(1) .ant-card-head button')}
get lawModal () { return $('.law-list__modal')}
get modalTitle() { return $('.law-list__modal .ant-modal-title')}
get downloadBtn () { return $('.law-list__cards:nth-child(1) .ant-card-body button')}
get leyesBtn () { return $('span=Leyes')}
get decretosBtn() {return $('span=Decretos]')}
get circularesBtn () { return $('span=Circulares')}

clickOnLawsBtn(){
    this.lawsBtn.waitForDisplayed({timeout:3000});
    this.lawsBtn.click();
}

isCardDisplayed(){
    this.lawListCard.waitForDisplayed({timeout:3000});
    return this.lawListCard.isDisplayed();
}

clickOnDetailBtn(){
    this.detailBtn.waitForDisplayed({timeout:3000});
    this.detailBtn.click();
}

isDetailModalDisplayed(){
    this.lawModal.waitForDisplayed({timeout:3000});
    return this.lawModal.isDisplayed();
}

getCardTxt(){
    super.getHeaderTxt(this.cardTitle);
}

getModalTxt(){
    super.getHeaderTxt(this.modalTitle);
}

clickOnDownloadBtn(){
    this.downloadBtn.waitForClickable({timeout:3000});
    this.downloadBtn.click();
}

goBackToLaws(){
    browser.back();
}

clickOnTab(tab){
    let tabBtn = $(`span=${tab}`);
    tabBtn.waitForClickable({timeout:3000});
    tabBtn.click();
}
}

module.exports = new LawsPage();