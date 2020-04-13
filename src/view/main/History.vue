<template>
    <div>
        <div>
            <router-link to="/" href="#"><img src="../../assets/img/detail/Arrow.png" alt="" class="back"></router-link>
        </div>
        <div class="tabel">
            <h1>Histroy Peminjaman Buku</h1>
            <div class="table-responsive">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">ID Loan</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tittle Book</th>
                    <th scope="col">Tanggal Pinjam</th>
                    <th scope="col">Tanggal Kembali</th>
                    <th scope="col">Status</th>
                    <th scope="col">Denda</th>
                    <th colspan="2" class="action" >Action</th>
                    </tr>
                </thead>
                <tbody v-for="cart in loans" :key="cart.id_loan">
                    <tr>
                    <th scope="row">{{cart.id_loan}}</th>
                    <td>{{cart.fullname}}</td>
                    <td>{{cart.book_title}}</td>
                    <td>{{cart.loan_date}}</td>
                    <td>{{cart.expired_date}}</td>
                    <td>{{cart.status}}</td>
                    <td>{{cart.forfeit}}</td>
                    <td v-if="role=='admin'"><button class="btn btn-danger">Delete</button></td>
                    <td><button class="btn btn-primary">Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'History',
    data(){
        return {
            loans: [],
            user:[],
            role: null
        }
    },
    methods: {
        getAllCart(){
            axios.get(`http://localhost:8000/borrowbooks/${localStorage.idUser}`)
            .then((res)=> {
                this.loans = res.data.result
            })
        },
        getUserDetail(){
            axios.get(`http://localhost:8000/user/${localStorage.idUser}`)
        .then(res => {
            this.user = res.data.result
            this.role = this.user[0].type
        })
        .catch(err=> {
            console.log(err)
        })
        }
    },
    mounted(){
        this.getAllCart();
        this.getUserDetail()
    }
}
</script>

<style scoped>
    .tabel {
        margin-top: 120px;
        padding: 50px;
        box-sizing: border-box;
    }
     h1{
        text-align: center;
        margin-bottom: 40px;
    }
    .back{
        /* background-color: b */
        width: 50px;
        height: 50px;
        margin-top: 20px;
        margin-left: 20px;
    }
    .action{
        text-align: center;
    }
    .btn-primary{
        width: 85px;
    }
</style>