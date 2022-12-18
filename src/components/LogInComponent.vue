<script>
import { signInUser } from '../models/firebaseModel.js';


export default {
    name: 'signInUser',
    methods: {
        signInUser
    }
}

</script>


<template>
    <h1>Log In</h1>
    <form>
        <label for="email">Email:</label><br>
        <input v-model="email" type="email" id="email" name="email"><br>
        <label for="password">Password:</label><br>
        <input v-model="password" type="password" id="password" name="password"><br><br>
        <router-link to="/home">
            <input v-on:click.native="signInUser(this.email, this.password)" type="submit" value="Log In!">
        </router-link>
    </form>

</template>
