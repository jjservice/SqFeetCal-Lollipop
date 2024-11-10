function calculateSquareFeet() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
  
    if (isNaN(length) || isNaN(width)) {
      document.getElementById("result").textContent = "Please Enter valid numbers.";
    } else {
      const squareFeet = length * width;
      document.getElementById("result").textContent = `Square footage: ${squareFeet}`;
    }
  }