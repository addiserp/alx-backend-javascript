export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  const studentA: Student = {
    firstName: "Mark",
    lastName: "Roy",
    age: 25,
    location: "Seattle, United States",
  };
  const studentB: Student = {
    firstName: "Rose",
    lastName: "Kamile",
    age: 22,
    location: "Nirobi, Kenya",
  };
  
  const studentsList: Array<Student> = [
    studentA,
    studentB,
  ];
  const styleSheet = `
    html {
      margin: 0;
      height: 100%;
    }
    body {
      box-sizing: border-box;
      height: 80%;
      margin: 10%;
      align-items: center;
      justify-content: center;
      display: flex;
    }
    table {
      border-collapse: collapse;
    }
    thead {
      font-weight: bold;
    }
    td {
      padding: 10px;
      border: 1px solid gray;
      cursor: pointer;
    }
    td:hover {
      background: gainsboro;
    }
    td:nth-child(1) {
      text-align: center;
    }
  `;
  
  /**
   * will show data about students in a table format.
   * @param students students to list.
   */
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  
  export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
  
    for (const student of students) {
      const bodyRow = document.createElement('tr');
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
  
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
  };
  
  displayStudents(studentsList);
  const styleSheetElement = document.createElement('style');
  styleSheetElement.innerHTML = styleSheet;
  document.head.insertAdjacentElement('beforeend', styleSheetElement);
  document.title = 'Task 0';
