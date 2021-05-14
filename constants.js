var faker = require('faker');
var moment = require('moment');
moment.locale('es');
const format = ('YYYY-MM-DD hh:mm:ss');
const now =moment.now(format);
const NOMBRE=faker.name.firstName();
const APELLIDO=faker.name.lastName();
const CEDULA=faker.datatype.number(999999999999999);
const EMPRESA=faker.company.companyName();
const AREA = 'Ventas';
const PARTE_CUERPO='Cabeza';
const FECHA_ACCIDENTE = moment(now).subtract(2,'hours').format(format);
const FECHA_ENTRADA = moment(now).subtract(6,'hours').format(format);
const DESCRIPCION_ACCIDENTE=faker.lorem.words();
const TESTIGO=faker.datatype.boolean();
const NOMBRE_TESTIGO=faker.name.firstName();
const CEDULA_TESTIGO=faker.datatype.number(999999999999999);
const COMENTARIOS = faker.lorem.words();
const REPORTA=`${faker.name.firstName()} ${faker.name.lastName()}`
const BRIGADISTA = `${faker.name.firstName()} ${faker.name.lastName()}`
const FECHA_INVESTIGACION = moment(now).add(24,'hours').format(format);
const FECHA_PLAN_ACCION = moment(now).add(48,'hours').format(format);
const INVESTIGADO =faker.datatype.boolean();
const ESTADO = faker.datatype.boolean();
const PLAN_ACCION=faker.lorem.words();

module.exports={
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
}