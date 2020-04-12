<template>
    <div>
        <div class="container-fluid">
            <div class="row">
              <div class="col-lg-7">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                      <h1 class="display-4">Book is a window <br><span>to the world</span></h1>
                      <p class="lead">Photo by Mark Pan4ratte on Unsplash</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 ml-5">
                <div class="container">
                    <img src="../../assets/img/login/bookshelf.png" alt="" class="image">
                    <h1>Login</h1>
                    <p>Welcome Back, Please Login <br>
                        to your account</p>
                    <form @submit="login">
                        <div class="form-group mb-2">
                            <label for="email">Email</label>
                            <input type="email" class="form-control form-control-lg pl-2" id="email" aria-describedby="emailHelp" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control  form-control-lg pl-2" id="password" aria-describedby="emailHelp" v-model="password">
                        </div>
                        <div class="check">
                            <div>
                                <input type="checkbox">
                                <label for="">Remember me</label>
                            </div>
                            <div>
                                <a href="#">Forget Password</a>
                            </div>
                        </div>
                        <div class="alert alert-warning alert-dismissible fade" role="alert">
                            <strong>Activate Your Account First</strong> For Login
                            <button type="button" @click="failedLogin" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <button type="submit" class="btn btn-outline-dark">Login</button>
                        <router-link to='/register' type="button" class="btn btn-outline-dark">Sign Up</router-link>
                      </form>
                </div>
              </div>
            </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: '',
            error: false,
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            axios.post('http://localhost:8000/user/login',{
                email: this.email,
                password: this.password
            }).then((res)=>{
                // 
                res.data
                if(res.data.result.status === 0){
                    document.querySelector('.alert').classList.toggle('show')
                    this.$route.go('/login')
                }else{
                    localStorage.token = res.data.result.token;
                    localStorage.idUser = res.data.result.id_user;
                    localStorage.type = res.data.result.type;
                    this.error = false
                    this.$router.push('/')
            }
                // alert('login success!')
                // this.success()
            })
            .catch(()=>{
                this.loginFailed()
            })
            
        },
        failedLogin(){
            this.$router.go('/login')
        },

        success(req){
            if(!req.data.result.token){
                this.loginFailed(req);
                
            }else if(req.data.result.status === 0){
                // this.code = 2
                this.error = 'Aktivasi Email Dahulu'
            }else{
                localStorage.token = req.data.token;
                localStorage.idUser = req.data.result.id_user;
                localStorage.type = req.data.result.type;
                this.error = false
                this.$router.push('/')
            }

                
                // alert('login Success!')
                
                // this.email= '';
                // this.password= '';
        },
        loginFailed(req){
            this.error = req.data.err
            delete localStorage.password;
            delete localStorage.idUser
        },
    }
}
</script>

<style scoped>
        @font-face {
        font-family: 'Airbnb Cereal App';
        src: url('../../assets/font/Airbnb-Cereal-App/AirbnbCerealMedium.woff'); 
        }
        *{
            margin: 0;
            padding: 0;
            font-family: 'Airbnb Cereal App';
        }
        .jumbotron{
            height: 100vh;
            background-image: url('../../assets/img/login/login.png');
            background-repeat: no-repeat;
            background-color: #ffff;
            background-position: center;
            padding: 0;
            margin: 0;
        }
        .col-lg-8{
            padding: 0;
            height: 90vh;
        }
        .container .image{
            display: inline-block;
            width: 80px;
            height: 80px;
            margin-left: 85%;
        }
        .col-lg-7{
            padding: 0;
        }
        .display-4 {
            color: #fff;
            font-weight: bold;
            padding-top: 50px;
            padding-left: 30px;
        }
        .lead{
            color: #fff;
            font-weight: bold;
            margin-top: 510px;
            margin-left: 30px;
        }
        .form-group label{
            font-size: 12px;
        }
        form .btn{
            width: 130px;
            height: 40px;
            margin-right: 10px;
            line-height: 40px;
        }
        .check{
            display: flex;
            justify-content: space-between;
            margin-bottom: 80px;
        }
        .check a, .check label {
            text-decoration: none;
            font-size: 15px;
            margin-top: -10px;
        }
        .check a {
            margin-left: 50px;
            color:  #424242;
        }
        .check label {
            color:#D0CCCC;
        }
        .alert{
            height: 60px;
            line-height: 60px;
            padding-left: 15px;
            margin-bottom: 15px;
        }
        .alert .close{
            line-height: 30px;
        }
</style>