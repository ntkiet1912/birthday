window.onload = () => {
  var counter = document.getElementById('digit')
  counter.innerText = config["tongThoiGianDemNguoc"];

  var tik = setInterval(() => {
    counter.classList.toggle("digit");
    if (counter.innerText == 0) {
      document.getElementById('container').classList.toggle("containeroverlay")
      window.location = "./MyBirthday/MyBirthday.html";
      clearInterval(tik)
    } else {
      counter.innerText -= 1
    }
    counter.classList.toggle("digit");
  }, 1000)
}
