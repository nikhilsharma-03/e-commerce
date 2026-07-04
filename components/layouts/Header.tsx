"use client"
import React from 'react'
import "./Header.css"
import { BiHomeAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from 'next/navigation';


const Header: React.FC = () => {
  const navigate = useRouter();
  return (
    <>
    <div className="main">
      <div className="box1">
        <div className="cart_icon"><BiHomeAlt /></div>
        <div className="title">ShopEase</div>
      </div>
      <div className="box2">
        <div className="user_icon"><FaRegUser /></div>
        <div className="cart_icon"onClick={() => navigate.push("/cart")}><FiShoppingCart /></div>
      </div>
    </div>
    </>
  )
}

export default Header