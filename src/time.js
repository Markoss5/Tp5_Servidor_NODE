var date = new Date();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

var current_fecha = new Date().toLocaleDateString('es-ES', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 



export default {current_fecha, current_time}