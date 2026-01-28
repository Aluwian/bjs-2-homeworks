"use strict";
function parseCount(number) {
  const checkedNumber = parseFloat(number);
  if (isNaN(checkedNumber)) {
    throw new Error("Невалидное значение");
  }
  return checkedNumber;
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const halfPerimeter = this.perimeter / 2;
    return parseFloat(
      Math.sqrt(
        halfPerimeter *
          (halfPerimeter - this.a) *
          (halfPerimeter - this.b) *
          (halfPerimeter - this.c),
      ).toFixed(3),
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
