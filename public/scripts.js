

function GetNumberofZeroes() {
  console.log("GetZeroes function called");
  // Get the <select> element by its ID
  var selectElement = document.getElementById("difficultySelector");

  // Get the selected option
  var selectedOption = selectElement.options[selectElement.selectedIndex];

  // Get the value of the selected option
  let numberOfZeros;

  if (selectedOption.value === "hard") {
    numberOfZeros = 55;
  } else if (selectedOption.value === "mid") {
    numberOfZeros = 40;
  } else if (selectedOption.value === "easy"){
    numberOfZeros = 20;
  }
  return numberOfZeros;
}


export  { GetNumberofZeroes }
// function displaySolution() {
//   const solutionTable = document.getElementById("solutionTable");
//   if (solutionTable.style.display === "none") {
//     solutionTable.style.display = "table"; // Show the solution table
//   } else {
//     solutionTable.style.display = "none"; // Hide the solution table
//   }
// }






