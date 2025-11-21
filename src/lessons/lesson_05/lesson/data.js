const number = [1, 2, 3, 4, 5];

const newNumbers = number.map((value, index, array)=>{
  return value * 2
});

console.log (newNumbers)