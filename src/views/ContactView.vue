<template>
    <div class="container">
      <div class="row" id="contact">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h3 class="animate__animated animate__fadeInDown">Get in Touch with Us</h3>
            <p class="animate__animated animate__fadeInUp">Whether you have questions about our products, need personalized recommendations, or just want to share your experience, we’d love to hear from you. Reach out to us today, and let’s start a conversation!</p>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
            </div> 
       </div>
      </div>

      <div class="row">
        <h1 class="heading">Contact Us</h1>

        <form id="contactForm" action="https://formspree.io/f/mjvqdzra" method="POST"  @submit.prevent="validateForm($event)" target="_blank">
                <div class="row mb-5">
                    <div class="col">
                        <div class="form-group">
                            <!-- Name input-->
                             <label class="text-start">Enter your name:</label>
                            <input class="form-control" id="name" type="text" name="Name" placeholder="Your Name *" v-model="name"/>
                            <label id="name_error" class="contact-label"></label>
                        </div>
                        <div class="form-group">
                            <!-- Email address input-->
                            <label class="text-start">Enter your email address:</label>
                            <input class="form-control" id="email" type="email" name="Email" placeholder="Your Email *" v-model="email"/>
                            <label id="email_error" class="contact-label"></label>
                        </div>
                        <div class="form-group mb-md-0">
                            <!-- Phone number input-->
                            <label class="text-start">Enter your phone number:</label>
                            <input class="form-control" id="cell" type="tel" name="cell" placeholder="Your Phone *" v-model="cell"/>
                            <label id="cell_error" class="contact-label"></label>
                        </div>
                        <div class="form-group form-group-textarea mb-md-0">
                          <!-- Message input-->
                          <label class="text-start">Enter your inquiry:</label>
                          <textarea class="form-control mb-2" id="message" name="Message" placeholder="Your Inquiry *" v-model="message"></textarea>
                          <label id="message_error" class="contact-label"></label>
                      </div>
                    </div>
        
                </div>
              
                <!-- Submit Button-->
                 <div class="contact-buttons">
                  <div class="text-center"><button class="button1" id="submitButton" type="submit">Submit</button></div>
                  <div class="text-center"><button class="button1" id="submitButton" type="reset">Clear</button></div>
                 </div>
      
            </form>

      </div>
    </div>


  </template>

<script>
export default {
  name: 'ReachMe',
  
  data(){
    return{
      name: '',
      email:'',
      cell: '',
      message: ''
    }
  },

  methods: {
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    },

     validateForm(e){
      let name = document.querySelector('#name').value;
      let email = document.querySelector('#email').value;
      let cell = document.querySelector('#cell').value;
      let message = document.querySelector('#message').value;
      if(name === ""){
        document.getElementById("name_error").innerHTML = "Please enter your name";
        return false; // Prevent form submission
      }
      else if(email === ""){
        document.getElementById("email_error").innerHTML = "Please enter your email address";
        return false; // Prevent form submission
      }
      else if(cell === ""){
        document.getElementById("cell_error").innerHTML = "Please enter your cellphone number";
        return false; // Prevent form submission
      }
      else if(message === ""){
        document.getElementById("message_error").innerHTML = "Please enter your message";
        return false; // Prevent form submission
      }
      else{
        document.getElementById("name_error").innerHTML = ""; // Clear the error message
        document.getElementById("email_error").innerHTML = "";
        document.getElementById("cell_error").innerHTML = "";
        document.getElementById("message_error").innerHTML = "";
        e.target.submit()
      }
    }
  }
}
</script>

<style scoped>
#contact{
  position: relative;
  z-index: 1;
}

.heading{
      padding-top: 3rem;
      padding-bottom: 2rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: var(--primary);
    }

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner15.png");
    background-size: cover;
    background-position: center; 
    position: relative;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 1;
}

.banner-content{
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 12rem auto 12rem;
  font-family: "Poppins", sans-serif;
  color: var(--secondary);
}

.banner-content h3 {
    font-weight: 600;
    z-index: 2;
} 

.banner-content p{
    font-weight: 400;
    font-size: 1.2rem;
}

#contactForm{
  margin: auto;
  width: 63%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.contact-buttons{
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
}

.text-start{
  display: flex;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  font-weight: 600;
  font-size: 1.2rem;
}

.form-control{
  border: 1px solid var(--alternative);
}

.form-control::placeholder{
  color: var(--primary);
  font-family: "Poppins", sans-serif;
}

.button1{
  background-color: var(--alternative);
  padding: 0.5rem;
  width: 10rem;
  border-radius: 0.5rem;
  font-family:"Poppins", sans-serif;
  font-weight: 600;
}

.contact-label{
  display: flex;
  font-family:"Poppins", sans-serif;
}

.scroll-btn {
  width: 4rem;
  border-radius: 100%;
  background-color: var(--alternative);
  border: none;
  color: var(--primary);
  font-size: 24px;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 2rem;
}

.scroll-btn:hover {
  transition: 2s;
        background-color: var(--awesome);
}

@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .scroll-btn {
    display: none;
  }

  .banner-content{
    width: 100%;
    margin: 6rem auto 6rem;
  }
  .heading{
  font-size: 1.8rem;
}

.contact-buttons{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6rem;
  margin: auto;
}

.button1{
  width: 5rem;
}

.contact-label{
  text-align: left;
}

.text-start{
  font-size: 0.9rem;
}

}
</style>
