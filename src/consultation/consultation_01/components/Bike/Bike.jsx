export default function Bike(props) {
  const {brand, gears, price, image} = props;

  return (
    <div style={{backgroundColor: "black", color: "white", }}>
      Brand: {brand}
      Gears: {gears}
      Price: {price}
      <img src={image} alt="" />
    </div>
  )
}