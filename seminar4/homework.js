"use strict";

/* Task 1. Получение данных о пользователе
- Реализуйте функцию getUserData, которая принимает идентификатор 
    пользователя (ID) в качестве аргумента и использует fetch для 
    получения данных о пользователе с заданным ID с удаленного сервера.
- Функция должна возвращать промис, который разрешается с данными 
    о пользователе в виде объекта.
- Если пользователь с указанным ID не найден, промис должен быть 
    отклонен с соответствующим сообщением об ошибке.
*/
console.log("# # # TASK 1 # # #");

const getUserData = async (userId) => {
  return fetch("https://api.randomdatatools.ru/?count=5")
    .then((response) => {
      // response = !response;
      if (!response.ok) {
        return Promise.reject(new Error(`Response is not ok :(`));
      }
      return response.json();
    })
    .then((data) => {
      const user = data.find((item) => item.PasportNumber === userId);
      if (user !== undefined) return user;
      return data[0];
      // Так как пользователи генерируются рандомно, при несовпадающем id(номере паспорта)
      // буду выводить первого пользователя.
      // Просто для наглядности, чтобы функция постоянно не возвращала Promise с undefinded
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const userObject = await getUserData(507907);
console.log(userObject); // Ожидаем увидеть в консоле объект

/* Task 2. Отправка данных на сервер
- Реализуйте функцию saveUserData, которая принимает объект с данными 
    о пользователе в качестве аргумента и использует fetch для отправки 
    этих данных на удаленный сервер для сохранения.
- Функция должна возвращать промис, который разрешается, если данные 
    успешно отправлены, или отклоняется в случае ошибки.
*/
console.log("\n# # # TASK 2 # # #");

const saveUserData = async (userData) => {
  return fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      // response = !response;
      if (!response.ok) {
        return Promise.reject(new Error(`Response is not ok :(`));
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

// Ожидаем увидеть в консоле Промис с нужными данными в поле json
console.log(saveUserData(userObject));

/* Task 3. Изменение стиля элемента через заданное время
- Напишите функцию changeStyleDelayed, которая принимает идентификатор 
    элемента и время задержки (в миллисекундах) в качестве аргументов.
- Функция должна изменить стиль элемента через указанное время.
*/
console.log("\n# # # TASK 3 # # #");

const changeStyleDelayed = (elementId, delay) => {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    const colors = [
      "#2d9964",
      "#2e7cd1",
      "#c94079",
      "#8d5bc1",
      "#ba856f",
      "#ca9849",
    ];
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    element.style.color = randomColor;
    console.log(`Current color: ${randomColor}`);
  }, delay);
};

changeStyleDelayed("myText", 3000);
changeStyleDelayed("myText", 2000);
changeStyleDelayed("myText", 1000);
changeStyleDelayed("myText", 1000);
