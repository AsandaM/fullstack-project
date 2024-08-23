<template>
    
    <div class="home-container">
    
  <div class="home-category">
    <h1 class="heading marginTop">Shop by Category</h1>
    <div class="categoryCircles pt-3">
      <div class="circle">
    <div class="circle-overlay"> 
      <router-link :to="{path: '/products/Toner', hash: '#product-section'}"><p>Toner</p></router-link>
     

    </div>
    
    <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/toner.png" alt="cardImage" loading="eager">
    </div>

    <div class="circle">
    <div class="circle-overlay">
      <router-link :to="{path: '/products/Mask', hash: '#product-section'}"><p>Mask</p></router-link>
      
    </div>
    
    <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/oskin.png" alt="cardImage" loading="eager">
    </div>

    <div class="circle">
    <div class="circle-overlay">
      <router-link :to="{path: '/products/Moisturiser', hash: '#product-section'}"><p>Moisturiser</p></router-link>
      
    </div>
    
    <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/combinationSkin2.png" alt="cardImage" loading="eager">
    </div>

    </div>
    <!-- <router-link to="/products"><button  class="btn-shopNew">View More</button></router-link> -->
  </div>
    
  
    <div class="carousel-containe">
      <div id="carouselExample" class="carousel slide pt-5" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="overlay"></div>
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/wrinklesBanner3.png" alt="slideImage" loading="eager">
      <div class="carousel-caption2">
        <h1 class="animate__animated animate__fadeInUp">Reveal Your Youthful Glow: Say Goodbye to Wrinkles</h1>
        <p class="animate__animated animate__fadeInUp">Fine lines and wrinkles don’t stand a chance with our advanced skincare solutions. Packed with powerful ingredients, our products are designed to rejuvenate and nourish your skin, leaving it smooth, firm, and radiant.</p>
        <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Discover</button></router-link>
      </div>
    </div>
    <div class="carousel-item">
      <div class="overlay"></div>
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/sensitiveSkin.png" alt="slideImage" loading="eager">
      <div class="carousel-caption2">
        <h1 class="animate__animated animate__fadeInUp">Gentle Care for Sensitive Skin</h1>
        <p class="animate__animated animate__fadeInUp">Discover our specially formulated products designed to soothe and protect delicate skin.Caring for sensitive skin requires the right balance of gentle yet effective ingredients. </p>
        <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Discover</button></router-link>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
    </div>
     
  

  <div class="home-ourStory">
    <h1 class="pt-4 heading">Sustainably Sourced</h1>
    <div class="ourStoryCards">
      <div class="card text-bg-dark">
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/peta-approved.jpg" alt="Rabbit" loading="eager">
  <div class="card-img-overlay">
    <h5 class="card-title pb-3">PETA-Approved</h5>
    <router-link :to="{ name: 'about', hash: '#petaApproved' }"><button class="card-button">Read More</button></router-link>
  </div>
</div>
<div class="card text-bg-dark">
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/planet.jpg" alt="Forest" loading="eager">
  <div class="card-img-overlay">
    <h5 class="card-title pb-3">Protect Our Planet</h5>
    <router-link :to="{ name: 'about', hash: '#planet' }"><button class="card-button">Read More</button></router-link>
  </div>
</div>
<div class="card text-bg-dark">
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/recycle4.png" alt="Products" loading="eager">
  <div class="card-img-overlay">
    <h5 class="card-title pb-3">Reuse , Reduce , Recycle</h5>
    <router-link :to="{ name: 'about', hash: '#recycle' }"><button class="card-button">Read More</button></router-link>
  </div>
</div>
    </div>
    
  </div>

    </div>     
    </template>
    
    <script>

export default {

    name: "homeContent"

}
    </script>
    
    <style>
    .marginTop{
      margin-top: 2rem;
    }

    .home-container {
  padding: 0;
  margin: 0;
}

.carousel-container {
  padding: 0;
  margin: 0;
}

.carousel-inner {
  width: 100%;
  padding: 0;
  margin: 0;
}


    .card-img-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); 
        z-index: 1;
    }
    
    .heading{
      padding-top: 3rem;
      padding-bottom: 2rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: var(--primary);
    }

    .card-text{
      font-family: "Poppins", sans-serif;
      color: var(--primary);
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    .categoryCircles{
      display: flex;
      justify-content: center;
      gap: 3.5rem;
      padding-bottom: 3rem;
      margin-top: 2rem;
    }
    
    .circle {
        position: relative;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        width: 18rem; /* Adjust the size as needed */
        border: 2px solid var(--alternative);
    }
    
    .circle img {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .circle-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* Customize the overlay color and opacity */
        z-index: 1;
        border-radius: 50%;
    }
    
    .circle-overlay p{
      z-index: 2;
      color: var(--secondary);
      margin: 8rem auto 2rem;
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      font-size: 1.5rem;
    }
    
    .circle-overlay a{
      text-decoration: none;
    }

    .carousel-caption2{
  z-index: 1;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 60rem;
    text-align: left;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
}

.carousel-caption2 p{
  font-size: 1.2rem;
  font-weight: 300;
}

.home-blog{
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.home-blog .carousel-item{
  cursor: pointer;
}

img[alt="slideImage2"] {
  width: 100%;
  height: 82vh;
}

.card{
  width: 18rem;
  border-radius: 0%;
  border: 2px solid var(--alternative);
}

.ourStoryCards{
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  gap: 3.5rem;
  padding-bottom: 6rem;
}

.ourStoryCards .card-title{
  color: var(--secondary);
  margin-top: 12rem;
  font-weight: 600;
}

.ourStoryCards .card-button{
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
      background-color: var(--alternative);
      color: var(--primary);
      font-weight: bold;
      font-family: "Poppins", sans-serif;
    }

    .ourStoryCards .card-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }

    @media (width < 999px)
    {
        .heading{
            font-size: 1.3rem;
        }

        .marginTop{
      margin-top: 0rem;
    }
    
    .categoryCircles{
      display: flex;
      justify-content: center;
      gap: 3.5rem;
      flex-direction: column;
    }
    
    .circle img{
      width: 12rem;
    }
    .circle{
      margin: auto;
      width: 12rem;
    }
    .circle-overlay p{
      margin: 5rem auto 2rem;
    }

    .carousel-caption2{
  z-index: 1;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 14rem;
    text-align: center;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
}

.carousel-caption2 p{
  font-size: 0.8rem;
  font-weight: 300;
}

.carousel-caption2 h1{
  font-size: 0.9rem;
}

.card{
  width: 12rem;
}

.ourStoryCards .card-title{
    margin-top: 9rem;
}

.ourStoryCards{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 0rem;
  padding-bottom: 2rem;
}
.categoryCircles{
  margin-top: 0rem;
}
    }
    
    </style>