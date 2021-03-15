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


************************
//       TEST#2

// Markup
const appContainer = document.querySelector(".date-container");
const listItem = document.querySelector(".item");
const dateEl = document.querySelector(".date");

let counter = 0;

function init() {
  const [date, value] = Object.entries(res)[counter];
  const mainInfo = Object.entries(value);

  listItem.textContent = "";
  dateEl.textContent = date;

  for (const [key, value] of mainInfo) {
    const html = `<p>${key} - ${value.salary}<p/>`;
    listItem.insertAdjacentHTML("beforeend", html);
  }
}

document.querySelector(".prev").addEventListener("click", function () {
  counter--;
  if (counter < 0) return (counter = 0);
  init();
});

document.querySelector(".next").addEventListener("click", function () {
  const dataLength = Object.entries(res).length - 1;

  counter++;
  if (counter > dataLength) return (counter = dataLength);
  init();
});

init();

********************************
//   TEST #3
  
  const test = [
  {
    id: 1000,
    name: "Like",
    parent_id: "1003",
    parent_name: "Root",
  },
  {
    id: 1001,
    name: "Count",
    parent_id: 1000,
    parent_name: "Like",
  },
  {
    id: 1002,
    name: "Subscribe",
    parent_id: "",
    parent_name: "",
  },
  {
    id: 1003,
    name: "Root",
    parent_id: "",
    parent_name: "",
  },
];


console.log(
  test.reduce((acc, { id, parent_name, name }) => {
    if (!parent_name) {
      acc[id] = `/ > ${name}`;
    } else {
      acc[id] = `/ > ${
        parent_name === "Root" ? "" : "Root >"
      } ${parent_name} > ${name}`;
    }

    return acc;
  }, {})
);

