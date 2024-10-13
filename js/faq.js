const faq = document.querySelectorAll(".faq__item-title");
const faqItems = document.querySelectorAll('.faq__item-title, .faq-toggle');

const accordionToggle = (e) => {
    e.currentTarget.classList.toggle("faq__active");
    const item = e.currentTarget.nextElementSibling;
    if (e.currentTarget.classList.contains("faq__active")) {
      item.style.maxHeight = item.scrollHeight + "px";
    } else {
      item.style.maxHeight = 0;
    }
  };
  
  if (faq) {
    faq.forEach((el) => {
      el.addEventListener("click", accordionToggle);
    });
  }




  if (faqItems) {
    faqItems.forEach((el) => {
      el.addEventListener("click", (event) => {
        const clickedElement = event.currentTarget;
  
        const faqToggle = clickedElement.querySelector('.faq-toggle');
        
        if (faqToggle) {
          faqToggle.classList.toggle('faq__active');
        }
        
      })})};


      