
export function costCalculator(montoTransaccion) {
    const Transaccion = 3;  
    const Intereses = 0.01; 
    const monto = perseFloat(montoTransaccion)

    const costoTotal = monto + Transaccion + (monto * Intereses);
  
   
    return parseFloat(costoTotal.tofixed(2));
}
  