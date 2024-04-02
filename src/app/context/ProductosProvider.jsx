"use client"

import React from 'react'
import { ProductosContext } from './ProductosContext'
import { relojes } from '../dataProductos/dataRelojes'
import { electronica } from '../dataProductos/dataElectronica'
import { accesoriosCelulares } from '../dataProductos/dataAccesoriosCelulares'
import { fotografia } from '../dataProductos/dataFotografia'

const ProductosProvider = ( { children  } ) => {
  return (
    <ProductosContext.Provider value={{relojes,electronica, accesoriosCelulares, fotografia}}>
        {children}
    </ProductosContext.Provider>
  )
}

export default ProductosProvider
