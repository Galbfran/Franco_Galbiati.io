function obtenerHoraActual(): string {
    const ahora: Date = new Date();
    const hora: string = ahora.getHours().toString().padStart(2, '0');
    const minutos: string = ahora.getMinutes().toString().padStart(2, '0');
    const segundos: string = ahora.getSeconds().toString().padStart(2, '0');
  
    return `${hora}:${minutos}:${segundos}`;
  }

  export default obtenerHoraActual;