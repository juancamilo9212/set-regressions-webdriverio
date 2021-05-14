const constant = require('../../constants');
const {
NOMBRE,
APELLIDO,
CEDULA,
EMPRESA,
AREA,
PARTE_CUERPO,
FECHA_ACCIDENTE,
FECHA_ENTRADA,
DESCRIPCION_ACCIDENTE,
TESTIGO,
NOMBRE_TESTIGO,
CEDULA_TESTIGO,
COMENTARIOS,
REPORTA,
BRIGADISTA,
FECHA_INVESTIGACION,
FECHA_PLAN_ACCION,
INVESTIGADO,
ESTADO,
PLAN_ACCION
} = constant;

class CreateAccidentPage {
/**
     * define selectors using getter methods
*/
get formTitle() {return $('div=Creando un accidente')}
get nombre () { return $('form').$$('input')[0]}
get apellido () { return $('form').$$('input')[1]}
get cedula () { return $('form').$$('input')[2]}
get empresa () { return  $('form').$$('input')[3]}
get area () { return $('form').$$('input')[4]}
get parteCuerpo () { return $('form').$$('input')[5]}
get fechaAccidente () { return $('form').$$('input')[6]}
get fechaEntrada () { return $('form').$$('input')[7]}
get descripcion () { return $('form').$$('textarea')[0]}
get testigo () { return $('form').$$('[role=switch]')[0]}
get nombreTestigo () { return $('form').$$('input')[8]}
get cedulaTestigo () { return $('form').$$('input')[9]}
get comentario () { return $('form').$$('textarea')[1]}
get reporta () { return $('form').$$('input')[10]}
get brigadista () { return $('form').$$('input')[11]}
get tipoAccidente () { return $('form .ant-select')}
get accidenteTrabajo () { return $('//div[@title="Incidente de trabajo"]')}
get fechaInvestigacion () { return $('form').$$('input')[12]}
get fechaPlanAccion () { return $('form').$$('input')[13]}
get investigado () { return $('form').$$('[role=switch]')[1]}
get estado () { return $('form').$$('[role=switch]')[2]}
get planAccion () { return $('form').$$('textarea')[2]}
get submit () { return $('span=Crear accidente')}

isFormDisplayed(){
this.formTitle.waitForDisplayed({timeout:5000})
return this.formTitle.isDisplayed();
}

fillAccidentForm(){
    this.nombre.setValue(NOMBRE);
    this.apellido.setValue(APELLIDO);
    this.cedula.setValue(CEDULA);
    this.empresa.setValue(EMPRESA);
    this.area.setValue(AREA);
    this.parteCuerpo.setValue(PARTE_CUERPO);
    this.fechaAccidente.setValue(FECHA_ACCIDENTE);
    browser.keys('Enter');
    this.fechaEntrada.setValue(FECHA_ENTRADA);
    browser.keys('Enter');
    this.descripcion.setValue(DESCRIPCION_ACCIDENTE);
    TESTIGO ? this.testigo.click():console.log('No hay testigo');
    this.nombreTestigo.setValue(NOMBRE_TESTIGO);
    this.cedulaTestigo.setValue(CEDULA_TESTIGO);
    this.comentario.scrollIntoView();
    this.comentario.setValue(COMENTARIOS);
    this.reporta.scrollIntoView();
    this.reporta.setValue(REPORTA);
    this.brigadista.scrollIntoView();
    this.brigadista.setValue(BRIGADISTA);
    this.tipoAccidente.click();
    this.accidenteTrabajo.waitForClickable({timeout:5000});
    this.accidenteTrabajo.click();
    this.fechaInvestigacion.scrollIntoView();
    this.fechaInvestigacion.setValue(FECHA_INVESTIGACION);
    browser.keys('Enter');
    this.fechaPlanAccion.setValue(FECHA_PLAN_ACCION);
    browser.keys('Enter');
    INVESTIGADO ? this.investigado.click():console.log('No ha sido investigado');
    this.estado.scrollIntoView();
    ESTADO ? this.estado.click():console.log('Estado cerrado');
    this.submit.scrollIntoView();
    this.planAccion.setValue(PLAN_ACCION);
    this.submit.click();
}

}

module.exports = new CreateAccidentPage();