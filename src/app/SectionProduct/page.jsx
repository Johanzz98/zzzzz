"use client";
import React, { useState, useEffect } from 'react';
import Info from './Info';
import Muestra from './Muestra';
import Mobile from './Mobile';
import MuestraMobile from './MuestraMobile';
import Look from './Look';


function SectionProduct() {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Inicializar con false para evitar errores de compilación

  useEffect(() => {
    // Verificar si el código se está ejecutando en el navegador
    if (typeof window!== 'undefined') {
      setIsSmallScreen(window.innerWidth <= 800);
      
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 800);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Limpiar el evento al desmontar el componente
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (isSmallScreen) {
    return (
      <>
        <Mobile />
        <MuestraMobile />
        <Look/>
        
      </>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: '4' }}>
        <Muestra style={{ justifyContent: 'flex-start' }} />
      </div>
      <div style={{ flex: '1' }}>
        <Info />
      </div>
    </div>
  );
}

export default SectionProduct;

