<template>
  <div class="container">
      <div class="row" id="ourStory">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h3 class="animate__animated animate__fadeInDown">Our Story</h3>
            <p class="animate__animated animate__fadeInUp">At Skin Oasis, we believe that skincare should be more than just a routine. Our story began with a passion for natural ingredients and a commitment to sustainability. We set out to create products that not only enhance your skin’s natural beauty but also respect the environment!</p>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
            </div> 
       </div>
      </div>

      <div class="content">

<div class="content-alignment" id="petaApproved">
  <div class="imgDiv">
    <img src="https://leahbasson.github.io/MyImages/skincareWebsite/meerkats2.png" alt="ourStoryImage" class="img-fluid">
  </div>
  <div class="mainText">
    <h3>PETA  Approved</h3>
    <p class="text-left">At Skin Oasis, it's a given that compassion is at the heart of everything we do. We want you to know that when you choose our products, you're making a choice that aligns with ethical values and respect for all living beings.</p>
    <p class="text-left fw-bold">Our Promise to Animals:</p>
    <p class="text-left"><span class="fw-bold">Cruelty-Free Ethics: </span>We proudly declare that no product in our range, from formulation to the supply chain, has ever been tested on animals. It's an unwavering commitment we've held from day one.</p>
    <p class="text-left"><span class="fw-bold">PETA Endorsement: </span>Our dedication to animal welfare is acknowledged by PETA, a leading voice in animal rights. Their endorsement guarantees that our products are not just animal-loving but also cruelty-free.</p>
  </div>
</div>

<div class="content-alignment" id="planet">
  <div class="mainText planet-text">
    <h3>Protect Our Planet</h3>
    <p class="text-left">At Skin Oasis we believe that beauty shouldn’t come at the cost of our environment. That’s why we’re committed to sustainable practices every step of the way from sourcing eco-friendly ingredients to using recyclable packaging.</p>
    <p class="text-left fw-bold">Our Promise to the Forest:</p>
    <p class="text-left"><span class="fw-bold">Community Empowerment:  </span>Our dedication extends beyond conservation; it’s about people, too. By safeguarding the forest, we empower local communities, particularly those whose livelihoods depend on these natural resources. </p>
    <p class="text-left"><span class="fw-bold">Environment and Livelihood: </span>We support sustainable forestry practices, to enrich the environment for who call the forest home. </p>
  </div>
  <div class="imgDiv planet-image">
    <img src="https://leahbasson.github.io/MyImages/skincareWebsite/forest2.png" alt="ourStoryImage" class="img-fluid">
  </div>
</div>

<div class="content-alignment" id="recycle">
  <div class="imgDiv">
    <img src="https://leahbasson.github.io/MyImages/skincareWebsite/recycle2.jpeg" alt="ourStoryImage" class="img-fluid">
  </div>
  <div class="mainText">
    <h3>Reuse | Reduce | Recycle</h3>
    <p class="text-left">At Skin Oasis, our journey is guided by a philosophy that marries the pursuit of potent beauty with an unwavering commitment to a healthier planet. </p>
    <p class="text-left fw-bold">Our Green Path:</p>
    <p class="text-left"><span class="fw-bold">Maximized Potency, Minimized Waste: </span> We prioritize powerful products with minimal waste, staying true to our clean beauty roots.</p>
    <p class="text-left"><span class="fw-bold">Waterless Innovation:  </span>Our waterless skincare technology delivers 100% active ingredients for potent, eco-friendly results.</p>
    <p class="text-left"><span class="fw-bold">For You, For Earth:  </span>We care for both your skin and the planet, making conscious choices that lower energy use, transportation, and carbon footprint.</p>
  </div>
</div>

</div>
    </div>

</template>

<script>
export default{
  mame: 'About',

  methods: {
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    },
  }
}
</script>

<style scoped>
#ourStory{
  position: relative;
  z-index: 1;
}

.planet-image{
  order: 2;
}

.planet-text{
  order: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner9.jpg");
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

img[alt="ourStoryImage"]{
  width: 30rem;
}

.content-alignment{
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 6rem;
  padding-bottom: 5rem;
  color: var(--primary);
}

.mainText{
  width: 28rem;
  font-family: "Poppins",sans-serif;
}

.text-left{
  text-align: left;
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
    font-size: 0.8rem;
    margin: 6rem auto 6rem;
  }
  .content-alignment{
  width: 65%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 0rem;
  color: var(--primary);
}

img[alt="ourStoryImage"]{
  margin: auto;
  padding-bottom: 3rem;
}

.mainText{
  width: 100%;
  font-family: "Poppins",sans-serif;
 
}

.text-left{
  text-align: center;
}

.planet-image{
  order: 1;
}

.planet-text{
  order: 2;
}

}
</style>
