function toggle() {
  console.log("hello");
  var box = document.getElementById("togglebox");
  if (box.style.display === "") {
    box.style.display = "none";
  } else if (box.style.display === "none") {
    box.style.display = "";
  }
}
