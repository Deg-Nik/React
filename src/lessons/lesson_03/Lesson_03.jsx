import "./styles.css";
import SimpsonCard from "../../components/SimpsonCard/SimpsonCard";
import Button from "../../components/Button/Button";

function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    profession: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };
  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    profession: "No Job",
    hobby: "coocking",
    avatar: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };
  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    profession: "No job",
    hobby: "Skate",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };
  return (
    <div className="lesson_03">
      <div className="cards_container">
        <SimpsonCard
          firstName={homerSimpson.firstName}
          lastName={homerSimpson.lastName}
          profession={homerSimpson.profession}
          hobby={homerSimpson.hobby}
          avatar={homerSimpson.avatar}
        />
        <SimpsonCard
          firstName={margeSimpson.firstName}
          lastName={margeSimpson.lastName}
          profession={margeSimpson.profession}
          hobby={margeSimpson.hobby}
          avatar={margeSimpson.avatar}
        />
        <SimpsonCard
          firstName={bartSimpson.firstName}
          lastName={bartSimpson.lastName}
          profession={bartSimpson.profession}
          hobby={bartSimpson.hobby}
          avatar={bartSimpson.avatar}
        />
      </div>
      <div className="buttons_container">
        <div className="button_control">
          <Button name="Send Request" />
        </div>
        <div className="button_control">
          <Button name="Get User Data" />
        </div>
        <div className="button_control">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Lesson_03;
