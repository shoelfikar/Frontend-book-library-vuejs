<template>
    <div>
        <div class="container-1">
            <Header />
            <Sidebar />
            
            <div class="menu">
                <Carousel />
                <CardList />
            </div>
        </div>
            
    </div>
</template>

<script>
    // import axios from 'axios'
    import Header from '../../components/module/Header'
    import Sidebar from '../../components/module/sidebar'
    import Carousel from '../../components/module/Carousel'
    import CardList from '../../components/module/CardList'
export default {
    data(){
        return {
            myBooks: [],
            currentPage: 1,
            totalPage: [],
            offset: null,
            limit: 10,
            
        }
    },
    // mounted(){
    //   axios.get('http://localhost:8000/library/')
    //   .then((res)=> {
    //       this.myBooks = res.data
    //       this.totalPage = Math.ceil(this.myBooks.result.length / this.limit)
    //   })
    //   .catch(err => {
    //       console.log(err)
    // })
//   },
    components: {
        Header,
        Sidebar,
        Carousel,
        CardList,
    },
    methods: {
        pagination(){

        }
    }

}
</script>

<style scoped>
    @font-face {
    font-family: 'Airbnb Cereal App';
    src: url('../../assets/font/Airbnb-Cereal-App/AirbnbCerealMedium.woff'); 
    }
    *{
        /* margin: 0;
        padding: 0; */
        font-family: 'Airbnb Cereal App';
    }
    .container-1{
        width: 100%;
        height: 657px;
        display: flex;
    }
    .menu{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
</style>