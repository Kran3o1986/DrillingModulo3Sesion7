
const vehiculo = {
  marca: "Peakauto",
  modelo: "Goenx",
  motor: {},
};

vehiculo.motor.tipo ??= "4 CILINDROS EN LÍNEA";
vehiculo.motor.block ??= "ALEACIÓN/ ALUMINIO";
vehiculo.motor.desplazamiento ??= "1.99/ 1996";
vehiculo.motor.caballos ??= "155 @ 6500";
vehiculo.motor.linea_roja ??= 6700;
vehiculo.motor.inyeccion_combustible ??= "PUNTOS MÚLTIPLES";

const mostrarConsola = () => {
  console.log(vehiculo.marca);
  console.log(vehiculo.modelo);

  console.log(vehiculo.motor?.tipo);
  console.log(vehiculo.motor?.psi);
  console.log(vehiculo.motor?.block);
  console.log(vehiculo.motor?.desplazamiento);
  console.log(vehiculo.motor?.caballos);
  console.log(vehiculo.motor?.linea_roja);
  console.log(vehiculo.motor?.ssa);
  console.log(vehiculo.motor?.inyeccion_combustible);
  console.log(vehiculo.motor?.encendido_remoto);
};