import { useState } from "react";
import {v4} from "uuid"
import "./styles.css";
import Button from "../../../components/Button/Button";

function Lesson_05() {
  let [orders, setOrders] = useState([]);

  const orderListItems = orders.map((value) => {
    return <li key={v4()} className="order_item">{value}</li>
  })

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          <div className="button_control">
            <Button name="Burger" onClick={() => {
              setOrders((preValue) => {
                return [...preValue, "Burger"]
              })
            }} />
          </div>
          <div className="button_control">
            <Button name="Fries" onClick={() => {
              setOrders((preValue) => {
                return [...preValue, "Frites"]
              })
            }} />
          </div>
          <div className="button_control">
            <Button name="Cola" onClick={() => {
              setOrders((preValue) => {
                return [...preValue, "Cola"]
              })
            }} />
          </div>
          <div className="button_control">
            <Button name="Salad" onClick={() => {
              setOrders((preValue) => {
                return [...preValue, "Salat"]
              })
            }} />
          </div>
          <div className="button_control">
            <Button name="Ketchup" onClick={() => {
              setOrders((preValue) => {
                return [...preValue, "Ketchup"]
              })
            }} />
          </div>
          <div className="button_control">
            <Button name="Ice-cream" onClick={() => {
              setOrders((preValue) => {
                return [...preValue, "Ice-cream"]
              })
            }} />
          </div>
        </div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">
          {orderListItems}
        </ol>
      </div>
    </div>
  );
}
export default Lesson_05;
