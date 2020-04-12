<template>
<div>
<router-view></router-view>
<!-- <div v-for="library in books.result" :key="library.result">

<p>Penulis : {{library.author}}</p>
<p>Judul Buku : {{library.book_title}}</p>
<p>Description : {{library.description}}</p><br>
</div> -->
</div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Main',
  components: {
  },
//   methods: {
//       addBooks(newBook) {
//           this.books = [...this.books,newBook]
//       }
//   },
//   data(){
//       return {
//           books: [

//           ],
//           container:null
//       }
//   },
//   mounted(){
//       axios.get('http://localhost:8000/library/')
//       .then((res)=> {
//           this.books = res.data
//       })
//       .catch(err => {
//           console.log(err)
//       })
//   }
 
};
</script>

<style>

</style>