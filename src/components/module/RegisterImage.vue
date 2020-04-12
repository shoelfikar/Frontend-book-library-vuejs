<template>
    <div>
        <div class="col-lg-7">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Book is a window <br><span>to the world</span></h1>
                <p class="lead">Photo by Mark Pan4ratte on Unsplash</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        
    }
}
</script>

<style scoped>
        /* *{
            margin: 0;
            padding: 0;
        } */
        .jumbotron{
            height: 100vh;
            background-image: url('../../assets/img/login/login.png');
            background-repeat: no-repeat;
            background-color: #ffff;
            padding: 0;
            margin: 0;
        }
        .display-4 {
            color: #fff;
            font-weight: bold;
            padding-top: 50px;
        }
        .lead{
            color: #fff;
            font-weight: bold;
            margin-top: 490px;
        }
</style>