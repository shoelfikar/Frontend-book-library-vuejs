<template>
  <div>
      <div v-if="!headside.result[0]">
        <div class="header">
                <div class="login">
                    <a href="#">Login</a>
                </div>
            <div class="content" >
                <select name="" id="">
                    <option value="category">Komik</option>
                    <option value="category">Novel</option>
                    <option value="category">Buku Masakan</option>
                    <option value="category">Sejarah</option>
                </select>
                <select name="" id="">
                        <option value="category">All Time</option>
                    </select>
            </div>
            <div class="search">
                <img src="../../assets/img/home/search.png" alt="">
                <input type="text" placeholder="Search Book">
            </div>
            <div class="logo">
                <router-link to="/login"><img src="../../assets/img/home/bookshelf.png" alt=""></router-link>
                <h1>Library</h1>
            </div>
            </div>
        </div>
        <div v-else>
            <div class="header">
                <!-- <div class="login" >
                    <a href="#">Login</a>
                </div> -->
                <div class="content" >
                    <select name="" id="">
                        <option value="category">Komik</option>
                        <option value="category">Novel</option>
                        <option value="category">Buku Masakan</option>
                        <option value="category">Sejarah</option>
                    </select>
                    <select name="" id="">
                            <option value="category">All Time</option>
                        </select>
                </div>
                <div class="search">
                    <img src="../../assets/img/home/search.png" alt="">
                    <input type="text" placeholder="Search Book">
                </div>
                <div class="logo">
                    <router-link to="/login"><img src="../../assets/img/home/bookshelf.png" alt=""></router-link>
                    <h1>Library</h1>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  data(){
      return {
          headside:[]
      }
  },
  created(){
      axios.get(`http://localhost:8000/user/${localStorage.idUser}`)
      .then(res => {
          this.headside = res.data
      })
      .catch(err=> {
          console.log(err)
      })
  },
  methods: {
      searchBooks() {
      axios
        .get(`http://localhost:8000/library/?search=${this.search}`)
        .then((res) => {
          this.books = res.data.books.rows;
          // console.log(res.data.books.rows);
        //   const slider = document.querySelector('.slider');
        //   const book = document.querySelector('.book');
        //   if (this.search) {
        //     slider.style.display = 'none';
        //     book.style.paddingTop = '100px';
        //   } else {
        //     slider.style.display = 'block';
        //     book.style.paddingTop = '50px';
        //   }
        })
        .catch(() => {
          // console.log('Error when load data!');
        });
      }
  }
}
</script>

<style scoped>
        .header{
            width: 100%;
            height: 80px;
            position: fixed;
            background: #FFFFFF;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content:flex-end;
            z-index: 99;
        }
        .login a{
            display: inline-block;
            text-align: center;
            text-decoration: none;
            color: #fff;
            font-size: 30px;
            width: 180px;
            height: 50px;
            line-height: 50px;
            font-weight: 900;
            letter-spacing: 10px;
            margin-top: 15px;
            padding-left: 9px;
            border-radius: 25px;
            background-color: #706fd3;
        }
        .content{
            margin-top: 25px;
            margin-right: 5%;
            margin-left: 60px;
        }
        .content select {
            margin-right: 60px;
            font-size: 17px;
            border: none;
        }
        .search{
            margin-top: 15px;
            position: relative;
            margin-right: 15%;
        }
        .search [type="text"]{
            width: 340px;
            height: 43px;
            border-radius: 20px;
            font-size: 17px;
            padding-left: 60px;
            border: 1px solid black;
        }
        .search img {
            width: 30px;
            position: absolute;
            left: 15px;
            top: 8px;
        }
        .logo{
            display: flex;
            margin-right: 20px;
        }
        .logo img{
            width: 55px;
            height: 55px;
            margin-right: 10px;
        }
</style>