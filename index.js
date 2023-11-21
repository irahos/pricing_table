document.addEventListener('DOMContentLoaded', function() {
  const subscribeButtons = document.querySelectorAll('.subscribe');
  const closeButtons = document.querySelectorAll('.fas');
  const modals = document.querySelectorAll('.modal');
  const toggler = document.getElementById('check');
  const prices = document.querySelectorAll('.price-usd');

  subscribeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      button.classList.add('clicked');
      const selectedPlan = this.getAttribute('data-plan');
      const selectedModal = document.querySelector(`.modal[data-plan="${selectedPlan}"]`);
      selectedModal.classList.add('show');

      const startDate = new Date();
      document.getElementById(`display-date-${selectedPlan}`).textContent = startDate.toLocaleDateString();
    });
 });
  
  closeButtons.forEach(function(button) {
    button.addEventListener('click', function () {
      subscribeButtons.forEach(function (subscribeButton) {
        subscribeButton.classList.remove('clicked');
      });
      modals.forEach(function (modal) {
        modal.classList.remove('show');
      });
    });
  });
  
  toggler.addEventListener('change', function() {
    prices.forEach((price) => {
      if (toggler.checked) {
        price.textContent = price.getAttribute('data-yearly');
      } else {
        price.textContent = price.getAttribute('data-monthly');
      }
    });
 });
});