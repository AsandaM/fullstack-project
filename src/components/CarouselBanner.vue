<template>
<div class="container-fluid no-gutters">

  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators d-none d-md-block">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="overlay"></div>
            <div class="carousel-caption">
              <h1 class="animate__animated animate__fadeInDown">Welcome to Skin Oasis</h1>
              <p class="animate__animated animate__fadeInUp">Discover the perfect blend of nature and science to nourish your skin. Dive into our oasis and let your skin thrive.</p>
              <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Explore Now</button></router-link>
              <div class="hb-bannerLinks animate__animated animate__fadeInUp">
                <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
              <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a class="lnk text-white" href="https://github.com/AsandaM/fullstack-project" target="_blank"><i class="bi bi-github"></i></a>
              </div>
              <button @click="scrollDown" class="scroll-btn">↓</button>
            </div>
            <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner19.png" alt="slideImage" loading="eager">
          </div>
          <div class="carousel-item">
            <div class="overlay"></div>
            <div class="carousel-caption">
              <h1 class="animate__animated animate__fadeInDown">Experience the Ultimate Hydration and Glow</h1>
              <p class="animate__animated animate__fadeInUp">Discover our range of skin masks designed for every skin type.</p>
              <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Shop Now</button></router-link>
              <div class="hb-bannerLinks animate__animated animate__fadeInUp">
                <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
              <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a class="lnk text-white" href="https://github.com/AsandaM/fullstack-project" target="_blank"><i class="bi bi-github"></i></a>
              </div>
              <button @click="scrollDown" class="scroll-btn">↓</button>
            </div>
            <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner3.jpg" alt="slideImage" loading="eager">
          </div>
          
          <div class="carousel-item">
            <div class="overlay"></div>
            <div class="carousel-caption">
              <h1 class="animate__animated animate__fadeInDown">Nourish Your Skin Naturally</h1>
              <p class="animate__animated animate__fadeInUp">Say goodbye to dryness and hello to lasting hydration. </p>
              <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Shop Now</button></router-link>
              <div class="hb-bannerLinks animate__animated animate__fadeInUp">
                <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
              <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a class="lnk text-white" href="https://github.com/AsandaM/fullstack-project" target="_blank"><i class="bi bi-github"></i></a>
              </div>
              <button @click="scrollDown" class="scroll-btn">↓</button>
            </div>
            <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner22.png" alt="slideImage" loading="eager">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 

</div>
        

</template>

<script>
export default {
    name: "CarouselBanner",

    methods: {
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>

.container-fluid.no-gutters {
  padding: 0;
  margin: 0;
}

.carousel-inner {
  width: 100%;
  padding: 0;
  margin: 0;
}
    
    img[alt='slideImage']{
        width: 100%;
        height: 82vh;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6); 
        z-index: 1;
    }

    .hb-content{
        position: absolute;
        top: 10rem;
        left: 28rem;
        width: 40rem;
        z-index: 1;
    }
    
    .carousel-caption{
      z-index: 1;
      position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 40rem;
    }
    
    .carousel-caption h1{
        color: var(--secondary);
        font-size: 2.6rem;
        text-align: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
    }
    
    .carousel-caption p{
        color: var(--secondary);
        text-align: center;
        font-size: 1.2rem;
        font-family: "Montserrat", sans-serif;
    }
    
    .hb-button{
        padding: 0.5rem 2rem;
        background-color: var(--alternative);
        border: 1px solid var(--primary);
        border-radius: 0.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        margin-top: 1rem;
    }
    
    .hb-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }
    
    .hb-bannerLinks{
       display: flex;
       justify-content: space-between;
       width: 6rem;
       margin:auto;
       margin-top: 1.3rem;
       font-size: 1.3rem;
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
      .scroll-btn {
       display: none;
      }

        img[alt='slideImage']{
        width: 100%;
        height: 40vh;
      }
    
      .carousel-caption{
        width: 14rem;
      }
    
      .carousel-caption h1{
        font-size: 1.1rem;
      }
    
      .carousel-caption p{
        font-size: 0.9rem;
      }
    
    .hb-button{
      padding: 0.2rem 1rem; 
      margin-top: -0.5rem;
      font-size: 0.8rem;
    }
    .hb-bannerLinks{
      font-size: 0.9rem;
      margin-top: 0.6rem;
    }
    }

</style>