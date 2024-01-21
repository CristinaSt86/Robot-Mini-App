// functionalitate buton home
const homeBtn = document.getElementById("home-btn");
function afiseazaBtn() {
  console.log(homeBtn);
}
afiseazaBtn();
homeBtn.addEventListener("click", function () {
  window.location.href = "/";
});
