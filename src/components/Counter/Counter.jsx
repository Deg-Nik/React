// Импортируем useState из react
import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Counter() {

  // при старом способе не перезагружается реакт и не выводит значение
  // let count = 0;
  // console.log("1", count);

  // const onMinus = () => {
  //   count = count-1;
  //   console.log("2", count);
  // };
  // const onPlus = () => {
  //   count = count+1
  //   console.log("3", count);
  // };


  //функция возвращает массив из двух элементов
  // первый - переменная состояния
  // второй это функция меняющая переменную состояния
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  
 

  const onPlus = () => {
    setCount((countPlus) => {
      return countPlus + 1
    });
  };
  const onMinus = () => {
    setCount((countMinus) => {
      return countMinus - 1
    });
  };



  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}
export default Counter;
