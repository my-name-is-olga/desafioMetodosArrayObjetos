document.write("<p>Estadísticas Centro Médico Ñuñoa</p>");

let radiologia = [
  {
    hora: "11:00" /* borrar este elemento */,
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00" /* borrar este elemento */,
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

let traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

let dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

/* HORAS DE TRAUMATOLOGÍA - ACTIVIDAD 1 */

traumatologiaModificado = traumatologia.map;
traumatologia.push(
  {
    hora: "9:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    previsión: "ISAPRE",
  },
  {
    hora: "9:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    previsión: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    previsión: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    previsión: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    previsión: "FONASA",
  }
);
console.log(traumatologia);

/* HORAS DE RADIOLOGÍA - ACTIVIDAD 2 */

radiologiaModificado = radiologia.map;
radiologia.shift();

radiologiaModificado = radiologia.map;
radiologia.pop();
console.log(radiologia);

/* LISTA CONSULTAS MÉDICAS DENTAL - ACTIVIDAD 3 */

let pacienteDentalUno = [
  "8:30",
  "ANDREA ZUÑIGA",
  "MARCELA RETAMAL",
  "11123425-6",
  "ISAPRE",
];
document.write("<p>" + pacienteDentalUno.join(" - ") + "</p>");

let pacienteDentalDos = [
  "11:00",
  "MARIA PIA ZAÑARTU",
  "ANGEL MUÑOZ",
  "9878789-2",
  "ISAPRE",
];
document.write("<p>" + pacienteDentalDos.join(" - ") + "</p>");

let pacienteDentalTres = [
  "11:30",
  "SCARLETT WITTING",
  "MARIO KAST",
  "7998789-5",
  "FONASA",
];
document.write("<p>" + pacienteDentalTres.join(" - ") + "</p>");

let pacienteDentalCuatro = [
  "13:00",
  "FRANCISCO VON TEUBER",
  "KARIN FERNANDEZ",
  "18887662-K",
  "FONASA",
];
document.write("<p>" + pacienteDentalCuatro.join(" - ") + "</p>");

let pacienteDentalCinco = [
  "13:30",
  "EDUARDO VIÑUELA",
  "HUGO SANCHEZ",
  "17665461-4",
  "FONASA",
];
document.write("<p>" + pacienteDentalCinco.join(" - ") + "</p>");

let pacienteDentalSeis = [
  "14:00",
  "RAQUEL VILLASECA",
  "ANA SEPULVEDA",
  "14441281-0",
  "ISAPRE",
];
document.write("<p>" + pacienteDentalSeis.join(" - ") + "</p>");

/* LISTA TOTAL PACIENTES - ACTIVIDAD 4 */

let infoPacientes = [
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
  {
    hora: "9:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    previsión: "ISAPRE",
  },
  {
    hora: "9:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    previsión: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    previsión: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    previsión: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    previsión: "FONASA",
  },
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

let pacientesRadiologia = infoPacientes.map((paciente) => paciente.paciente);
console.log(pacientesRadiologia);

/* FILTRO PACIENTES ISAPRE DENTAL- ACTIVIDAD 5 */

let dentalFiltro = dental.filter(
  (prevision) => prevision.prevision === "ISAPRE"
);
console.log(dentalFiltro);

/* FILTRO PACIENTES FONASA TRAUMATOLOGÍA- ACTIVIDAD 6 */

let traumatologiaFiltro = traumatologia.filter(
  (prevision) => prevision.prevision === "FONASA"
);
console.log(traumatologiaFiltro);

document.write(
  `<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`
);
document.write(
  `<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`
);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

document.write(
  `<p>Primera atencion: ${radiologia[0].paciente} - ${
    radiologia[0].prevision
  } | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
    radiologia[radiologia.length - 1].prevision
  }.</p>`
);
document.write(
  `<p>Primera atencion: ${traumatologia[0].paciente} - ${
    traumatologia[0].prevision
  } | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${
    traumatologia[traumatologia.length - 1].prevision
  }.</p>`
);
document.write(
  `<p>Primera atencion: ${dental[0].paciente} - ${
    dental[0].prevision
  } | Última atención: ${dental[dental.length - 1].paciente} - ${
    dental[dental.length - 1].prevision
  }.</p>`
);
