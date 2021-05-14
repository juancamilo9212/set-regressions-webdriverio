const Page = require('./page');
const constants = require('../../constants');
const {NOMBRE,APELLIDO,PARTE_CUERPO} = constants;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get logoLocator () { return $('img')}
    get accidentBtn () { return $('.ant-menu-inline').$$('li')[1]}
    get accidentTable() { return $('table')}
    get tooltip() { return $('.ant-tooltip-inner')}
    get createAccidentBtn(){ return $('span=Crear Accidente de Trabajo')}
    get filterSelect() { return $('.accidents__add-btn .ant-select-selector')}
    get nameOption() {return $('//div[@title="Nombre"]')}
    get lastNameOption() {return $('//div[@title="Apellido"]')}
    get bpaOption() {return $('//div[@title="PCA"]')}
    get filterInput() { return $('//input[@type="text"]')}
    get clearBtn(){ return $('.accidents__add-btn .ant-input-affix-wrapper .ant-input-clear-icon')}
    get tableBody(){ return $('tbody')}
    get accidentViewModal(){ return $('.accident-list__modal')}
    get accidentHeader(){ return $('.ant-modal-title')}
    get confirmationModal(){ return $('.ant-modal-confirm-content')}
    get okBtn(){ return $('//span[contains(text(),"OK")]')}
    get resultadosLabel() { return $('//h2[contains(text(),"Resultados")]')}
    get limpiarBtn() { return $('//span[contains(text(),"Limpiar")]')}
    get closeModal() { return $('button .ant-modal-close-x')}


    isLogoDisplayed(){
        return this.logoLocator.isDisplayed();
    }

    clickOnAccidentsBtn(){
        this.accidentBtn.click();
    }

    isTableDisplayed(){
        return this.accidentTable.isDisplayed();
    }

    hoverOverSiderOptions(option){
        switch (option) {
            case 'accident':
            super.hoverOver(this.accidentBtn);
            break;
            case 'laws':
            
            break;
            case 'resources':
            
            break;
        
            default:
                break;
        }
    }

    getTooltipText(){
        this.tooltip.waitForDisplayed({timeout:3000});
        return this.tooltip.getText();
    }

    clickOnCreateAccidentBtn(){
        this.createAccidentBtn.click();
    }

    clickOnFilterSelector(){
        this.filterSelect.click();
    }

    selectFilter(filter){

        switch (filter) {
            case 'Nombre':
            super.setValue(this.nameOption,NOMBRE);
            break;
            case 'Apellido':
            super.setValue(this.lastNameOption,APELLIDO);
            break;
            case 'PCA':
            super.setValue(this.bpaOption,PARTE_CUERPO);
            break;
            default:
            break;
        }
        browser.keys('Enter');
        this.clearBtn.click();
    }

    getAttributeText(filter){
        switch (filter) {
            case 'Nombre':
            return NOMBRE;
            case 'Apellido':
            return APELLIDO;
            case 'PCA':
            return PARTE_CUERPO;
            default:
            break;
        }
    }

    getTableNameText(){
        const lastRow = this.tableBody.$$('tr').length - 1;
        const tableName = this.tableBody.$$('tr')[lastRow].$$('td')[0];
        return tableName.getText();
    }

    clickOnMenuBtn(btnIndex){
        const lastRow = this.tableBody.$$('tr').length - 1;
        const accidentBtn = this.tableBody.$$('tr')[lastRow].$$('td')[5].$$('button')[btnIndex];
        accidentBtn.waitForClickable({timeout:5000});
        accidentBtn.click();
    }

    clickOnAccidentViewBtn(){
    this.clickOnMenuBtn(0);
    }

    isAccidentViewDisplayed(){
        return this.accidentViewModal.isDisplayed();
    }

    clickOnCloseModal(){
        this.closeModal.waitForClickable({timeout:5000});
        this.closeModal.click();
    }

    getHeaderText(){
        return this.accidentHeader.getText();
    }

    clickOnDeleteBtn(){
    this.clickOnMenuBtn(2);
    }

    isDeleteModalDisplayed(){
    this.confirmationModal.waitForDisplayed({timeout:5000});
    return this.confirmationModal.isDisplayed();
    }

    confirmDeletion(){
    this.okBtn.click();
    }

    getNumberOfResults(){
    this.resultadosLabel.waitForDisplayed({timeout:5000});
    const resultTxt = this.resultadosLabel.getText();
    const txtSplit = resultTxt.split(':');
    const results = parseInt(txtSplit[1]);
    return results;
    }

    clickOnLimpiarBtn(){
    this.limpiarBtn.click();
    }

}

module.exports = new MainPage();
