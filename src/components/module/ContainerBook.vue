<template>
    <div>
        <div class="cover" :style="img">
            <div class="book-container">
                <div class="back">
                   <router-link to="/" href="#"><img src="../../assets/img/detail/Arrow.png" alt=""></router-link> 
                </div>
                <div>
                    <div class="admin" v-if="this.type == 'admin'">
                        <a href="#popup-box" data-toggle="modal" data-target="#popup-box">Edit</a>
                        <a href="#popup-hapus">Delete</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div id="popup-box" class="popup-form">
            <div class="form">
                <h1>Edit Data</h1>
                <a href="#" class="close"><img src="../../assets/img/detail/close.png" alt=""></a>
                <form action="">
                    <label for="" class="l1">Url Image</label>
                    <input type="file" id="image" v-on:change="upload">
                    <label for="" class="l2">Tittle</label>
                    <input type="text">
                    <label for="" class="l3">Description</label>
                    <textarea name="" id="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus.</textarea>
                </form>
                <a href="#" class="simpan">Save</a>
            </div> 
        </div> -->
        <!-- popup delete -->
        <div class="container-close" id="popup-hapus">
            <div class="close-form">
                <router-link to="/" href=""><img src="../../assets/img/detail/close.png" alt=""></router-link>
                <!-- <img src="../../assets/img/detail/checked.png" alt="" class="checked"> -->
                <h2>Yakin Ingin Menghapus Data ?</h2>
                <div class="tombol">
                    <button class="btn btn-danger" @click="deleteBook">Yes</button>
                  <a href="#"> <button class="btn btn-secondary">No</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CoverBook',
    props: ["cover"],
    data(){
        return{
            type: null,
            user: null,
        }
    },
    mounted() {
        const sampul = document.querySelector('.cover');
        sampul.style.backgroundImage = `url("${this.cover}")`
    },
    methods:{
        deleteBook(){
            axios.delete(`http://localhost:8000/api/v1/library/${this.$route.params.idBook}`)
            .then((res)=> {
                res.data
                this.$router.push('/')
            })
            .catch(err => {
                console.log(err)
            })
        },
    },
    created(){
      axios.get(`http://localhost:8000/api/v1/user/${localStorage.idUser}`)
      .then(res => {
          this.type = res.data.result[0].type
      })
      .catch(err=> {
          console.log(err)
      })
  }
}
</script>

<style scoped>
    .cover{
            width: 100%;
            height: 454px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    .book-container{
        display: flex;
        justify-content: space-between;
    }
    .admin{
        margin-right: 20px;
    }
    .admin a{
        display: inline-block;
        font-size: 30px;
        margin-right: 15px;
        text-decoration: none;
        color: #fff;
    }
    .admin a:hover{
        color: #95afc0;
    }
    .back{
        width: 60px;
        height: 60px;
        background-color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-top: 5px;
    }
    .back a img{
        /* display: inline-block; */
        width: 40px;
        height: 35px;
    }
    /* popup modal */
    .popup-form {
            position: fixed;
            overflow: hidden;
            width: 0;
            height: 0;
            top: 0;
            left: 0;
            padding-top: 80px;
            transition: .5s ease-in;
            background-color: rgba(0, 0, 0 , 0);
            font-family: 'Airbnb Cereal App';
        }
        .popup-form a {
            display: block;
            margin-left: 350px;
            margin-bottom: 20px;
        }

        .popup-form input {
            display: block;
            margin: 20px auto;
        }

        .popup-form:target {
            width: auto;
            height: auto;
            right: 0;
            bottom: 0;
            background-color:rgba(196, 196, 196, 0.4);
        }
        .popup-form:target .form {
            background-color: #fff;
            opacity: 1;
        }
        .form {
            width: 800px;
            height: 500px;
            border: 5px solid #fff;
            margin:  auto;
            border-radius: 8px;
            box-sizing: border-box;
            background-color: #E5E5E5;
            position: relative;
            font-family: 'Airbnb Cereal App'; 
        }
        .form [type="text"] {
            width: 500px;
            height: 40px;
            border-radius: 10px;
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.5);
            margin-top: 20px;
            margin-left: 200px;
            font-family: 'Airbnb Cereal App';
            font-size: 20px;
            color: #C8BABA;
        }
        .form textarea {
            height: 100px;
            width: 500px;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.5);
            margin-left: 200px;
            margin-bottom: 30px;
            font-family: 'Airbnb Cereal App';
            font-size: 20px;
            color: #C8BABA;
        }
        .form label {
            position: absolute;
            display: inline-block;
            left: 20px;
        }
        .form .l1 {
            top: 120px;
        }
        .form .l2 {
            top: 200px;
        }
        .form .l3 {
            top: 300px;
        }
        .form h1 {
            margin-top: 20px;
            margin-left: 20px;
            margin-bottom: 50px;
            font-size: 25px;
        }
        .form .simpan {
            width: 150px;
            height: 50px;
            text-decoration: none;
            font-size: 35px;
            display: block;
            border: 2px solid #F4CF5D;
            text-align: center;
            line-height: 50px;
            border-radius: 10px;
            background-color: #F4CF5D;
            color: white;
            margin-left: 570px;
        }
        .close img {
            width: 25px;
            height: 25px;
            position: absolute;
            margin-left: -50px;
            margin-top: -80px;
        }
        /* popup delete */
        .container-close {
            position: fixed;
            overflow: hidden;
            width: 0;
            height: 0;
            top: 0;
            left: 0;
            padding-top: 80px;
            transition: .5s ease-in;
            background-color: rgba(0, 0, 0 , 0);
            font-family: 'Airbnb Cereal App';
            }
            .close-form {
            width: 450px;
            height: 300px;
            margin:  auto;
            border-radius: 10px;
            box-sizing: border-box;
            background-color: #fff;
            margin: 30px auto;
            box-sizing: border-box;
            font-family: 'Airbnb Cereal App';
            }
            .container-close:target {
            width: auto;
            height: auto;
            bottom: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color:rgba(196, 196, 196, 0.4);
            opacity: .9;
            }
            .close-form a img {
            display: block;
            width: 30px;
            height: 30px;
            margin-left: 410px;
            margin-top: 20px;
            padding-top: 10px;
            }
            .close-form .checked {
            display: block;
            margin: auto;
            margin-top: 70px;
            margin-bottom: 10px;
            width: 70px;
            height: 70px;
            }
            .close-form h2 {
            margin-top: 90px;
            text-align: center;
            font-size: 20px;
            }
            .close-form h2 span {
            font-weight: 900;
            }
            .tombol{
                margin-top: 20px;
               margin-left: 120px;
            }
            .tombol button{
                width: 100px;
                margin-right: 30px;
            }
</style>