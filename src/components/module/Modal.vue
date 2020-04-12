<template>
    <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Book</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="">
                <div class="form-group">
                    <label for="isbn" class="col-form-label">Isbn:</label>
                    <input type="text" class="form-control" id="isbn">
                </div>
                <div class="form-group">
                    <label for="judul" class="col-form-label">Message:</label>
                    <input type="text" class="form-control" id="judul">
                </div>
                <div class="form-group">
                    <label for="isbn" class="col-form-label">Isbn:</label>
                    <input type="text" class="form-control" id="isbn">
                </div>
                <div class="form-group">
                    <label for="judul" class="col-form-label">Message:</label>
                    <input type="text" class="form-control" id="judul">
                </div>
                <div class="form-group">
                    <label for="isbn" class="col-form-label">Isbn:</label>
                    <input type="text" class="form-control" id="isbn">
                </div>
                <div class="form-group">
                    <label for="judul" class="col-form-label">Message:</label>
                    <input type="text" class="form-control" id="judul" name="judul">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
                </form>
            </div>
            
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
   name: 'Modal' 
}
</script>

<style scoped>

</style>