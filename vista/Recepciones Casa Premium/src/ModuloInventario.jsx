import React, { useState } from 'react';
import './inventario.css'; // Asegúrate de tener el archivo CSS en la misma carpeta

function ModuloInventario() {
  // --- ESTADO Y VARIABLES SIMULADAS ---
  // (Puedes cambiar estos valores por los datos reales de tu base de datos o contexto)
  const [nextComprobante, setNextComprobante] = useState(1);
  
  const r = {
    cliente: "Nombre del Cliente",
    tipo: "Boda",
    fecha: "25/07/2026",
    salon: "Salón Imperial",
    estadoPago: "Pendiente"
  };

  const t = {
    subtotal: 1500000,
    descuento: 100000,
    iva: 266000,
    total: 1666000
  };

  const servicios = ["Catering Premium", "Decoración Floral", "Sonido e Iluminación"];
  const abono = 500000;
  const medio = "Nequi";
  const fecha = new Date().toLocaleDateString('es-CO');

  // --- FUNCIONES ---
  // Formateador de moneda colombiana (COP)
  const formatCOP = (valor) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(valor);
  };

  const numeroComprobante = String(nextComprobante).padStart(6, '0');
  const fechaEmision = new Date().toLocaleDateString('es-CO');

  const handlePrint = () => {
    window.print();
    // Incrementa el número de comprobante después de imprimir
    setNextComprobante(prev => prev + 1);
  };

  return (
    <div className="app">
      {/* HEADER DEL SISTEMA */}
      <header className="brand">
        <div className="brand-mark">
          <div className="seal">S</div>
          <div>
            <h1>Salón & Stock</h1>
            <span>Sistema de Eventos</span>
          </div>
        </div>
        
        <nav className="tabs">
          <button className="active">Inventario</button>
          <button>Calendario</button>
          <button>Eventos</button>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL / SECCIÓN DE PAGO */}
      <main className="panel-pagos panel" style={{ marginTop: '30px' }}>
        <div className="grid-2">
          
          {/* TARJETA DEL COMPROBANTE DE PAGO */}
          <div className="card" id="comprobante-wrap">
            <div className="comprobante">
              <div className="ctitle">Comprobante de pago</div>
              <div className="cnum">N.º {numeroComprobante}</div>
              <hr />
              
              <div className="crow"><span>Cliente</span><b>{r.cliente}</b></div>
              <div className="crow"><span>Evento</span><b>{r.tipo} – {r.fecha}</b></div>
              <div className="crow"><span>Salón</span><b>{r.salon}</b></div>
              <hr />
              
              <div className="crow">
                <span style={{ textAlign: 'right', maxWidth: '60%' }}>Servicios</span>
                <b>{servicios.join(', ')}</b>
              </div>
              <div className="crow"><span>Subtotal</span><b>{formatCOP(t.subtotal)}</b></div>
              <div className="crow"><span>Descuento</span><b>{formatCOP(t.descuento)}</b></div>
              <div className="crow"><span>IVA (19%)</span><b>{formatCOP(t.iva)}</b></div>
              <div className="crow"><span>Total a pagar</span><b>{formatCOP(t.total)}</b></div>
              <hr />
              
              <div className="crow"><span>Abono recibido</span><b>{formatCOP(abono)}</b></div>
              <div className="crow"><span>Medio de pago</span><b>{medio}</b></div>
              <div className="crow"><span>Fecha de abono</span><b>{fecha}</b></div>
              <div className="crow"><span>Estado</span><b>{r.estadoPago}</b></div>
              <div className="crow"><span>Emitido</span><b>{fechaEmision}</b></div>
            </div>

            {/* BOTÓN DE IMPRESIÓN */}
            <button 
              className="ghost no-print" 
              style={{ marginTop: '14px', width: '100%', padding: '10px', cursor: 'pointer' }} 
              onClick={handlePrint}
            >
              Imprimir / guardar como PDF
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default ModuloInventario;