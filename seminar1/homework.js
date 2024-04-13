/* Task 1
- Дан массив `const arr = [1, 5, 7, 9]`
- C помощью Math.min и spread-оператора, найти минимальное число в массиве
- Решение задание должно состоять из одной строки
*/
console.log("# # # TASK 1 # # #");

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/* Task 2
- Напишите функцию **createCounter**, которая создает счетчик и возвращает объект с двумя методами: **increment** и **decrement** 
- Метод **increment** должен увеличивать значение счетчика на 1
- Метод **decrement** должен уменьшать значение счетчика на 1
- Значение счетчика должно быть доступно только через методы объекта, а не напрямую
*/
console.log("\n# # # TASK 2 # # #");

function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
}

let counter = createCounter();
console.log(counter.getCount());

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());

/* Task 3
- Напишите рекурсивную функцию **findElementByClass**, 
  которая принимает корневой элемент дерева DOM и название класса в качестве аргументов
- Функция должна возвращать первый найденный элемент с указанным классом в этом дереве
*/
console.log("\n# # # TASK 3 # # #");

const findElementByClass = (root, className) => {
  // Впервые попробовал составить условие с "условной цепочкой" :) Прикольно работает)
  if (root.classList?.contains(className)) return root;
  for (let i = 0; i < root.children.length; i++) {
    const result = findElementByClass(root.children[i], className);
    if (result) return result;
  }
  return null;
};

const rootEl = document.querySelector("body");

// Ищем элемент с существующим классом
console.log(findElementByClass(rootEl, "text"));

// Ищем элемент с несуществующим классом
console.log(findElementByClass(rootEl, "photo"));
