<template>
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
                   <router-link to="/"> <img src="../../assets/img/login/bookshelf.png" alt="" class="image"></router-link>
                    <h1>Register</h1>
                    <div class="alert alert-warning alert-dismissible fade" role="alert">
                            <strong>{{msg}}</strong>
                            <button type="button"  class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <form @submit="addUser">
                        <div class="form-group mb-2">
                          <label for="fullname">Fullname</label>
                          <input type="text" class="form-control pl-2" id="fullname" aria-describedby="emailHelp" v-model="fullname" :class="{'is-invalid': $v.fullname.$error}" @input="$v.$touch()">
                        </div>
                          <div class="form-group mb-2">
                            <label for="username">Username</label>
                            <input type="text" class="form-control pl-2" id="username" aria-describedby="emailHelp" v-model="username" :class="{'is-invalid': $v.username.$error}" @input="$v.$touch()">
                        </div>
                        <div class="form-group mb-2">
                            <label for="email">Email</label>
                            <input type="text" class="form-control pl-2" id="email" aria-describedby="emailHelp" v-model="email" :class="{'is-invalid': $v.email.$error}" @input="$v.$touch()">
                        </div>
                        <div class="form-group mb-2">
                            <label for="phone_number">Phone Number</label>
                            <input type="text" class="form-control pl-2" id="phone_number" aria-describedby="emailHelp" v-model="phone_number" :class="{'is-invalid': $v.phone_number.$error}" @input="$v.$touch()">
                        </div>
                        <!-- <div class="form-group mb-2">
                            <label for="address">Address</label>
                            <input type="text" class="form-control pl-2" id="address" aria-describedby="emailHelp" v-model="address">
                        </div> -->
                        <!-- <div class="form-group mb-2">
                            <label for="id_card">Id Card</label>
                            <input type="text" class="form-control pl-2" id="id_card" aria-describedby="emailHelp" v-model="id_card">
                        </div> -->
                      
                        <div class="form-group mb-3">
                            <label for="password">Password</label>
                            <input type="password" class="form-control pl-2" id="password" aria-describedby="emailHelp" v-model="password" :class="{'is-invalid': $v.password.$error}" @input="$v.$touch()">
                        </div>
                        <button type="submit" class="btn btn-outline-dark">Sign Up</button>
                        <router-link to="/login" type="submit" class="btn btn-outline-dark">Sign In</router-link>
                      </form>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { required, minLength, maxLength, email,alpha,numeric } from 'vuelidate/lib/validators'
export default {
    name: 'FormRegister',
    data() {
        return {

                fullname: '',
                username: '',
                email: '',
                phone_number: '',
                // address: '',
                // id_card: '',
                // type: 'user',
                password: '',
                msg: ''
        }
    },
    methods: {
        addUser(e){
            e.preventDefault();
            axios.post('http://localhost:8000/user/register',{
                fullname: this.fullname,
                username: this.username,
                email: this.email,
                phone_number: this.phone_number,
                // address: this.address,
                // id_card: this.id_card,
                // type: this.type,
                password: this.password
        }).then((res)=> {
                 res.data
                 this.msg = 'Cek Your Email For Activation'
                document.querySelector('.alert').classList.toggle('show')
                //  this.$router.push('/login')
                this.fullname= '';
                this.email= '';
                this.phone_number= '';
                // this.address= ''
                // this.id_card= '';
                // this.type= 'user';
                this.username= '';
                this.password= '';
            })
            .catch((err)=>{
                console.log(err)
            })
            this.fullname= '';
            this.email= '';
            this.phone_number= '';
            // this.address= ''
            // this.id_card= '';
            this.type= 'user';
            this.username= '';
            this.password= '';
        }
    
    },
     validations: {
        email: {
            email,
            required,
            minLenght: minLength(4),
            maxLength: maxLength(50)
        },
        password: {
            required,
            minLenght: minLength(4)
        },
        username: {
            required,
            minLenght: minLength(5)
        },
        fullname: {
            alpha,
            required,
            minLenght: minLength(5)
        },
        phone_number: {
            numeric,
            required,
            minLenght: minLength(5)
        }
    }
}
</script>

<style  scoped>
        @font-face {
        font-family: 'Airbnb Cereal App';
        src: url('../../assets/font/Airbnb-Cereal-App/AirbnbCerealMedium.woff'); 
        }
        *{
            margin: 0;
            padding: 0;
            font-family:'Airbnb Cereal App' ;
        }
        .jumbotron{
            height: 100vh;
            background-image: url('../../assets/img/login/login.png');
            background-position: center;
            background-repeat: no-repeat;
            background-color: #ffff;
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
            margin-left: 94%;
        }
        .col-lg-7{
            padding: 0;
        }
        .display-4 {
            color: #fff;
            font-weight: bold;
            padding-top: 50px;
            padding-left: 40px;
        }
        .lead{
            color: #fff;
            font-weight: bold;
            margin-top: 510px;
            margin-left: 40px;
        }
        .col-lg-4 .container h1{
            margin-bottom: 15px;
            font-size: 80px;
        }
        .form-group label{
            font-size: 16px;
        }
        form .btn{
            width: 130px;
            height: 40px;
            margin-right: 10px;
            line-height: 40px;
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