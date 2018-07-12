const pastSponsors = [{
    "name": "Red Hat",
    "logo": "redhat.png",
    "url": "http://redhat.com"
  },
  {
    "name": "Ubuntu",
    "logo": "ubuntu.png",
    "url": "http://ubuntu.com"
  },
  {
    "name": "",
    "logo": "github.png",
    "url": "http://github.com"
  },
  {
    "name": "",
    "logo": "21stCenturyYouthProject.jpg",
    "url": "#"
  },
  {
    "name": "",
    "logo": "acmSigSoft.jpg",
    "url": "http://sigsoft.org"
  },
  {
    "name": "",
    "logo": "civis.png",
    "url": "http://civisanalytics.com"
  },
  {
    "name": "",
    "logo": "cofactor.png",
    "url": "http://cofactordigital.com"
  },
  {
    "name": "",
    "logo": "easyname.png",
    "url": "http://easyname.com"
  },
  {
    "name": "",
    "logo": "enova.png",
    "url": "http://enova.com"
  },
  {
    "name": "",
    "logo": "illinoisTechAssociation.png",
    "url": "http://illinoistech.org"
  },
  {
    "name": "",
    "logo": "linuxJournal.png",
    "url": "http://linuxjournal.com"
  },
  {
    "name": "",
    "logo": "linuxmagazine.png",
    "url": "http://linux-magazine.com"
  },
  {
    "name": "",
    "logo": "linuxProfessionalInstitute.png",
    "url": "http://lpi.org"
  },
  {
    "name": "",
    "logo": "nextag.png",
    "url": "#"
  },
  {
    "name": "",
    "logo": "safc.png",
    "url": "#"
  },
  {
    "name": "",
    "logo": "sourceforge.png",
    "url": "http://sourceforge.com"
  },
  {
    "name": "",
    "logo": "spantree.png",
    "url": "http://spantree.net"
  },
  {
    "name": "",
    "logo": "threadless.png",
    "url": "http://threadless.com"
  }
];

const pastSpeakers = [
  {
    "name": "Daliah Saper",
    "photo": "daliah-saper.jpg",
    "tagline": "litigator",
    "url": ""
  },

  {
    "name": "Derek Eder",
    "photo": "derek-eder.jpg",
    "tagline": "OpenCity",
    "url": ""
  },

  {
    "name": "Jim Cambpell",
    "photo": "jim-campbell.jpg",
    "tagline": "ChicagoLUG",
    "url": ""
  },

  {
    "name": "Raymond Hightower",
    "photo": "raymond-hightower.jpg",
    "tagline": "ruby",
    "url": ""
  },

  {
    "name": "Luke Westby",
    "photo": "luke-westby.jpg",
    "tagline": "",
    "url": ""
  }
];

function getPastSponsors() {
  for (let k = 0; k < pastSponsors.length; k++) {
    let content = "";
    content += '<figure class="sponsor"><a href="//' + pastSponsors[k].url + '">';
    content += '<img src="/images/pastSponsors/' + pastSponsors[k].logo + '" alt="' + pastSponsors[k].name + '">';
    content += '<i class=""></i>';
    content += '</a></figure>';
    document.querySelector("#sponsors>div").innerHTML += content;
  }
}

function getPastSpeakers() {
  for (let k = 0; k < pastSpeakers.length; k++) {
    let content = "";
    content += '<div class="speaker">';
    content += '<img src="/images/pastSpeakers/' + pastSpeakers[k].photo + '" alt="' + pastSpeakers[k].name + '">';
    content += '<div class="speakerDetails"><p class="speakerName">' + pastSpeakers[k].name + '</p>';
    content += '<p class="speakerTagline">' + pastSpeakers[k].tagline;
    content += '<a href="' + pastSpeakers[k].url + '"><i class="fas fa-info-circle"></i></a></p></div>';
    content += '</div>';
    document.querySelector("#speakers>div").innerHTML += content;
  }
}

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
getPastSponsors();
getPastSpeakers();