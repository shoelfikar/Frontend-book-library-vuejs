<template>
    <div>
        <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img :src="buku.result[0].image" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="buku.result[1].image" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="buku.result[2].image" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        <!-- <div class="card">
                <div class="card-1">
                  <h2>Dilan 1990</h2>
                  <p>Pidi Baiq</p>
                </div>
                <div class="card-1">
                  <h2>Ubur-ubur Lembur</h2>
                  <p>Raditya Dika</p>
                </div>
                <div class="card-1">
                  <h2>Laskar Pelangi</h2>
                  <p>Andrea Hirata</p>
                </div>
            </div> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Carousel',
    data(){
        return {
            buku: []
        }
    },
    methods: {
        getAllData(){
             axios.get(`http://localhost:8000/api/v1/library/`)
            .then((res)=> {
               this.buku = res.data
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted(){
        this.getAllData();
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        margin-top: 1000px;
        border: none;
    }
    .card-1 {
        width: 400px;
        height: 200px;
        color: #fff;
        background-image: url('../../assets/img/home/covernya.png');
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 35px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: 15px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .card-1 h2 {
        font-size: 35px;
        font-family: 'Airbnb Cereal App';
        margin-left: 10px;
    }
    .card-1 p {
        font-family: 'Airbnb Cereal App';
        font-size: 17px;
        margin-left: 10px;
        margin-bottom: 5px;
    }
    .carousel-inner{
        margin-top: 120px;
    }
    .carousel-item{
        width: 900px;
        height: 400px;
    }
</style>