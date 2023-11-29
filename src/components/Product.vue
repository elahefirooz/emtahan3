<template>
  
    <div class="back">
      <div  v-for="product in ProductsStore.products" :key="product.id">
       
          <router-link class="product"   :to="{name : 'productpage' , params:{id:product.id}}">
      <h3 style="color: blue;">{{ product.title }}</h3>
      <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
   
    </router-link>
  </div>
  </div>
  
   
  


  </template>
  
  
  <script setup lang="ts">
    import { ref, onMounted } from 'vue'
  import { productsStore } from '../stores/product'
  const ProductsStore = productsStore()
 
  </script>
  
  
  
  <style>
  .back{
    display: flex;
    justify-content: center;
   
  }
  
  .product{
  
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    
  }
  
  .product img{
    width: 250px;
  }
  
  </style>