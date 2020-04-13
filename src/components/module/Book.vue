<template>
    <div>
        <div class="book">
            <img :src="dataBook.image" alt="">
        </div>
        <div class="detail">
            <a href="#">{{dataBook.name_category}}</a>
            <h1>{{dataBook.book_title}}</h1>
            <div v-if="dataBook.book_status ===1">
                <span class="span">Available</span>
            </div>
            <div v-else>
                <span class="span-1">Not Available</span>
            </div>
            <p>{{dataBook.author}}</p>
            <p class="description">{{dataBook.description}}</p>
        </div>
        <div class="borrow">
            <!-- <button class="btn btn-warning" @click="borrowBook" >Borrow</button> -->
            <a href="#popup-pinjam" @click="borrowBook" v-if="dataBook.book_status===1">Borrow</a>
        </div>
        <div class="container-close" id="popup-pinjam">
            <div class="close-form">
                <a href=""><img src="../../assets/img/detail/close.png" alt=""></a>
                <!-- <img src="../../assets/img/detail/checked.png" alt="" class="checked"> -->
                <h2>Buku Berhasil Dipinjam!</h2>
                <div class="tombol">
                    <router-link to="/history" class="btn btn-success" @click="pinjam">Yes</router-link>
                  <!-- <a href="#"> <button class="btn btn-secondary">No</button></a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Book',
    props: ["dataBook"],
    data(){
        return {
            id_user: '',
            book_id: ''
        }
        
    },
    methods: {
        borrowBook() {
            axios.post('http://localhost:8000/borrowbooks/borrow', {
                id_user: this.userData,
                book_id: this.dataBook.book_id
            })
            .then((res)=> {
                res.data
            })
            .catch((err)=> {
                console.log(err)
            })
        },
        pinjam(){
            this.$route.go('/history')
        }
    },
    created(){
        axios.get(`http://localhost:8000/user/${localStorage.idUser}`)
        .then((res)=> {
            this.userData = res.data.result[0].id_user
        })
        .catch((err)=> {
            console.log(err)
        })
    }
     
}
</script>

<style scoped>
    .book{
        display: flex;
        align-items: flex-end;
        margin-left: 80%;
        margin-top: -180px;
    }
    .book img{
        width: 250px;
        height: 320px;
    }
    .detail{
        margin-left: 20px;
        margin-top: -100px;
    }
    .detail h1{
        width: 800px;
    }
    .detail a{
         width: 170px;
        height: 40px;
        border: 2px solid #FBCC38;
        display: inline-block;
        text-decoration: none;
        font-size: 17px;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        background-color:#FBCC38 ;
        color: white;
        border-radius: 20px;
        margin-bottom: 10px;
    }
    .description{
        width: 740px;
        text-align: justify;
    }
    .borrow a{
        text-decoration: none;
        color: #ffff;
        width: 250px;
        height: 54px;
        border: 2px solid #FBCC38;
        display: block;
        border-radius: 5px;
        text-decoration: none;
        background-color: #FBCC38;
        text-align: center;
        line-height: 54px;
        font-size: 30px;
        margin-top: -90px;
        margin-left: 80%;
        font-family: 'Airbnb Cereal App';
    }
    .span{
        font-size: 25px;
        /* position: absolute; */
        /* top: 70px; */
        /* left: 630px; */
        color: #99D815;
    }
    .span-1{
        font-size: 25px;
        /* position: absolute; */
        /* top: 70px; */
        /* left: 630px; */
        color: rgb(255, 19, 19);
    }
    /* popup */

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
            .tombol .btn{
                margin-top: 30px;
               margin-left: 170px;
            }
            .tombol .btn{
                width: 100px;
                margin-right: 30px;
            }
</style>