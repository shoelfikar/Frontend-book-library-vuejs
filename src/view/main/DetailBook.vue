<template>
    <div>
        <div class="container-1">
            <CoverBook v-bind:cover="bookValue.result[0].image"/>
            <Book v-bind:dataBook="bookValue.result[0]"/>
        </div>
        <!-- <div id="popup-box" class="popup-form"> -->
        <div class="modal fade " id="popup-box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Book</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit="updateBook">
                            <div class="form-group">
                                <label for="isbn" class="col-form-label">Isbn:</label>
                                <input type="text" class="form-control" id="isbn" name="isbn" v-model="bookValue.result[0].isbn">
                            </div>
                            <div class="form-group">
                                <label for="title" class="col-form-label">Book Tittle:</label>
                                <input type="text" class="form-control" id="title" name="title" v-model="bookValue.result[0].book_title">
                            </div>
                           <div class="form-group">
                                <label for="author" class="col-form-label">Author :</label>
                                <input type="text" class="form-control" id="author" name="author" v-model="bookValue.result[0].author">
                            </div>
                           <div class="form-group">
                                <label for="description" class="col-form-label">Description :</label>
                                <textarea class="form-control" id="description" name="description" v-model="bookValue.result[0].description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="status" class="col-form-label">Book Status:</label>
                                <input type="text" class="form-control" id="status" name="status" v-model="bookValue.result[0].book_status">
                            </div>
                            <div class="form-group">
                                <label for="title" class="col-form-label">Id Category:</label>
                                <input type="text" class="form-control" id="title" name="title" v-model="bookValue.result[0].id_category">
                            </div>
                            <div class="form-group">
                                <label for="title" class="col-form-label">Publisher:</label>
                                <input type="text" class="form-control" id="title" name="title" v-model="bookValue.result[0].publisher">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Update Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CoverBook from '../../components/module/ContainerBook'
import Book from '../../components/module/Book'
export default {
    name: 'DetailBook',
    components: {
        CoverBook,
        Book,
    },
    data() {
        return{
            bookValue: {}
        }
    },
    props:["idBook"],
    mounted() {
        axios.get(`http://localhost:8000/library/${this.idBook}`).then(res=> {
            this.bookValue = res.data;
        })
    },
    methods: {
        updateBook(){
            axios.patch(`http://localhost:8000/library/${this.$route.params.idBook}`,{
                isbn: this.bookValue.result[0].isbn,
                book_title: this.bookValue.result[0].book_title,
                author: this.bookValue.result[0].author,
                description: this.bookValue.result[0].description,
                book_status: this.bookValue.result[0].book_status,
                id_category: this.bookValue.result[0].id_category,
                publisher: this.bookValue.result[0].publisher,
            })
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
        
            }
    }
}
</script>

<style scoped>
    @font-face {
    font-family: 'Airbnb Cereal App';
    src: url('../../assets/font/Airbnb-Cereal-App/AirbnbCerealMedium.woff'); 
    }
     /* *{
            margin: 0;
            padding: 0;
            font-family: 'Airbnb Cereal App';
        } */
        .container-1{
            width: 100%;
            display: flex;
            flex-direction: column;
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
            width: 900px;
            height: 900px;
            border: 5px solid #fff;
            margin:  auto;
            padding: 20px;
            border-radius: 8px;
            box-sizing: border-box;
            background-color: #E5E5E5;
            position: relative;
            font-family: 'Airbnb Cereal App'; 
        }
       /* .modal-content{
          margin-top: 100px;
          margin-left: 200px;
       } */
</style>