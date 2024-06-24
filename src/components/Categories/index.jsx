import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props){

    const categories=[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Шутер от первого лица",
            name:"Шутер от первого лица"
        },
        {
            key:"Файтинги и боевые искусства",
            name:"Файтинги и боевые искусства"
        },
        {
            key:"Рогалики",
            name:"Рогалики"
        },
        {
            key:"Гонки",
            name:"Гонки"
        }
    ];
    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}