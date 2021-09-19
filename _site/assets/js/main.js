var newsletterForm = document.getElementById('newsletter');
var email = document.getElementById("newsletter-email");
var button = document.getElementById("newsletter-button");

newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    button.innerHTML = `Processing...<span class="spinner-border spinner-border-sm text-dark" role="status" aria-hidden="true"></span>`;
    // Newsletter Subscription
    $.post("https://cohi-newsletter.herokuapp.com/subscribe",
    { 'email': email.value},
    function(data,status,xhr){
      try {
        if(xhr.status === 200 & status === 'success') {
          swal({
              title: "Newsletter Subscription Successful",
              text: "You have been added to Our Mailing list!",
              icon: "success",
              button: "Okay",
          });
          email.value = '';
          button.innerHTML = 'Subscribe'
        } else {
          swal("Something went wrong", {
            buttons: false,
            timer: 3000,
            icon: "success"
          });
        } 
      } catch (error) {
        console.log(error);
      }
      button.innerHTML = 'Subscribe'
    });
});