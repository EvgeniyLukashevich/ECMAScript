# Seminar 2. Homework 
###### Решение находится в каталоге `seminar2`  

### Task 1. Управление библиотекой книг

Реализуйте класс **Book**, представляющий книгу, со следующими свойствами и методами:

- Свойство **title** (название) - строка, название книги
- Свойство **author** (автор) - строка, имя автора книги
- Свойство **pages** (количество страниц) - число, количество страниц в книге
- Метод **displayInfo()** - выводит информацию о книге (название, автор и количество страниц)

### Task 2. Управление списком студентов
Реализуйте класс **Student**, представляющий студента, со следующими свойствами и методами:

- Свойство **name** (имя) - строка, имя студента
- Свойство **age** (возраст) - число, возраст студента
- Свойство **grade** (класс) - строка, класс, в котором учится студент
- Метод **displayInfo()** - выводит информацию о студенте (имя, возраст и класс)
#### Пример:
```javascript
// Пример использования класса

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"
```

##
---


# Seminar 1. Homework 
###### Решение находится в каталоге `seminar1`  

### Task 1
- Дан массив `const arr = [1, 5, 7, 9] `
- C помощью **Math.min** и **spread**-оператора, найти минимальное число в массиве
- Решение должно состоять из одной строки

### Task 2
- Напишите функцию **createCounter**, которая создает счетчик и возвращает объект с двумя методами: **increment** и **decrement** 
- Метод **increment** должен увеличивать значение счетчика на 1
- Метод **decrement** должен уменьшать значение счетчика на 1
- Значение счетчика должно быть доступно только через методы объекта, а не напрямую

### Task 3
- Напишите рекурсивную функцию **findElementByClass**, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов
- Функция должна возвращать первый найденный элемент с указанным классом в этом дереве
#### Пример:
```javascript
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
```

##
---
