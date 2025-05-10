
var counter1 = []
var counter2 = []
var counter3 = []

function renderList(id, arr, countClass, totalClass) {
  const el = document.getElementById(id);
  el.innerHTML = arr.length ? arr.map(item => `<li>${item}</li>`).join("") : "";

  document.querySelector(`.${countClass}`).innerText = arr.length;
const totalSum = arr.reduce((a, b) => a + b, 0);
document.querySelector(`.${totalClass}`).innerText = `Total items: ${totalSum}`;
document.getElementById('iteminput').addEventListener('input', function () {
  if (this.value < 0) {
    this.value = '';
  }
});
}

function add_to_item() {
  const itemmm = parseInt(document.getElementById('iteminput').value);
  if (isNaN(itemmm)) return;

  const sum1 = counter1.reduce((a, b) => a + b, 0);
  const sum2 = counter2.reduce((a, b) => a + b, 0);
  const sum3 = counter3.reduce((a, b) => a + b, 0);

  const minSum = Math.min(sum1, sum2, sum3);

  if (minSum === sum1) {
    counter1.push(itemmm);
  } else if (minSum === sum2) {
    counter2.push(itemmm);
  } else {
    counter3.push(itemmm);
  }

  renderList("item1", counter1, "customer_count1", "total_count1");
  renderList("item2", counter2, "customer_count2", "total_count2");
  renderList("item3", counter3, "customer_count3", "total_count3");

  document.getElementById("iteminput").value = "";
}

