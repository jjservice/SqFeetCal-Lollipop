function calculateSquareFeet() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
  
    if (isNaN(length) || isNaN(width)) {
      document.getElementById("result").textContent = "Enter valid numbers!";
    } else {
      const squareFeet = length * width;
      document.getElementById("result").textContent = `Sq footage: ${squareFeet}`;
    }
  }

  function Togglelight(){
    const body = document.querySelector("body");
    body.classList.toggle("light");
  }