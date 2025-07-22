let balance = 0;
function Deposit() {
  const a = document.getElementById('damount');
  const amt = Number(a.value);

  if (amt <= 0) {
    alert("Please enter a valid deposit amount.");
  } else {
    balance += amt;
    alert("Deposited successfully!");
    // a.value = "";
  }
}

function withdraw() {
  const n = document.getElementById('wamount');
  const amt = Number(n.value);

  if (amt <= 0) {
    alert("Please enter a valid amount.");
  } else if (amt > balance) {
    alert("Insufficient balance.");
  } else {
    balance -= amt;
    alert("Withdrawal successful!");
    // n.value = "";
  }
}

function Balance() {
  document.getElementById('dbalance').textContent = `Your balance is ₹${balance}`;
}
