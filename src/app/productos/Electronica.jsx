  import React, { useState } from 'react'

  const Electronica = ({id,imagen, nombre, descripcion, precio, handleAgregar,handleQuitar}) => {

      const [agregado, setAgregado] = useState( false )

      const clickAgregar =() =>{
        handleAgregar()
        setAgregado(true )
      }
      const clickQuitar =() =>{
        handleQuitar()
        setAgregado(false )
      }
      
      return (
      
        <div className="relative lg:mt-2 mt-2 bg-white rounded-xl  " >
        
          <div className="">
            
                <div className="h-[500px] w-[350px] rounded-xl hover:shadow-white hover:shadow-lg  border-slate-500 border-2 p-2 space-y-2 text-center  " key={id}>
                <div className="max-w-full overflow-hidden">
            <img
              className="h-60 w-auto m-auto object-cover transition-transform transform hover:scale-125"
              src={imagen}
              alt={nombre}
            />
          </div>

                    <div className="p-2 space-y-2">
                  <h2 className="text-xl font-bold">{nombre}</h2>
                  <h3 className="">{descripcion}</h3>
                  <h4 className="text-2xl font-semibold">$ {precio}</h4>
                  </div>
                  
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center mb-2">
                  {agregado ?
              <button type="button" className=" bg-red-500 text-slate-200 p-2 rounded-md   " onClick={ clickQuitar}> Quitar del carrito</button>
              :
              <button type="button" className="bg-orange-500 text-slate-200 p-2 rounded-md hover:transition-transform transform hover:scale-125 hover:bg-lime-700  " onClick={clickAgregar}>Agregar al carrito</button>
              }
                    </div>
              
                </div>
    
    
    
                
            
    
    
    
              
          </div>
        </div>
    
      )
    }
    
    export default Electronica
    
  
