"use client"

import { useContext, } from "react"
import Relojes from "../productos/Relojes"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"



 const CompraRelojes = () => {

  const { relojes } = useContext(ProductosContext);

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
      <h1 className="text-white text-4xl relative ">RELOJES</h1>
      </div>
    
    <hr />
    <div className=" absolute top-0 right-0 left-0 flex flex-wrap pt-36  gap-6 items-center bg-slate-700 justify-center">
    {relojes.map(reloj =>(
      <Relojes
        key= {reloj.id}
        imagen={reloj.imagen}
        nombre={reloj.nombre}
        descripcion={reloj.descripcion}
        precio={reloj.precio}
        handleAgregar={() => handleAgregar(reloj)}
        handleQuitar={() => handleQuitar(reloj.id)}
        />
      
    ))}</div>
  </div>
 )}
 export default CompraRelojes;