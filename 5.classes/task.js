"use strict";
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state = Math.min(100, this._state * 1.5); // обновляем состояние
    return this._state;
  }

  set state(newState) {
    if (newState > 100) {
      newState = 100;
    }
    if (newState < 0) {
      newState = 0;
    }
    this._state = newState;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index > -1) {
      const book = this.books[index];
      this.books.splice(index, 1);
      return book;
    }
    return null;
  }
}

// Создаем библиотеку
const library = new Library("Центральная библиотека");

// Создаем книги
const detective = new DetectiveBook(
  "Артур Конан Дойл",
  "Собака Баскервилей",
  1902,
  320,
);
const fantasic = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168,
);
const novel = new NovelBook("Лев Толстой", "Война и мир", 1869, 1225);
const magazine = new Magazine("Мурзилка", 1996, 36);
const specialBook = new Book("Тест", "Тестовая книга", 1919, 457);

// Добавляем в библиотеку книги
library.addBook(detective);
library.addBook(fantasic);
library.addBook(novel);
library.addBook(magazine);
library.addBook(specialBook);

// Проверяем сколько книг и библиотеке(должно быть 5)
console.log(`В библиотеке ${library.books.length} книг`);

// Ищем книгу по дате
let foundBook = library.findBookBy("releaseDate", 1919);
console.log(`Найдена книга 1919 года ${foundBook.name}`);

// Выдаем книгу
let givenBook = library.giveBookByName("Война и мир");
console.log(`Выдана книга ${givenBook.name}`);
console.log(`Осталось книг ${library.books.length}`);

// Повреждаем выданную книгу
givenBook.state = 5;
console.log(`Проверяем состояние книги ${givenBook.state}`);

// Чиним выданую книгу
givenBook.fix();
console.log(`Проверяем состояние книги ${givenBook.state}`);

// Проверяем сколько книг и библиотеке(должно быть 4)
console.log(`В библиотеке ${library.books.length} книг`);

// Пытаемся добавить обратно
library.addBook(givenBook);

// Проверяем сколько книг и библиотеке(должно быть 4)
console.log(`В библиотеке ${library.books.length} книг`);

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, course) {
    if (mark >= 2 && mark <= 5) {
      if (!(course in this.marks)) {
        this.marks[course] = [];
      }
      this.marks[course].push(mark);
    }
  }

  getAverageBySubject(course) {
    if (!(course in this.marks) || this.marks[course].length === 0) {
      return 0;
    }
    return (
      this.marks[course].reduce((acc, mark) => acc + mark, 0) /
      this.marks[course].length
    );
  }

  getAverage() {
    const allKeys = Object.keys(this.marks);
    if (allKeys.length === 0) {
      return 0;
    }
    let sumMarks = 0;
    for (const course of allKeys) {
      sumMarks += this.getAverageBySubject(course);
    }
    return sumMarks / allKeys.length;
  }
}
