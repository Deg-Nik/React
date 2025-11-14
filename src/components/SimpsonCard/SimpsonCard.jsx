import "./styles.css";

// props это возможность передавать данные из родителя к дочерним - он является обьектом
// function SimpsonCard(props) {
function SimpsonCard({ firstName, lastName, age, profession, hobby, avatar }) {
  // console.log(props);

  // const person = {
  //   firstName: "Gomer",
  //   lastName: "Simpson",
  //   age: 39,
  //   city: "Springfield",
  //   street: "Evergreen Alley 742",
  //   profession: "Inspector at a nuclear power plant",
  //   hobby: "Meal, Beer and Television set",
  //   isMarried: true,
  //   wife: "Marge",
  //   children: "Bard, Lisa and Maggie",
  //   avatar:
  //     "https://cs9.pikabu.ru/post_img/2018/12/03/9/1543850691181871789.jpg",
  // };

  // const{firstName, lastName, age, profession, hobby, avatar} = props;

  // const getMarriedStatus = (isMarried) => {
  //   if (isMarried) {
  //     return "yes";
  //   } else {
  //     return "no";
  //   }
  // };

  return (
    <div className="person_card">
      <p className="card_title">Person</p>
      <img className="avatar" src={avatar} alt="Person Avatar" />
      <p className="person_info">
        <span className="label">First Name: </span>
        {firstName}
      </p>
      <p className="person_info">
        <span className="label">Last Name: </span>
        {lastName}
      </p>
      <p className="person_info">
        <span className="label">Profession: </span>
        {profession}
      </p>
      <p className="person_info">
        <span className="label">Hobby: </span>
        {hobby}
      </p>
    </div>
  );
}

export default SimpsonCard;
