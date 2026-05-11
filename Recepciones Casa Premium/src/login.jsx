import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '', password: '', names: '', lastNames: '', docType: '', docNum: '', phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // RF 1.1: Validar contraseña (min 8 caracteres, números y símbolos)
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("La contraseña debe tener mínimo 8 caracteres, números y símbolos.");
      return;
    }
    console.log(isLogin ? "Iniciando sesión..." : "Registrando usuario...", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {isLogin ? 'Iniciar Sesión' : 'Registro de Usuario'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <input name="names" placeholder="Nombres" onChange={handleInputChange} className="border p-2 rounded w-full" required />
                <input name="lastNames" placeholder="Apellidos" onChange={handleInputChange} className="border p-2 rounded w-full" required />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select name="docType" onChange={handleInputChange} className="border p-2 rounded w-full">
                  <option value="CC">C.C.</option>
                  <option value="CE">C.E.</option>
                </select>
                <input name="docNum" placeholder="Nro Documento" onChange={handleInputChange} className="border p-2 rounded w-full" required />
              </div>
              <input name="phone" type="tel" maxLength="10" placeholder="Teléfono (10 dígitos)" onChange={handleInputChange} className="border p-2 rounded w-full" required />
            </>
          )}
          
          <input name="email" type="email" placeholder="Correo Electrónico" onChange={handleInputChange} className="border p-2 rounded w-full" required />
          <input name="password" type="password" placeholder="Contraseña" onChange={handleInputChange} className="border p-2 rounded w-full" required />
          
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            {isLogin ? 'Entrar' : 'Registrar'}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-4 text-sm text-gray-500 hover:underline">
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
        {isLogin && <p className="text-center mt-2 text-xs text-blue-400 cursor-pointer">¿Olvidaste tu contraseña?</p>}
      </div>
    </div>
  );
};

export default AuthPage;