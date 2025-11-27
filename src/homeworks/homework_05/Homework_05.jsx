import { useState } from "react";
import { v4 } from "uuid";
import "./styles.css";
import Button from "../../components/Button/Button";

function Homework_05() {
  let [orders, setOrders] = useState([]);
  // console.log(v4());

  // создаем масив из продуктов
  const buttonItem = [
    "Burger",
    "Frites",
    "Cola",
    "Salat",
    "Ketchup",
    "Ice-cream",
    "Fish",
    "Fanta",
    "Souse",
  ];

  // создаем, с помощью map() и индивидуального ключа, кнопки
  const orderButtonItems = buttonItem.map((item) => {
    return (
      <div key={v4()} className="button_control">
        <Button
          name={item}
          onClick={() => setOrders((preValue) => [...preValue, item])}
        />
      </div>
    );
  });
  // console.log(buttonItem);

  const orderListItems = orders.map((value) => {
    return (
      <li key={v4()} className="order_item">
        {value}
      </li>
    );
  });

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">{orderButtonItems}</div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{orderListItems}</ol>
      </div>
    </div>
  );
}
export default Homework_05;
