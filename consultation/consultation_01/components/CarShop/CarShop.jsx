import Car from "../Car/Car"
import Bike from "../Bike/Bike"
import teslaImage from "./img/tesla.jpg"

export default function CarShop () {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <Car brand="Mersedes" color="black"/>
      <Car brand="Tesla" color="green"/>
      <Car brand="Kia" color="blue"/>
      <Car brand="Lada" color="red"/>
      <Car brand="Honda" color="yellow"/>
      <Car brand="Opel" color="pink"/>
      <img src={teslaImage} alt="" />
      <img src="buhanka.jpg" alt="" />
      <Bike brand="Honda" gears="5" price="3000" image="https://www.webbikeworld.com/wp-content/uploads/2021/07/ezgif.com-webp-to-jpg-copy-2-1.jpg"/>
      {/* <img src="https://www.webbikeworld.com/wp-content/uploads/2021/07/ezgif.com-webp-to-jpg-copy-2-1.jpg" alt="" /> */}
      <Bike brand="Ural" gears="4" price="5000"/>
      <img src="" alt="" />
      <Bike brand="Jawa" gears="5" price="4500"/>
      <img src="" alt="" />
    </div>
  )
}

// bike
// props:
// brand
// gears
// price
// imgage