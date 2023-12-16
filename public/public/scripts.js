// Import necessary functions from modules
import { solveSudoku } from "./solver.js";
import { generateSudoku } from "./generateSudoku.js";
import { isValid } from "./isValid.js";
let sudokuBoard;
genNewSudoku("Board"); //Initialize Board at Start
function GetNumberofZeroes() {
    console.log("GetZeroes function called");
    // Get the <select> element by its ID
    const selectElement = document.getElementById("difficultySelector");
    // Get the value of the selected option
    let numberOfZeros;
    if (selectElement) {
        // Get the selected option
        const selectedOption = selectElement.value;
        if (selectedOption === "hard") {
            numberOfZeros = 55;
        }
        else if (selectedOption === "mid") {
            numberOfZeros = 40;
        }
        else if (selectedOption == "easy") {
            numberOfZeros = 20;
        }
        else if (selectedOption === "super-easy") {
            numberOfZeros = 1;
        }
        else if (selectedOption === "Arto Inkala") {
            numberOfZeros = "Arto Inkala";
        }
        else {
            console.log("select contains non handeled value");
        }
        return numberOfZeros; //Return Number of Zeoes
    }
}
export { GetNumberofZeroes };
function collectUserInputs() {
    let userInputArray = sudokuBoard.map((row, rowIndex) => {
        return row.map((num, colIndex) => {
            let inputField = document.getElementById(`cell_${rowIndex}_${colIndex}`);
            return inputField
                ? inputField.value !== ""
                    ? parseInt(inputField.value, 10)
                    : num
                : num;
        });
    });
    validate(userInputArray);
}
export { collectUserInputs };
function validate(userInputArray) {
    const table = document.getElementById("Board");
    if (isValid(userInputArray)) {
        setColors("green");
    }
    else {
        setColors("red");
    }
    setTimeout(() => {
        resetColors();
    }, 750);
    function setColors(color) {
        table.style.backgroundColor = color;
    }
    function resetColors() {
        table.style.backgroundColor = "white";
    }
}
export { validate };
function genNewSudoku(tableId) {
    let table = document.getElementById(tableId);
    let numberOfZeros = GetNumberofZeroes();
    if (numberOfZeros !== "Arto Inkala") {
        sudokuBoard = generateSudoku(numberOfZeros);
    }
    else {
        sudokuBoard = [
            [8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 6, 0, 0, 0, 0, 0],
            [0, 7, 0, 0, 9, 0, 2, 0, 0],
            [0, 5, 0, 0, 0, 7, 0, 0, 0],
            [0, 0, 0, 0, 4, 5, 7, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 3, 0],
            [0, 0, 1, 0, 0, 0, 0, 6, 8],
            [0, 0, 8, 5, 0, 0, 0, 1, 0],
            [0, 9, 0, 0, 0, 0, 4, 0, 0],
        ];
    }
    let rawString = sudokuBoard
        .map((row, rowIndex) => row
        .map((num, colIndex) => `<td>${num === 0
        ? `<input type="number" max="9" min="1" value="" id="cell_${rowIndex}_${colIndex}">`
        : num}</td>`)
        .join(""))
        .map((row) => `<tr>${row}</tr>`)
        .join("");
    let str = rawString.replace(/<td>0<\/td>/g, '<td><input type="number" class="inputNumbersField" td>');
    table.innerHTML = str;
    console.log("Number of cells to figure out: " + numberOfZeros + ".");
}
export { genNewSudoku };
function solve(tableId) {
    let table = document.getElementById(tableId);
    sudokuBoard = solveSudoku(sudokuBoard);
    let rawString = sudokuBoard
        .map((row) => row.map((num) => `<td>${num}</td>`).join(""))
        .map((row) => `<tr>${row}</tr>`)
        .join("");
    table.innerHTML = rawString;
}
export { solve };
// Assign the function to the button click event after the function is defined
document.getElementById("generateButton").onclick = function () {
    genNewSudoku("Board");
};
document.getElementById("toggleButton").onclick = function () {
    solve("Board");
};
document.getElementById("Auswerten").onclick = function () {
    collectUserInputs();
};
var difficultySelector = document.getElementById("difficultySelector");
difficultySelector.onchange = function () {
    genNewSudoku("Board");
    // Check the selected value
    if (difficultySelector.value === "Arto Inkala") {
        alert('Im Durchschnitt könnte es für einen Sudoku-Experten mit umfangreicher Erfahrung und Kenntnissen in fortgeschrittenen Lösungstechniken etwa 2 bis 6 Stunden dauern, ein Rätsel wie das weltweit schwierigste Sudoku "Arto Inkala" zu lösen. Mit dem Lösungsprogramm (Lösungsalgorithmus) dieser Website geht das in unter 1 Sekunde. ');
    }
};
