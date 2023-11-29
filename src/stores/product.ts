import { error } from 'console'
import { defineStore } from 'pinia'
import { json } from 'stream/consumers'
interface Product {
    id: number
    title: string
   

}


type State = {
  products: Product[]
 
}







export const productsStore = defineStore('product', {
    state: (): State => {
        return {
            products: [
                {
                   
                    id: 1,
                    title: 'چیپس  ',
                
                },
                {
                    id: 2,
                    title:'پاپ کرن  ',
                 
                },
                {
                    id: 3,
                    title:'پفک',
                },
                {
                    id: 4,
                    title: 'نوشابه ',
                },
               

                
            ],
            object : [],
            
        }
    },

 

})