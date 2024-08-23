<template>
    <div class="Footer mt-5">
            <div class="footerAlignment">
                <div class="footerLeftContent">
                <h4 fw-700>Unlock Your Best Skin: Exclusive Tips Inside</h4>
                <form id="contactForm" action="https://formspree.io/f/mjvqdzra" method="POST"  @submit.prevent="validateForm($event)" target="_blank">

                <div class="form-group">
                    <!-- Email address input-->
                    <input class="form-control" id="email-footer" type="email" name="Email" placeholder="Enter your email address*" v-model="footerEmail"/>
                    <label id="email_error_footer" class="contact-label"></label>
                </div>

                <div class="text-center"><button class="button1" id="submitButton" type="submit">Send</button></div>

                </form>
                </div>

            <div class="footerRightContent">
                <div class="footer-socialLinks">
                    <h5>Social Links</h5>
                    <div class="footer-links padding">
                      <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
                      <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
                      <a class="lnk text-white" href="https://github.com/LeahBasson" target="_blank"><i class="bi bi-github"></i></a>
                    </div>
                </div>
                <div class="footer-usefulLinks">
                    <h5>Useful links</h5>
                    <div class="padding">
                    <router-link to="/contact" class="no-underline"><p>Contact</p></router-link>
                    <router-link to="/about" class="no-underline"><p>Our Story</p></router-link>
                    </div>
                    
                </div> 
            </div>
            </div>     
        <p class="fs-4 text-black mt-2">Skin Oasis &copy; {{ cYear }}</p>
    </div>

 
</template>

<script>
  export default {
      name: "FooterComp",
      data(){
          return{
            cYear: new Date().getUTCFullYear(),
            footerEmail:''
          }
      },

    methods: {
     validateForm(e){
      let footerEmail = document.querySelector('#email-footer').value;
      if(footerEmail === ""){
        document.getElementById("email_error_footer").innerHTML = "Please enter your email address";
        return false; // Prevent form submission
      }
      else{
     // Clear the error message
        document.getElementById("email_error_footer").innerHTML = "";
        e.target.submit()
      }
    }
  }

  }
  </script>

  <style>
  .no-underline{
    text-decoration: none;
    color: var(--primary);
  }

  .padding{
    padding-top: 1rem;
  }

  .Footer{
    background-color: var(--alternative);
    width: 100%;
    color: var(--primary);
    font-family: "Poppins", sans-serif;
  }

  .footerAlignment{
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }

  .footerLeftContent{
    width: 39rem;
    display: flex;
   flex-direction: column;
   align-items: start;
  }

  #contactForm{
    width: 37rem;
    display: flex;
    justify-content: start;
    gap: 1.5rem;
  }

  .form-group{
    margin-top: 1.1rem;
  }

  .footerRightContent{
    display: flex;
    justify-content: space-between;
    width: 22rem;
  }

  .footerLeftContent .button1{
    padding: 0.5rem 2rem;
    background-color: var(--alternative);
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1rem;
  }

  .footerLeftContent .button1:hover{
    transition: 2s;
    background-color: var(--awesome);
  }

  .footerLeftContent .form-control{
    width: 20rem;
    font-size: 1rem;
    border: 1px solid var(--primary);
  }

  .footerLeftContent .form-control::placeholder{
    color: var(--primary);
  }

  .footerLeftContent .contact-label{
    margin-top: 0.5rem;
    margin-left: -3rem;
  }

  .footer-links{
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
  }

  .footer-usefulLinks{
    text-align: left;
  }

  .footer-usefulLinks p:hover{
    color: var(--secondary);
  }

  @media (width < 999px)
  {
    .Footer{
       width: 100%;
    }
    
    .footerAlignment{
      width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    flex-direction: column;
  }

  .footerLeftContent{
    width: 62%;
    display: flex;
    justify-content: center;
   flex-direction: column;
   align-items: center;
   margin: auto;
  }

  .footerLeftContent h4{
    font-size: 1.2rem;
  }

  #contactForm{
    width: 16rem;
    display: flex;
    justify-content: center;
    gap: 0rem;
    flex-direction: column;
  }

  .form-group{
    margin-top: 1.1rem;
  }

  .footerRightContent{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 1rem;
    width: 25rem;
    margin-top: 2rem;
    width: 100%;
  }

  .footerLeftContent .button1{
     width: 70%;
    margin-top: 0.6rem;
    font-size: 0.7rem;
  }

  .footerLeftContent .form-control{
    width: 70%;
    font-size: 0.7rem;
    margin: auto;
  }

  .footerLeftContent .contact-label{
    font-size: 0.7rem;
  margin: auto;
   margin-top: 0.5rem;
  }

  .footer-links{
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 1.4rem;
  }

  .footer-usefulLinks{
    text-align: center;
  }

  .footer-usefulLinks p:hover{
    color: var(--secondary);
  }

  }
  
</style>