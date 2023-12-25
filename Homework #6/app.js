console.log("Homework #6 is working!");

//CREATE A DYNAMIC TABLE
//Write a Javascript function that will dynamiclly create a table
//User should input the number of Colums and Rows
//In every table cell print which row and column it is (ex. Row-3 Column-1)
//Don't forget to use google! :).

function createTable() {
  let row = document.querySelector("#rows").value;
  let col = document.querySelector("#cols").value;

  let table = `<table>`;
  for (let i = 0; i < row; i++) {
    table += `<tr>`;
    for (let j = 0; j < col; j++) {
      table += `<td> Row-${i + 1} Column-${j + 1} </td>`;
    }
    table += `</tr>`;
  }
  table += `</table>`;
  const tableContainer = document.querySelector("#table-container");
  tableContainer.innerHTML = table;
  if (isNaN(row) || isNaN(col) || row <= 0 || col <= 0) {
  }
}

clickBtn.addEventListener("click", createTable);
