<script>
import { signUpUser } from '../models/firebaseModel.js';


export default {
    name: 'SignUpComponent',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUpUser
    }
}
</script>


<template>

    <h1>Sign Up</h1>
    <form>
        <label for="email">Email:</label><br>
        <input v-model="email" type="email" id="email" name="email"><br>
        <label for="password">Password:</label><br>
        <input v-model="password" type="password" id="password" name="password"><br><br>
        <router-link to="/home">
            <input v-on:click.native="signUpUser(this.email, this.password)" type="submit" value="Sign Up!">
        </router-link>
    </form>

</template>
