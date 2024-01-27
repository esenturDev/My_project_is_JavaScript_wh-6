// console.log("Hello");

// Задача 1.
const hetNamber = (n) => {
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr;
}

console.log(hetNamber(5));

//  Задача 2.
const daraText = [
  {
    text1: 'Азамат Агай!!!'
  },
  {
    text2: "Элхан Ментор."
  },
  {
    tetx3: "Азиат Ментор"
  },
];
const instruktoruu = (str, arr) => {
  if(str === 'Добавить начало'){
    arr.unshift({text1: 'hello'})
  }else if(str === 'Добавить Конец'){
    arr.push({tetx3: 'Salam'})
  }

  return arr
}
console.log(daraText);
console.log(instruktoruu('Добавить начало', daraText));
console.log(instruktoruu('Добавить Конец', daraText));

// Задача 3.
const typeChekingFunction = (callback) => {
  const user = [1,2,3];
  return typeof callback;
}

let result = typeChekingFunction(alert("Hello, world!"))
let result1 = typeChekingFunction(confirm('Hello'));
let result2 = typeChekingFunction(prompt('Hello'));

let userResult = result + " " + result1 + " " + result2;
console.log(userResult);

// Задача 4 Суроо жооп.
// objA => Бул озунчо бир сылка болуп сакталат   objB => Бул дагы озунчо сылка болуп сакталат. Биз экоону салыштырсак ар дайым false болот анткени алар озунчо сылка болуп сакталган. Ал эми биз бир переменный ачып анын objC === objA болсо Экоонун Сылкасы бир болуп калат Мисалы биз objA Га age ге 17; берген болсок анан биз objC Кайрылып age Озгортсок ал age озгоро берет анткени ал экоонун сылкасы бир болуп калды ошол себептен. Биз Эки Объектты Салыштырсак эч качан true болбойт. Экоонун тен сылкасы ар башка болуп эсептелет. Вот ошол учун true болбойт. Эгер бир объектке башка переменныйды улап ар кайсы переменныйларды кошсок болот озгортсок дагы болот.

