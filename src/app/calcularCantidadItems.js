import React, { useContext } from 'react'
import { CarritoContext } from './context/CarritoContext';

const calcularCantidadItems = () => {
  
    const {listaCompras} = useContext(CarritoContext);
        return listaCompras.reduce((total, item) => total + item.cantidad, 0);
    
}
export default calcularCantidadItems
