"use strict";

/* Task 1. Управление библиотекой книг

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

- Свойство title (название) - строка, название книги
- Свойство author (автор) - строка, имя автора книги
- Свойство pages (количество страниц) - число, количество страниц в книге
- Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц)
*/
console.log("# # # TASK 1 # # #");

class Book {
  static idCounter = 1;

  constructor(title = "Unknown", author = "Unknown", pages = 0) {
    let _id = Book.idCounter++;
    this.getId = () => _id;
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo = () => {
    console.log(
      `КНИГА #${this.getId()}
Название: ${this.title}
Автор: ${this.author}
Количество страниц: ${this.pages}`
    );
  };
}

const book = new Book("The Shining", "Stephen King", 325); // передадим все необходимые аргументы
const newBook = new Book(); // создадим экземпляр не передавая аргументов
book.displayInfo();
newBook.displayInfo();

/* Task 2. Управление списком студентов
Реализуйте класс Student представляющий студента, со следующими свойствами и методами:

- Свойство name (имя) - строка, имя студента
- Свойство age (возраст) - число, возраст студента
- Свойство grade (класс) - строка, класс, в котором учится студент
- Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс)
*/
console.log("\n# # # TASK 2 # # #");

class Student {
  static idCounter = 1;

  constructor(name = "Unknown", age = -1, grade = "Indefined") {
    let _id = Student.idCounter++;
    this.getId = () => _id;
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo = () => {
    console.log(
      `СТУДЕНТ #${this.getId()}
Имя: ${this.name}
Возраст: ${this.age}
Класс: ${this.grade}`
    );
  };
}

const student = new Student("Luke Skywalker", 15, "9th grade"); // передадим все необходимые аргументы
const newStudent = new Student("Darth Vader"); // создадим экземпляр передав часть аргументов
student.displayInfo();
newStudent.displayInfo();
