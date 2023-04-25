
//button code

document.getElementById("btn");
addEventListener("click", btnclicked);

let score = 0 && document.getElementById("result");

//function
function btnclicked() {
  // Input
  let quiz1 = document.getElementById("q1").value.toLowerCase();

  let quiz2 = document.getElementById("q2").value.toLowerCase();

  let quiz3 = document.getElementById("q3").value.toLowerCase();

  let quiz4 = document.getElementById("q4").value.toLowerCase();

  let quiz5 = document.getElementById("q5").value.toLowerCase();

  // Process
  if (quiz1 === "y") {
    score + 1;
  } else if (quiz2 === "r") {
    score + 1;
  }
  console.log(score);
  //Output

  document.getElementById("result").innerHTML = ` your results are ${score}/5 `;
}
