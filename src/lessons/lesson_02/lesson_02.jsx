import { animal, getPlanteaterStatus } from "./data";
import "./styles.css";
import Button from "../../components/Button/Button";

function Lesson_02() {
  console.log(animal);
  console.log(animal.fullName);
  
  // перенесли в data.js
  // const getPlanteaterStatus = (isPlanteater) => {
  //   if (isPlanteater) {
  //     return "yes"
  //   } else {
  //     return "no"
  //   }
  // }

  return (
    <div className="lesson_02_wrapper">
      <div className="animal_card">
        <p className="card_title">Animal Card: {animal.type}</p>
        <img className="avatar" src= {animal.avatarURL} alt="Animal Avatar"/>
        <p className="card_info">Name: {animal.fullName}</p>
        <p className="card_info">Age: {animal.age}</p>
        <p className="card_info">Color: {animal.color}</p>
        <p className="card_info">Is Planteater: {getPlanteaterStatus(animal.isPlanteater)}</p> 
        {/* <p className="card_info">Is Planteater: {animal.isPlanteater ? "yes" : "no"}</p>  */}
        {/* boolean */}
         <Button/>
         <Button/>
         <Button/>
      </div>
    </div>
  );
}

export default Lesson_02;