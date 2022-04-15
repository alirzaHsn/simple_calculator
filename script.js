function clearScreen() {
    document.getElementById("result").value = "";
}
//*********************************************************
function display(value) {
     document.getElementById("result").value += value;
}
//*********************************************************
function calculate() {
     var expression = document.getElementById("result").value;
     try {
         var result = eval(expression);
        } catch (e) {
         alert("Invalid input");
         return;
      }
 document.getElementById("result").value = result;
}
