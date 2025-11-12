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
  avatar: "https://cs9.pikabu.ru/post_img/2018/12/03/9/1543850691181871789.jpg",
};

const getMarriedStatus = (isMarried) => {
    if (isMarried) {
      return "yes"
    } else {
      return "no"
    }
  };

export {person, getMarriedStatus};  