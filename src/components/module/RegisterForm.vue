<template>
    <div>
        <div class="col-lg-4 ml-5">
                <div class="container">
                    <img src="login/bookshelf.png" alt="" class="image">
                    <h1>Register</h1>
                    <form>
                        <div class="form-group mb-0">
                          <label for="fullname">Fullname</label>
                          <input type="email" class="form-control form-control-sm" id="fullname" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-0">
                            <label for="idcard">Id Card</label>
                            <input type="email" class="form-control form-control-sm" id="idcard" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-0">
                            <label for="phone">Phone Number</label>
                            <input type="email" class="form-control form-control-sm" id="phone" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-0">
                            <label for="address">Address</label>
                            <input type="email" class="form-control form-control-sm" id="address" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-0">
                            <label for="username">Username</label>
                            <input type="email" class="form-control form-control-sm" id="username" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-0">
                            <label for="email">Email</label>
                            <input type="email" class="form-control form-control-sm" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-3">
                            <label for="password">Password</label>
                            <input type="email" class="form-control form-control-sm" id="password" aria-describedby="emailHelp">
                        </div>
                        <button type="submit" class="btn btn-outline-dark ">Sign Up</button>
                        <button type="submit" class="btn btn-outline-dark ">Sign In</button>
                      </form>
                </div>
              </div>
    </div>
</template>

<script>
export default {
    name: 'RegistrasiForm'
}
</script>

<style scoped>

</style>