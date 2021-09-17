var newsletterForm = document.getElementById('newsletter');
var email = document.getElementById("newsletter-email");
var button = document.getElementById("newsletter-button");

newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    button.innerHTML = `Processing...<span class="spinner-border spinner-border-sm text-dark" role="status" aria-hidden="true"></span>`;
    // Newsletter Subscription
    $.post("https://cohi-newsletter.herokuapp.com/subscribe",
    { 'email': email.value},
    function(data,status){
      if(status === 'success') {
        swal({
            title: "Newsletter Subscription Successful",
            text: "You have been added to Our Mailing list!",
            icon: "success",
            button: "Okay",
        });
        email.value = '';
        button.innerHTML = 'Subscribe'
      }
    });
});