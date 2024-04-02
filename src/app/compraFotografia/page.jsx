"use client"

import { useContext, } from "react"
import Fotografia from "../productos/Fotografia"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"



 const CompraFotografia = () => {

  const { fotografia } = useContext(ProductosContext);

  const {agregarCompra,  eliminarCompra} = useContext(CarritoContext);



   const handleAgregar = (compra)  => {
    agregarCompra(compra)
   } 
   const handleQuitar = (id) => {
    eliminarCompra(id)
   } 
   

 return(
  <div className="lg:mt-20 mt-16   ">
    <div className=" bg-slate-700 z-30 fixed top-0 left-0 right-0 pt-8 p-4 text-center mt-[63px]">
      <h1 className="text-white text-4xl relative ">FOTOGRAFÍA</h1>
      </div>
    
    <hr />
    <div className=" absolute top-0 right-0 left-0 flex flex-wrap pt-36  gap-6 items-center bg-slate-700 justify-center">
    {fotografia.map(foto =>(
      <Fotografia
        key= {foto.id}
        imagen={foto.imagen}
        nombre={foto.nombre}
        descripcion={foto.descripcion}
        precio={foto.precio}
        handleAgregar={() => handleAgregar(foto)}
        handleQuitar={() => handleQuitar(foto.id)}
        />
      
    ))}</div>
  </div>
 )}
 export default CompraFotografia;