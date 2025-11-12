import "./styles.css";
import { person, getMarriedStatus } from "./card";


function Card () {
  return (
  <div className="card_component">
    <div className="person_card">
      <p className="card_title">Person</p>
      <img className="avatar" src= {person.avatar} alt="Person Avatar"/>
      <p className="person_info">
        <span className="label">First Name: </span>
        {person.firstName}
      </p>
      <p className="person_info">
        <span className="label">Last Name: </span>
        {person.lastName}
      </p>
      <p className="person_info">
        <span className="label">Age: </span> 
        {person.age}
      </p>
      <p className="person_info">
        <span className="label">City: </span> 
        {person.city}
      </p>
      <p className="person_info">
        <span className="label">Street: </span> 
        {person.street}
      </p>
      <p className="person_info">
        <span className="label">Profession: </span>
        {person.profession}
      </p>
      <p className="person_info">
        <span className="label">Hobby: </span>
        {person.hobby}
      </p>
      <p className="person_info">
        <span className="label">Is Married: </span> 
        {getMarriedStatus (person.isMarried)}
      </p>
      <p className="person_info">
        <span className="label">Wife: </span> 
        {person.wife}
      </p>
      <p className="person_info">
        <span className="label">Children: </span> 
        {person.children}
      </p>
    </div>
  </div>
  )
};

export default Card;