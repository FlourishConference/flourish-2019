var countDownDate = new Date("Apr 12, 2019 08:00:00").getTime();

function countdown() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".countdown").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "EXPIRED";
  }
  setTimeout(countdown, 1000);
}

function trees() {
  var trees = document.querySelectorAll(".bg-tree")
  toggleRandomTree()

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function toggleRandomTree() {

    trees[getRandomInt(18)].classList.toggle("fade")
    setTimeout(toggleRandomTree, 500)
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
trees();
countdown();