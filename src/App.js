import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss"
import Items from "./components/Items";
import Categories from "./components/Categories";

function App() {
  const [items,setItems] =useState([
    {
      id:1,
      title:'Destiny 2',
      img:'Destiny.jpeg',
      desc:'Погрузитесь в мир Destiny 2, чтобы исследовать тайны Солнечной системы и испытать на себе возможности потрясающего шутера от первого лица. Откройте мощные стихийные способности и начните собирать уникальное оружие, броню и другое снаряжение, которое позволит вам создать неповторимого персонажа и разработать собственный игровой стиль. Самостоятельно или с друзьями проходите кинематографичный сюжет Destiny 2, участвуйте в сложных совместных миссиях или соревнуйтесь в различных режимах PvP-игры. Загрузите игру бесплатно и отправляйтесь к звездам – пусть о ваших подвигах слагают легенды!',
      category:'Шутер от первого лица',
      price:'2699'
    },
    {
      id:2,
      title:'Arma Reforger',
      img:'Arma.jpg',
      desc:'Arma Reforger, разработанная на игровом движке Enfusion, вовлекает вас в борьбу за два неимоверных острова общей площадью 61 км2 в реалистично воссозданном мире периода холодной войны. Сражайтесь в многопользовательском режиме Conflict или создавайте свои собственные сценарии в реальном времени в редакторе Game Master, где может произойти всё что угодно. Исследуйте совершенно новую местность острова Арланд и вернитесь на соседний Эверон, микрогосударство посреди Атлантики из популярной игры Arma: Cold War Assault, с которой все началось.',
      category:'Шутер от первого лица',
      price:'3199'
    },
    {
      id:3,
      title:'Half-Life: Alyx',
      img:'half-life.jpg',
      desc:'Half-Life: Alyx — это возвращение Valve во вселенную Half-Life в виртуальной реальности. Это история невозможной борьбы с жестокой расой пришельцев, известной как Альянс. События происходят между Half-Life и Half-Life 2.',
      category:'Шутер от первого лица',
      price:'1799'
    },
    {
      id:4,
      title:'Sifu',
      img:'sifu.jpg',
      desc:'В Sifu этот вопрос будет преследовать вашего героя (или героиню — выбор за вами) на протяжении всего пути мести, во время которого вам предстоит найти и покарать убийц семьи. Вы будете одни против всех: ни одного союзника, лишь бесчисленные полчища врагов. Всё, что у вас есть, — мистический амулет, который возвращает вас к жизни после смерти. Но будьте осторожны! За использование этого тайного оружия придётся дорого заплатить. Цена — старение и все, что оно несет с собой.',
      category:'Файтинги и боевые искусства',
      price:'999'
    },
    {
      id:5,
      title:'Tekken 8',
      img:'tekken.jpg',
      desc:'ВСТРЕЧАЙТЕ TEKKEN 8 — СЛЕДУЮЩУЮ ГЛАВУ ЛЕГЕНДАРНОЙ ФРАНШИЗЫ ФАЙТИНГОВ.Характерные для серии TEKKEN напряжённые битвы стали ещё лучше благодаря реалистичной графике, выжимающей максимум из современного оборудования, и проработанным до мелочей моделям персонажей, которые были созданы с нуля. А красочные и разрушаемые локации для сражений позволяют с головой окунуться в увлекательный игровой процесс.',
      category:'Файтинги и боевые искусства',
      price:'1299'
    },
    {
      id:6,
      title:'Mortal Kombat 1',
      img:'mortal-kombat.jpg',
      desc:'Откройте возрожденную вселенную Mortal Kombat, которую создал Бог огня Лю Кан. Mortal Kombat™ 1 провозглашает новую эру культовой франшизы с новой боевой системой, игровыми режимами и фаталити!',
      category:'Файтинги и боевые искусства',
      price:'4999'
    },
    {
      id:7,
      title:'Risk of Rain 2',
      img:'risk-of-rain.jpg',
      desc:'Выберитесь с хаотичной неизвестной планеты, отбиваясь от полчищ безумных монстров в одиночку или с друзьями. Неожиданным образом сочетайте найденные предметы и постигайте все особенности персонажей, пока сами не станете разрушительной силой, вселяющей ужас в ваших врагов',
      category:'Рогалики',
      price:'699'
    },
    {
      id:8,
      title:'Hades',
      img:'hades.jpg',
      desc:'Выберитесь с хаотичной неизвестной планеты, отбиваясь от полчищ безумных монстров в одиночку или с друзьями. Неожиданным образом сочетайте найденные предметы и постигайте все особенности персонажей, пока сами не станете разрушительной силой, вселяющей ужас в',
      category:'Рогалики',
      price:'799'
    },
    {
      id:9,
      title:'Dead Cells',
      img:'dead-cells.jpg',
      desc:'Dead Cells — это экшен-платформер и метроидвания с элементами рогалика. Вас ждет огромный, постоянно меняющийся замок... Если, конечно, вы сможете победить его стражей. Никаких сохранений. Убивайте, умирайте, учитесь и пробуйте снова.',
      category:'Рогалики',
      price:'599'
    },
    {
      id:10,
      title:'CarX Drift Racing',
      img:'carx-drift-racing.jpg',
      desc:'CarX Drift Racing дает вам шанс окунуться в истинный мир дрифта. Объединяйтесь с друзьями, настраивайте свой автомобиль и жгите резину!',
      category:'Гонки',
      price:'899'
    },
    {
      id:11,
      title:'Assetto Corsa Competizione',
      img:'asseto-corsa.jpg',
      desc:'Assetto Corsa Competizione — новая видеоигра, выпущенная самим чемпионатом Blancpain GT Series.Выдающееся качество симуляции позволяет прочувствовать атмосферу гонок FIA GT3 и вступить в борьбу против официальных пилотов на автомобилях и трассах реального чемпионата, воссозданных в игре с непревзойдённой точностью.',
      category:'Гонки',
      price:'799'
    },
    {
      id:12,
      title:'Forza Horizon 5',
      img:'forza-horizon.jpg',
      desc:'Участвуйте в захватывающих гонках и исследуйте невероятно красивые просторы Мексики за рулем лучших автомобилей мира. Покорите суровую Сьерра-Нуэва в невероятном раллийном приключении Horizon.',
      category:'Гонки',
      price:'2599'
    }
  ]);
  const [orders,setOrders]=useState([]);
  const [currentItems,setCurrentItems]=useState([]);

  useEffect(()=>{
    setCurrentItems(items);
  },[items]);

  const chooseCategory=(category)=>{
    if(category==="all"){
      setCurrentItems(items);
    }
    else{
      setCurrentItems(items.filter((el)=>el.category===category));
    }
  }

  const addToOrder =(item) =>{
    if(!orders.some((el)=>el.id===item.id)){
      setOrders([...orders,item]);
    }
  }

  const deleteOrder=(id)=>{
    setOrders(orders.filter((el)=>el.id!==id));
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items allItems={currentItems} onAdd={addToOrder}/>
      <Footer/>
    </div>
  );
}

export default App;
