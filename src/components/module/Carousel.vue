<template>
    <div>
        <div class="card">
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
            </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style scoped>
    .card{
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
</style>