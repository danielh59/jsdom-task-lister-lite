document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    document.getElementById("output-box").innerHTML += "Will Not Submit";
    event.preventDefault();
}, false);
});
