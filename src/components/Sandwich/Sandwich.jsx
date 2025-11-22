import { useState } from "react"
import style from "./Sandwich.module.css"
//rfc


export default function Sandwich() {
  const [sandwich, setSandwich] = useState("Butterbrod component 👨🏻‍🍳: ")
  function handleAddBread(){
    setSandwich(`${sandwich} Bread 🍞`)
  }
  function handleAddCheese(){
    setSandwich(`${sandwich} Cheese 🧀`)
  }
  function handleAddBacon(){
    setSandwich(`${sandwich} Bacon 🥓`)
  }
  function handleAddSalad(){
    setSandwich(`${sandwich} Salad 🥬`)
  }
  function handleAddKetchup(){
    setSandwich(`${sandwich} Ketchup 🥫`)
  }
  function handleClear(){
    setSandwich("Butterbrod: ")
  }
  return (
    <div>
      <h1>Sandwich</h1>
      <img className={style.image} src="https://mydeliciousmeals.com/images/recipephotos/large/r_homemade_deli_sub.jpg" alt="Sandwich" />
      <p>{sandwich}</p>
      <div className={style.Container}>
        <button type="button" onClick={handleAddBread} className={style.btn}>Breat</button>
        <button type="button" onClick={handleAddCheese} className={style.btn}>Cheese</button>
        <button type="button" onClick={handleAddBacon} className={style.btn}>Bacon</button>
        <button type="button" onClick={handleAddSalad} className={style.btn}>Salad</button>
        <button type="button" onClick={handleAddKetchup} className={style.btn}>Ketchup</button>
        <button type="button" onClick={handleClear} className={style.btn}>Clear</button>
      </div>
    </div>
  )
}
