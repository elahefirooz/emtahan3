<template>
    <div class="back">
  
      <h1 >{{ ProductsStore }}</h1>
    </div>
    
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { productsStore } from "../stores/product";
  const ProductsStore = productsStore();
  
  
  
 
  </script>
  
  <style>
  
  
  </style>