import React, { useState } from 'react';

const InventoryDashboard = () => {
  // Datos de ejemplo basados en RI 2.1
  const [items, setItems] = useState([
    { sku: 'SILL-001', name: 'Sillas Rimax', total: 100, available: 8, status: 'Bueno', category: 'Menaje' },
    { sku: 'MANT-022', name: 'Manteles Blancos', total: 50, available: 30, status: 'Bueno', category: 'Lencería' },
    { sku: 'MESA-005', name: 'Mesas Redondas', total: 20, available: 2, status: 'Regular', category: 'Menaje' },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Inventario</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">+ Nuevo Artículo</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {items.map((item) => {
          const isLowStock = item.available <= (item.total * 0.10);
          return (
            <div key={item.sku} className={`p-4 rounded-xl shadow-sm border-l-4 bg-white ${isLowStock ? 'border-red-500' : 'border-blue-500'}`}>
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-gray-500">{item.sku}</span>
                {isLowStock && <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-bold">¡ALERTA STOCK BAJO!</span>}
              </div>
              <h3 className="text-lg font-bold mt-1">{item.name}</h3>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">{item.available}</p>
                  <p className="text-xs text-gray-400">Disponibles de {item.total}</p>
                </div>
                <button className="text-blue-600 text-sm hover:underline">Actualizar</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4">Artículo</th>
              <th className="p-4">Estado</th>
              <th className="p-4">Categoría</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.sku} className="border-t hover:bg-gray-50">
                <td className="p-4 font-mono text-sm">{item.sku}</td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${item.status === 'Bueno' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{item.category}</td>
                <td className="p-4 text-center">
                  <button className="text-gray-400 hover:text-blue-600 mx-2">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryDashboard;