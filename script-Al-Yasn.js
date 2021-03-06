$("#menu-icon").on("click", function () {
  if (
    $("#phone-menu-con").css("display") == "none" &&
    window.innerWidth < 992
  ) {
    $("#phone-menu-con").css("display", "block");
    $("#phone-menu-con").css("position", "fixed");
    $("#close").css("display", "block");
    $("#close").on("click", function () {
      {
        $("#phone-menu-con").css("display", "none");
        $("#close").css("display", "none");
      }
    });
  }
});
$("#register-btn").on("click", () => {
  $(".change").css("display","none");
  $("#popup-reg").css("display", "flex");
  $("#popup-reg").css("position", "fixed");
  $("hr").css("display","none"),
  $("#reg-con").css(["display", "flex"]);
  $("#reg-con").addClass("show");
  $("#close-pop-icon").on("click", () => {
    $("#popup-reg").css("display", "none");
    $("#reg-con").removeClass("show");
    $("#reg-con").removeClass("hidden");
    document.querySelector("#error").innerHTML = "";
    location.reload();
  });
  window.onclick = function (event) {
    if (event.target == document.querySelector("#popup-reg")) {
      $("#popup-reg").css("display", "none");
      $("#reg-con").removeClass("show");
      $("#reg-con").removeClass("hidden");
      document.querySelector("#error").innerHTML = "";
      location.reload();
    }
  };
});

const player = document.querySelector(".player");
const lyrics = document.querySelector(".lyrics");
const lines = lyrics.textContent.trim().split("\n");

lyrics.removeAttribute("style");
lyrics.innerText = "";

let syncData = [];

lines.map((line, index) => {
  const [time, text] = line.trim().split("|");
  syncData.push({ start: time.trim(), text: text.trim() });
});
const music = document.querySelector("#music");
music.onended = function () {
  document.querySelector("#text").style.display = "inline-flex";
  lyrics.innerText = "";
  $(".auto-play").css("display", "inline-table");
};
player.addEventListener("timeupdate", () => {
  $(".auto-play").css("display", "none");
  syncData.forEach((item) => {
    if (player.currentTime >= item.start) {
      document.querySelector("#text").style.display = "none";
      lyrics.innerText = item.text;
    }
  });
});

$(".auto-play").on("click", () => {
  document.getElementById("music").play();
});
$("#submit").on("click", () => {
  var isname;
  var isemail;
  var isphone;
  if (!$("#name").val() || !$("#email").val() || !$("#phone").val()) {
    document.querySelector("#error").innerHTML =
      "???????? ?????? ?? ???????? ???? ???? ???? ????????";
    $("#error").addClass("error");

    if (!$("#phone").val()) {
      $("#phone").css("border", "1px solid red");
      isphone = false;
    } else {
      $("#phone").css("border", "1px solid #00FF00");
      isphone = true;
    }
    if (!$("#email").val()) {
      $("#email").css("border", "1px solid red");
      isemail = false;
    } else {
      if (!validateEmail($("#email").val())) {
        document.querySelector("#error").innerHTML =
          "?????????? ???????? ?????? ???????????? ??????";
        $("#error").addClass("error");
        $("#email").css("border", "1px solid red");
        isemail = false;
      } else {
        $("#email").css("border", "1px solid #00FF00");
        isemail = true;
      }
    }
    if (!$("#name").val()) {
      $("#name").css("border", "1px solid red");
      isname = false;
    } else {
      $("#name").css("border", "1px solid #00FF00");
      isname = true;
    }
  } else {
    if (!validateEmail($("#email").val())) {
      document.querySelector("#error").innerHTML = "?????????? ???????? ?????? ???????????? ??????";
      $("#error").addClass("error");
      $("#email").css("border", "1px solid red");
      isemail = false;
    } else {
      isemail = true;
      $("#email").css("border", "1px solid #00FF00");
    }
    if (!/^[0-9]+$/.test($("#phone").val())) {
      document.querySelector("#error").innerHTML = "???????? ???????? ?????? ???? ?????????? ??????";
      $("#error").addClass("error");
      $("#phone").css("border", "1px solid red");
      isphone = false;
    } else {
      if ($("#phone").val().length > 11 || $("#phone").val().length < 11) {
        document.querySelector("#error").innerHTML =
          "?????????? ???????? ???????? 11 ?????? ????????";
        $("#error").addClass("error");
        $("#phone").css("border", "1px solid red");
        isphone = false;
      } else {
        isphone = true;
        $("#phone").css("border", "1px solid #00FF00");
      }
    }

    if ($("#name").val()) {
      $("#name").css("border", "1px solid #00FF00");
      isname = true;
    }
  }
  if (isname == true && isemail == true && isphone == true) {
    document.querySelector("#error").innerHTML = "";
    $("#reg-title").css("display", "none");
    $("#text1").css("display", "none");
    $("#form-field").css("display", "none");
    $("#reg-con").addClass("success");
    $("#success").css("display", "flex");
    $("#close-pop-icon").on("click", () => {
      $("#popup-reg").css("display", "none");
      $("#reg-con").removeClass("show");
      $("#reg-con").removeClass("hidden");
      document.querySelector("#error").innerHTML = "";
      location.reload();
    });
    window.onclick = function (event) {
      if (event.target == document.querySelector("#popup-reg")) {
        $("#popup-reg").css("display", "none");
        $("#reg-con").removeClass("show");
        $("#reg-con").removeClass("hidden");
        document.querySelector("#error").innerHTML = "";
        location.reload();
      }
    };
  }
});
function validnumber($phone) {}
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test($email);
}

var fixmeTop = $("#start").offset().top; // get initial position of the element
if (window.innerWidth < 992 ) {
  $(window).scroll(function () {
    // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop && $("#popup-reg").css("display") == "none") {
      // apply position: fixed if you
      $(".change").css({
        // scroll to that element or below it
        display: "inline",
        position: "fixed",
        right: 10,
        bottom: 20,
      });
    } else {
      // apply position: static
      // if you scroll above it
      $(".change").css({
        // scroll to that element or below it
        display: "none",
        position: "static",
      });
    }
  });
}
$(".change").on("click", () => {
  if ($(".tarjome").css("display") == "none") {
    $(".tarjome").css("display","inline-flex");
    document.querySelector(".change").innerHTML = "?????? ??????????";
    $(".change").css("background-color","#ff8d8d");
  } else {
    $(".tarjome").css("display","none");
    document.querySelector(".change").innerHTML = "???????????? ??????????";
    $(".change").css("background-color","#2ee59d")
  }
});
