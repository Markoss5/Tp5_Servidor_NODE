// time.js
export function getHoraActual() {
    const ahora = new Date();
    return ahora.toLocaleTimeString('es-AR', { hour12: false }); // HH:MM:SS
  }
  
  export function getFechaCompleta() {
    const ahora = new Date();
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return ahora.toLocaleString('es-AR', opciones);
  }
  