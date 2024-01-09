let queue = [];

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  if (customerName) {
    if (!isFull()) {
      queue.push(customerName);
      document.getElementById("customerName").value = ""; // Clear the input
      updateQueueDisplay();
      updateStatus();
    } else {
      alert("Queue is full. Cannot join.");
    }
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    alert("Next customer: " + queue.shift());
    updateQueueDisplay();
    updateStatus();
  } else {
    alert("No more customers in the queue.");
  }
});

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = "";
  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p>${index + 1}. ${customer}</p>`;
  });
}

function isFull() {
  return queue.length >= 15;
}

function updateStatus() {
  const statusElement = document.getElementById("status");
  statusElement.textContent = isFull()
    ? "Queue is full."
    : `Queue Status : ${queue.length}`;
}
