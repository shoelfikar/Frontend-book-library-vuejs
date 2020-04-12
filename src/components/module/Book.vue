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
            <a href="#">Borrow</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Book',
    props: ["dataBook"]
     
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
</style>