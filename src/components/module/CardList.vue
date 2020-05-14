<template>
    <div>
        <!-- <router-view></router-view> -->
        <div class="card-list">
                <!-- <p class="p1">List Book</p> -->
                <div class="gambar-1" v-for="library in books" :key="library">
                  <img :src="library.image" alt="">
                  <h2><router-link :to="'/detail/'+library.book_id">{{library.book_title}}</router-link></h2>
                  <p>{{library.description}}</p>
                </div>
        </div>
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                    <a class="page-link" href="#" @click="prevPages">Previous</a>
                    </li>
                    <li class="page-item" v-for="page in totalPage" :key="page"><a class="page-link" href="#" @click="pages(page)">{{page}}</a></li>
                    <li class="page-item next">
                    <a class="page-link" href="#" @click="nextPages">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CardList',
    methods: {
      addBooks(newBook) {
          this.books = [...this.books,newBook]
      },
      pages(id){
          this.currentPage = 0 + id
          axios.get(this.url + this.currentPage)
          .then((res)=>{
              this.books = res.data.result[3]
          })

      },
      nextPages(){
         if(this.currentPage === this.totalPage){
             this.currentPage = this.totalPage
         }else {
             this.currentPage +=1
         }
          axios.get(`http://localhost:8000/api/v1/library/?page=${this.currentPage}`)
         .then((res)=> {
          this.books = res.data.result[3]
          this.totalPage = res.data.result[0]
         })
         .catch(err => {
          console.log(err)
        })
      },
      prevPages(){
          if (this.currentPage === 1) {
            this.currentPage = 1;
        } else {
            this.currentPage -= 1;
        }
         axios.get(`http://localhost:8000/api/v1/library/?page=${this.currentPage}`)
         .then((res)=> {
          this.books = res.data.result[3]
          this.totalPage = res.data.result[0]
         })
         .catch(err => {
          console.log(err)
        })
      }
    },
   data(){
       return {
          books: [

          ],
          container:null,
          currentPage: 1,
          totalPage: [],
          url:'http://localhost:8000/api/v1/library/?page='
      }
   },
   mounted(){
      axios.get(`http://localhost:8000/api/v1/library/?page=${this.currentPage}`)
      .then((res)=> {
          this.books = res.data.result[3]
          this.totalPage = res.data.result[0]
      })
      .catch(err => {
          console.log(err)
      })
  }
}
</script>

<style scoped>
    .card-list {
        font-family: 'Airbnb Cereal App';
        box-sizing: border-box;
        width: 1350px;
        height: 100%;
        display: flex;
        margin-top: 60px;
        padding-bottom: 80px;
        justify-content:start;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .gambar-1:hover{
        transform: scale(1.05);
        transition: .6s;
    }
    .card-list .p1 {
        font-size: 25px;
        font-family: 'Airbnb Cereal App';
    }
    .gambar-1 {
        width: 280px; 
        height: 290px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        margin-left: 25px;
        border-radius: 12px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.25);
        margin-right: 30px;
        margin-top: 40px;
        overflow: hidden;
    }

    .gambar-1 img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        box-sizing: border-box;
    }
    .gambar-1 h2 {
        text-align: center;
        margin-bottom: 15px;
        width: 250px;
        height: 45px;
        overflow: hidden;
        margin-top: 8px;
        margin-left: 10px;
        font-size: 18px;
    }
    .gambar-1 h2 a {
        text-decoration: none;
        color: black;
    }
    .gambar-1 p {
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .coba{
        background-color: #4834d4;
    }
</style>