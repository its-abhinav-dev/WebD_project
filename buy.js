// Get modal and elements
const modal = document.getElementById("orderModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const deliveryDate = document.getElementById("deliveryDate");
const closeBtn = document.querySelector(".close-btn");

// Show modal and populate details
document.querySelectorAll(".buy-now-btn").forEach(button => {
  button.addEventListener("click", function () {
    const item = this.closest(".painting-item");
    const title = item.dataset.title;
    const medium = item.dataset.medium;
    const dimensions = item.dataset.dimensions;
    const year = item.dataset.year;
    const price = item.dataset.price;

    modalTitle.textContent = `Order Details - ${title}`;
    modalDetails.textContent = `Medium: ${medium} | Dimensions: ${dimensions} | Year: ${year} | Price: ${price}`;

    const today = new Date();
    const delivery = new Date();
    delivery.setDate(today.getDate() + 7);
    deliveryDate.textContent = `Estimated Delivery: ${delivery.toDateString()}`;

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Handle form submission
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Order placed successfully!");
  modal.style.display = "none";
});
