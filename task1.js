
export function costCalculator(montoTransaccion) {
    const Transaccion = 3;  
    const Intereses = 0.01; 
    const monto = parseFloat(montoTransaccion)

    const costoTotal = monto + Transaccion+(monto * Intereses);
  
   
    return parseFloat(costoTotal.toFixed(2));
}

console.log(costCalculator(process.argv[3]));


