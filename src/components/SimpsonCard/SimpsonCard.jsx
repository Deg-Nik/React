import "./styles.css";

function SimpsonCard() {
  const person = {
    firstName: "Gomer",
    lastName: "Simpson",
    age: 39,
    city: "Springfield",
    street: "Evergreen Alley 742",
    profession: "Inspector at a nuclear power plant",
    hobby: "Meal, Beer and Television set",
    isMarried: true,
    wife: "Marge",
    children: "Bard, Lisa and Maggie",
    avatar:
      "https://cs9.pikabu.ru/post_img/2018/12/03/9/1543850691181871789.jpg",
  };

  const getMarriedStatus = (isMarried) => {
    if (isMarried) {
      return "yes";
    } else {
      return "no";
    }
  };

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

export default SimpsonCard;
