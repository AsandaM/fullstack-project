<template>
    <div class="container-fluid">
        <div class="home-shopNew">
          <h1 class="heading">Shop our New</h1>
            <div class="cardsDiv pt-3 pb-3"  v-if="homeRecentProducts">
              
              <Card v-for="product in homeRecentProducts" :key="product.prodID">
                
                <template #cardHeader>
                <img :src="product.prodURL" :alt="product.prodName" loading="eager" class="img-fluid">
                </template>
        
                <template #cardBody>
                  <p class="card-title">{{ product.prodName }}</p>
                  <p class="card-text">{{ product.category }}</p>
                  <p class="card-title">R {{ product.amount }}</p>
                  <router-link :to="{name: 'productdetails', params: {id: product.prodID}}"><button class="card-button">View</button></router-link>
                </template>
              </Card>
            
            </div>
            <div v-else>
              <Spinner/>
            </div>
    
            <router-link to="/newproducts"><button  class="btn-shopNew" >View More</button></router-link>
            
          </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import Card from './Card.vue'
    
    export default {
        name: "ShopNewComp",
        components: {
            Card,
            Spinner
        },

        computed: {
      homeRecentProducts() {
        return this.$store.state.homeRecentProducts
      }
    },
    mounted() {
      this.$store.dispatch('homeRecentProducts')
    }
    }

</script>

<style>
.heading{
      padding-top: 3rem;
      padding-bottom: 2rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: var(--primary);
    }
    
    .home-shopNew{
      width: 100%;

    }

    .cardsDiv{
      display: flex;
      justify-content: center;
      gap: 3.5rem;
    }
    
    .cardsDiv .card-title{
      font-family: "Poppins", sans-serif;
      color: var(--primary);
      font-weight: 600;
    }

    .cardsDiv .card-button{
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
      background-color: var(--alternative);
      color: var(--primary);
      font-weight: bold;
      font-family: "Poppins", sans-serif;
    }

    .cardsDiv .card-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }
    
    .btn-shopNew{
      width: 16rem;
      margin: auto;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
      background-color: var(--alternative);
      color: var(--primary);
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
      margin-top: 1rem;
      cursor: pointer; 
      text-decoration: none;
      margin-bottom: 3rem;
    }

    .btn-shopNew:hover{
        transition: 2s;
        background-color: var(--awesome);
    }

    @media (width < 999px)
    {
        .cardsDiv{
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 3.5rem;
      margin: auto;
    }

    .btn-shopNew{
      width: 12rem;
      margin-bottom: 0rem;
    }

    .heading{
            font-size: 1.6rem;
        }

  }

</style>