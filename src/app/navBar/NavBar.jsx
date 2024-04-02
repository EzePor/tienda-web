"use client";

import { Badge } from "@mui/material";
import {ShoppingCart} from "@mui/icons-material"
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import calcularCantidadItems from "../calcularCantidadItems";




const NavBar = () => {

  const {listaCompras} = useContext(CarritoContext);
  
  const cantidadTotal = calcularCantidadItems();

  const [isClick, setIsClick] = useState(false);

  const handlerNavBar = () => {
    setIsClick(!isClick);
  };

  return (
    <header className="flex items-center justify-center ">
      <nav className="bg-zinc-900 w-lvw z-50 fixed  top-0  h-16 lg: mb-5 lg:h-20 flex lg:justify-between items-center">
        <div className=" flex items-center justify-between lg:m-auto px-4">
          <div className=" flex mr-48  ">
            <button className="lg:hidden  " onClick={handlerNavBar}>
              {isClick ? (
                <img
                  src="./iconos/menu.svg"
                  alt="LogoMenu"
                  className=" h-10 bg-white rounded-lg  shadow-white shadow-sm"
                />
              ) : (
                <img src="./iconos/salir.svg" alt="Salir" className=" h-10  bg-white rounded-lg  shadow-white shadow-sm " />
              )}
            </button>
            <img
              src="./imagenes/tiendaWebLogo.png"
              alt="LogoTiendaWeb"
              className=" h-10 ml-2  bg-white rounded-md   "
            />
          </div>

          {/* menu lg */}
          <div className="hidden lg:flex lg:mr-40 ">
            <ul className="flex  space-x-10 ">
              <li className="text-lg font-semibold text-white  ">
                <Link
                  href="/compraElectronica"
                  className=" hover:text-orange-400 focus:text-orange-400  focus:outline-none focus:border-orange-500 border-b-2 border-transparent "
                >
                  Electrónica
                </Link>
              </li>
              <li className="text-lg font-semibold text-white ">
                <Link
                  href="/compraRelojes"
                  className=" hover:text-orange-400 focus:text-orange-400  focus:outline-none focus:border-orange-500 border-b-2 border-transparent "
                >
                  Relojes
                </Link>
              </li>
              <li className="text-lg font-semibold text-white  ">
                <Link
                  href="/compraAccesoriosCelulares"
                  className="  hover:text-orange-400 focus:text-orange-400  focus:outline-none focus:border-orange-500 border-b-2 border-transparent "
                >
                  Accesorios Celulares
                </Link>
              </li>
              <li className="text-lg font-semibold text-white  ">
                <Link
                  href="/compraFotografia"
                  className=" hover:text-orange-400 focus:text-orange-400  focus:outline-none focus:border-orange-500 border-b-2 border-transparent "
                >
                  Fotografía
                </Link>
              </li>
              <li className="text-lg font-semibold text-white ">
                <Link
                  href="/"
                  className=" hover:text-orange-400 focus:text-orange-400  focus:outline-none focus:border-orange-500 border-b-2 border-transparent "
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className=" flex items-center gap-8 mr-4 lg:mr-0">
            <Link href={"/carrito"} >
            <Badge badgeContent={cantidadTotal} color="secondary" className=" bg-white p-auto rounded-full p-2 shadow-white shadow-sm " >
            <ShoppingCart color="action" />
            </Badge>
            </Link>
            <img
              src="./imagenes/LogoEcommerce.png"
              alt="LogoEcommerce"
              className=" w-10  "
            />
            
          </div>
        </div>
      </nav>

      {/* menu celulares- barra deplegable con Link */}
      {!isClick && (
        <div className="  md:hidden  z-50  fixed top-0 right-0 transition-all duration-1000 ease-in-out">
          <nav className=" px-2 ">
            <ul className="  space-y-1 mt-[60px] ml-[-470px] ">
              <li className=" border-b-2 font-medium p-1  bg-orange-200 w-48">
                <Link
                  href="/compraElectronica"
                  className="hover:text-orange-600 focus:outline-none focus:text-orange-600"
                >
                  Electrónica
                </Link>
              </li>
              <li className=" border-b-2 font-medium p-1  bg-orange-200 w-48">
                <Link
                  href="/compraRelojes"
                  className="hover:text-orange-600 focus:outline-none focus:text-orange-600"
                >
                  Relojes
                </Link>
              </li>
              <li className=" border-b-2 font-medium p-1  bg-orange-200 w-48">
                <Link
                  href="/compraAccesoriosCelulares"
                  className="hover:text-orange-600 focus:outline-none focus:text-orange-600"
                >
                  Accesorios Celulares
                </Link>
              </li>
              <li className=" border-b-2 font-medium p-1  bg-orange-200 w-48">
                <Link
                  href="/compraFotografia"
                  className="hover:text-orange-600 focus:outline-none focus:text-orange-600"
                >
                  Fotografía
                </Link>
              </li>
              <li className=" border-b-2 font-medium p-1  bg-orange-200 w-48">
                <Link
                  href="/"
                  className="hover:text-orange-600 focus:outline-none focus:text-orange-600"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
