import React from "react";
import styles from "./Orders.module.scss";
import { FaDeleteLeft } from "react-icons/fa6";

export default function Orders(props){
    return(
        <div className={styles.item}>
            <img src={"./images/" + props.item.img}/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price} ₽</b>
            <FaDeleteLeft className={styles.deleteIcon} onClick={()=>props.onDelete(props.item.id)}/>
        </div>
    );
}