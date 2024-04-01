"use client"
import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext';




const Carrito = () => {

const {listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext);



const calcularTotal = ()=>{
  return listaCompras.reduce((total, item)=> total + item.precio * item.cantidad, 0).toFixed(2)
}



const handleImpresion = () =>{
  print()

}
  return ( 
   
    <div className='lg:mt-32 mt-20  '>
      <table className="min-w-full divide-y divide-gray-200  ">
        <thead>
            <tr>
                <th scope='col' className='px-4 py-1 text-left text-lg font-semibold text-gray-500 uppercase tracking-wider'>NOMBRE</th>
                <th scope='col' className='px-4 py-1 text-left text-lg font-semibold text-gray-500 uppercase tracking-wider'>PRECIO</th>
                <th scope='col' className='px-4 py-1 text-left text-lg font-semibold text-gray-500 uppercase tracking-wider'>CANTIDAD</th>
                <th scope='col' className='px-4 py-1 text-left text-lg font-semibold text-gray-500 uppercase tracking-wider'>ELIMINAR</th>
            </tr>
        </thead>
            <tbody>
              {
                listaCompras.map( item => (
                  <tr className="bg-white" key={item.id}>
                  <th  className='px-4 py-1 text-xl whitespace-nowrap'>{item.nombre}</th>
                  <th  className='px-4 py-1 text-xl whitespace-nowrap'>{item.precio}</th>
                  <th  className='px-4 py-1 text-xl whitespace-nowrap'>
                    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded' onClick={()=> disminuirCantidad(item.id)} >-</button>
                    <span className='px-2'  >{item.cantidad}</span>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=> aumentarCantidad(item.id)} >+</button>
                  </th>
                  <th className='px-6 py-4 whitespace-nowrap'>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type='button' 
                    onClick={() => eliminarCompra( item.id)}
                    >ELIMINAR</button>
                  </th>
                  </tr>
                ))
              }

             <tr>
            <th className="px-20 py-1 whitespace-nowrap text-xl font-extrabold">Total:</th>
            <td></td>
            <td></td>
            <td className="px-6 py-2 whitespace-nowrap">$ {calcularTotal()}</td>
            </tr>
        </tbody>
      </table>
      <div className="text-center mt-4">
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={handleImpresion} disabled={listaCompras.length < 1}
        >COMPRAR
        </button>
      </div>
    </div>
   
  )
}

export default Carrito
