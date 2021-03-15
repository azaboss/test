/*Каждый сотрудник получает зарплату на проделанную сделку.
У каждой сделки есть определенная дата.
Необходимо написать функионал на JS способный сгруппировать сотрудников по определенным датам.
*/

// Пример массива данных:
const arr = [
  {
    id: 111,
    name: "Azat",
    salary: 11000,
    date: "2020-12-01",
  },
  {
    id: 222,
    name: "Boris",
    salary: 120000,
    date: "2020-11-01",
  },
  {
    id: 333,
    name: "Valihan",
    salary: 130000,
    date: "2020-10-01",
  },
  {
    id: 444,
    name: "Grigoriy",
    salary: 140000,
    date: "2020-09-02",
  },
  {
    id: 555,
    name: "Diana",
    salary: 150000,
    date: "2020-09-01",
  },
  {
    id: 666,
    name: "Egor",
    salary: 160000,
    date: "2020-10-01",
  },
  {
    id: 777,
    name: "Jandos",
    salary: 170000,
    date: "2020-11-01",
  },
  {
    id: 888,
    name: "Zinaida",
    salary: 1000000,
    date: "2020-12-02",
  },
];

// Пример ответа:
obj = {
  "2020-12-01": {
    111: {
      salary: 11000,
    },
    888: {
      salary: 1000000,
    },
    // ... остальные люди
  },
  // ... остальные дни
};

// На выполнения 3 часа

console.log(
  arr.reduce((acc, curr) => {
    if (!acc[curr.date]) {
      acc[curr.date] = {};
    }

    acc[curr.date][curr.id] = { salary: curr.salary };
    return acc;
  }, {})
);
