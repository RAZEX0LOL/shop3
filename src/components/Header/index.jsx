import React, { useState } from "react";
import styles from "./Header.module.scss";
import { IoLogoGitlab } from "react-icons/io5";
import { IoMdBasket } from "react-icons/io";
import logo from "../../assets/icon.png"

export default function Header(){
    let [cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                {/* <IoLogoGitlab className={styles.icon}/> */}
                <img src={logo} alt="logo" />
                <span className={styles.logo}>Games Shop</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <IoMdBasket onClick={()=>setCartOpen(cartOpen= !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>

                 {cartOpen &&(
                     <div className={styles.shopCart}>

                     </div>
                 )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}