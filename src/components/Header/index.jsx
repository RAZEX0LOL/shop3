import React, { useState } from "react";
import styles from "./Header.module.scss";
import { IoLogoGitlab } from "react-icons/io5";
import { IoMdBasket } from "react-icons/io";
import Orders from "../Orders";
import logo from "../../assets/logo.png";
import PriceListPDF from "../PriceListPDF";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";

export default function Header(props){
    let [cartOpen,setCartOpen]=useState(false);


    const handleDownloadPDF = async () =>{
        const pdfBlob =await pdf(<PriceListPDF items={props.items}/>).toBlob();
        saveAs(pdfBlob, "PriceList.pdf");

    }

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
                <img width={60} height={60} src={logo} alt="Logotype" />
                <span className={styles.logo}>Games Shop</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li onClick={handleDownloadPDF}>Скачать прайс-лист</li>
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