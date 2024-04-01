"use client"

import React from 'react'
import { ProductosContext } from './ProductosContext'
import { relojes } from '../dataProductos/dataRelojes'
import { electronica } from '../dataProductos/dataElectronica'

const ProductosProvider = ( { children  } ) => {
  return (
    <ProductosContext.Provider value={{relojes,electronica}}>
        {children}
    </ProductosContext.Provider>
  )
}

export default ProductosProvider
