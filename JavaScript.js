// Calculate Total
function totalsvalue() {
  var quantity = document.getElementsByClassName("quantity");
  var price = document.getElementsByClassName("price");
  var totals = document.getElementById("totals");
  var sum = 0;
  for (var i = 0; i < price.length; i++) {
    sum += parseInt(quantity[i].value) * parseInt(price[i].textContent);
  }
  totals.value = sum;
}

// Increment Card
var incbtn = document.getElementsByClassName("fa-solid fa-plus");
var prices = document.getElementsByClassName("price").textContent;
for (var k = 0; k < incbtn.length; k++) {
  var btninc = incbtn[k];
  btninc.addEventListener("click", function (event) {
    var btnadd = event.target;
    var add = btnadd.parentElement.querySelector(".quantity");
    add.setAttribute("value", parseInt(add.value) + 1);
    totalsvalue();
  });
}

// Decrement Card
var incbtn = document.getElementsByClassName("fa-solid fa-minus");
var prices = document.getElementsByClassName("price").textContent;
for (var k = 0; k < incbtn.length; k++) {
  var btninc = incbtn[k];
  btninc.addEventListener("click", function (event) {
    var btnadd = event.target;
    var add = btnadd.parentElement.querySelector(".quantity");
    if (parseInt(add.value) > 0) {
      add.setAttribute("value", parseInt(add.value) - 1);
      totalsvalue();
    }
  });
}

// Delete Card
var delbtn = document.getElementsByClassName("fa-solid fa-trash");
for (var j = 0; j < delbtn.length; j++) {
  var btn = delbtn[j];
  btn.addEventListener("click", function (event) {
    var btnclicked = event.target;
    var wantdelete1 = confirm("Are you sure to delete this card ?");
    if (wantdelete1) {
      btnclicked.parentElement.parentElement.remove();
      totalsvalue();
    }
  });
}

// Adore Card
var adrbtn = document.getElementsByClassName("fa-solid fa-heart-circle-bolt");
for (var j = 0; j < adrbtn.length; j++) {
  var btnheart = adrbtn[j];
  btnheart.addEventListener("click", function (event) {
    var btnh = event.target;
    if (btnh.style.color != "red") {
      btnh.style.color = "red";
    } else {
      btnh.style.color = "black";
    }
  });
}

// Send message Card
var envelopbtn = document.getElementsByClassName("fa-solid fa-envelope");
for (var k = 0; k < envelopbtn.length; k++) {
  var envelop = envelopbtn[k];
  envelop.addEventListener("click", function (event) {
    var msg = prompt(
      "Send us a private message :",
      "Write your comments here !"
    );
    if (msg == null) {
      return 0;
    } else if (msg != "" && msg != "Write your comments here !") {
      alert("Your message has been sent successfully ✔ ");
    } else {
      alert("You wrote nothing !");
    }
  });
}
