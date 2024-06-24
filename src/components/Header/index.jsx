import React, { useState } from "react";
import styles from "./Header.module.scss";
import { IoLogoGitlab } from "react-icons/io5";
import { IoMdBasket } from "react-icons/io";
import logo from "../../assets/icon.png"
import Orders from "../Orders";

export default function Header(props){
    let [cartOpen,setCartOpen]=useState(false);

    const showOrders=(props)=>{
        let summa=0;

        props.orders.forEach(el=>summa+=Number.parseFloat(el.price))
        return(
            <>
                {props.orders.map(el=>(
                    <Orders key={el.id} item={el} onDelete={props.onDelete}/>
                ))}
                <p className={styles.summa}>Итого: {new Intl.NumberFormat().format(summa)} ₽</p>
            </>
        );
    }

    const showNothing=()=>{
        return(
            <div className={styles.empty}>
                <h2>Товары отсутствуют в корзине!</h2>
            </div>
        );
    }


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
                        {props.orders.length>0 ? showOrders(props) : showNothing()}
                     </div>
                 )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}