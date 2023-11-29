<template>
       <input style="height: 32px; width: 400px; border-radius: 10px; border: 2px solid #000;" type="search" name="" id="" placeholder="    جست وجو" v-model="textSearch" @keyup="search(textSearch)"  >
    
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();
let textSearch = ref('');



let searchProduct: Ref<{
    id: number;
    title: string;
  
}[]>



function search(text : string)  {
  
    searchProduct =  ProductsStore.products.filter( (p:any) => p.title.includes(text) );
}

</script>