const price = document.querySelector("#price");
const but1 = document.querySelector("#but1");
const but2 = document.querySelector("#but2");

function monthtoggle() {
  price.innerHTML = "₹199<sub>/month</sub>";

  but1.classList.add("active");
  but1.classList.remove("inactive");
  but2.classList.add("inactive");
  but2.classList.remove("active");
}

function yeartoggle() {
  price.innerHTML = "₹2299<sub>/year</sub>";

  but2.classList.add("active");
  but2.classList.remove("inactive");
  but1.classList.add("inactive");
  but1.classList.remove("active");
}
