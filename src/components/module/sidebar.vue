<template>
    <div>
       <div class="sidebar on">
           <div class="icon-side">
                <a href="#" @click="coba" class="klik active"><img src="../../assets/img/home/menu.png" alt=""></a> 
            </div>
            <div class="user">
                <img :src="save.result[0].photo" alt="">
                <h1>{{save.result[0].fullname}}</h1>
            </div>
            <div class="main-menu">
                <ul>
                    <li><a href="#">Explore</a></li>
                   <router-link to="/history"> <li><a href="#">History</a></li></router-link>
                    <div v-if="save.result[0].type == 'admin'">
                        <li><a href="#exampleModal" data-toggle="modal" data-target="#exampleModal">Add book*</a></li>
                    </div>
                    <li><a href="#" @click="logout" >Log Out</a></li>
                </ul>
            </div>
        </div>
        <div>
            <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Book</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form enctype="multipart/form-data" @submit="addBook" >
                    <div class="form-group">
                        <label for="isbn" class="col-form-label">Isbn:</label>
                        <input type="text" class="form-control" id="isbn" name="isbn" v-model="isbn">
                    </div>
                    <div class="form-group">
                        <label for="title" class="col-form-label">Book Tittle:</label>
                        <input type="text" class="form-control" id="title" name="title" v-model="book_title">
                    </div>
                    <div class="form-group">
                        <label for="author" class="col-form-label">Author :</label>
                        <input type="text" class="form-control" id="author" name="author" v-model="author">
                    </div>
                    <div class="form-group">
                        <label for="description" class="col-form-label">Description :</label>
                        <textarea class="form-control" id="description" name="description" v-model="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="image" class="col-form-label">Image:</label>
                        <input type="file" ref="file" class="form-control" id="image">
                    </div>
                    <div class="form-group">
                        <label for="status" class="col-form-label">Book Status:</label>
                        <input type="text" class="form-control" id="status" name="status" v-model="book_status">
                    </div>
                    <div class="form-group">
                        <label for="publisher" class="col-form-label">Id Category:</label>
                        <input type="text" class="form-control" id="category" name="category" v-model="id_category">
                    </div>
                    <div class="form-group">
                        <label for="publisher" class="col-form-label">Publisher:</label>
                        <input type="text" class="form-control" id="publisher" name="publisher" v-model="publisher">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Add Book</button>
                    </div>
                </form>
                </div>
                
            
        </div>
        </div> 
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Sidebar',
    data(){
        return {
            isbn: '',
            book_title: '',
            author: '',
            description: '',
            // image: '',
            book_status: '',
            id_category: '',
            publisher: '',
            save: {},
        }
    },
     methods: {
        coba(){
        document.querySelector('.sidebar').classList.toggle('on')
    },
    addBook(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('isbn', this.isbn)
        formData.append('book_title', this.book_title)
        formData.append('author', this.author)
        formData.append('description', this.description)
        formData.append('image', this.$refs.file.files[0])
        formData.append('book_status', this.book_status)
        formData.append('id_category', this.id_category)
        formData.append('publisher',this.publisher)
        axios.post('http://localhost:8000/library/',formData )
        
        .then((res)=> {
            res.data
            // this.$router.push(`detail/${res.data.result.insertId}`)
        })
        .catch((err)=> {
            console.log(err)
        })
            this.isbn= '';
            this.book_title= '';
            this.author= '';
            this.description= '';
            this.image= '';
            this.book_status= '';
            this.id_category= '';
            this.publisher= '';
       
    },
    logout(){
        delete localStorage.password
        delete localStorage.idUser
        delete localStorage.type
        delete localStorage.token
        this.$router.go('/')
    },
   
  },
  created(){
      axios.get(`http://localhost:8000/user/${localStorage.idUser}`)
      .then(res => {
          this.save = res.data
      })
      .catch(err=> {
          console.log(err)
      })
  }
}
</script>

<style scoped>
    .sidebar{
            background-color: #FFFFFF;
            position: fixed;
            width: 250px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: 2s;
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
            z-index: 99;
        }
        .on{
            margin-left: -250px;
        }
        .user{
            margin-top: 100px;
        }
        .user img{
            width: 75%;
            margin-bottom: 20px;
            margin-left: 25px;
        }
        .user h1{
            text-align: center;
            font-size: 20px;
        }
        .icon-side a{
            transition: 2s;
            margin-left: 300px;
        }
        .icon-side a img{
            width: 30px;
            margin-top: 20px;
        }
        .main-menu{
            margin-top: 50px;
        }
        .main-menu ul li a{
            display: inline-block;
            text-decoration: none;
            font-size: 30px;
            color: black;
        }
        .main-menu ul li{
            margin-right: 25px;
            margin-bottom:10px;
            list-style: none;
        }
</style>