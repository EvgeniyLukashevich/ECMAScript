"use strict";

/* Task 1. Управление персоналом компании

Реализуйте класс Employee, который имеет следующие свойства и методы:
- Свойство name - строка, имя сотрудника
- Метод displayInfo() - выводит информацию о сотруднике

Реализуйте класс Manager, который наследует класс Employee и имеет дополнительное свойство и метод:
- Свойство department - строка, отдел, в котором работает менеджер
- Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере
*/
console.log("# # # TASK 1 # # #");

class Employee {
  static idCounter = 1;

  constructor(name) {
    let _id = Employee.idCounter++;
    this.getId = () => _id;
    this.name = name;
  }

  getId() {
    return this.getId();
  }

  displayInfo = () => {
    console.log(`EMPLOYEE #${this.getId()}
  Employee name: ${this.name}`);
  };
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo = () => {
    console.log(`EMPLOYEE #${super.getId()} (manager)
  Manager name: ${this.name} 
  Department: ${this.department}`);
  };
}

const employee = new Employee("Peter Parker");
const manager = new Manager("Gwen Stacy", "Sales Department");
employee.displayInfo();
manager.displayInfo();

/* Task 2. Управление списком заказов

Реализуйте класс **Order**, который имеет следующие свойства и методы:
- Свойство **orderNumber** - число, уникальный номер заказа
- Свойство **products** - массив, содержащий список продуктов в заказе
- Метод **addProduct(product)** - принимает объект product и добавляет его в список продуктов заказа
- Метод **getTotalPrice()** - возвращает общую стоимость заказа, основанную на ценах продуктов
*/
console.log("\n# # # TASK 2 # # #");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  static idCounter = 1;

  constructor() {
    let _id = Order.idCounter++;
    this.getId = () => _id;
    this.products = [];
  }

  addProduct = (product) => {
    if (Array.isArray(product)) {
      this.products.push(...product);
    } else {
      this.products.push(product);
    }
  };

  getTotalPrice = () => {
    let totalPrice = 0;
    this.products.forEach((product) => {
      totalPrice += product.price;
    });
    return totalPrice;
  };
}

const product1 = new Product("Keyboard", 5000);
const product2 = new Product("Phone", 15000);
const product3 = new Product("Desktop", 7500);
const product4 = new Product("Coke", 100);
const product5 = new Product("Phones", 1300);
const products1 = [product1, product2, product3];
const products2 = [product1, product3, product4, product5];

const order1 = new Order();
const order2 = new Order();
order1.addProduct(products1);
order2.addProduct(products2);

console.log(`ORDER #${order1.getId()}
Total price: ${order1.getTotalPrice()}`);
console.log(`ORDER #${order2.getId()}
Total price: ${order2.getTotalPrice()}`);
