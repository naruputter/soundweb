<template>
    <v-app>
        <br>
        <v-btn @click="play">test</v-btn>
    </v-app>
</template>
<script>
export default {
    methods: {
        play(){
            console.log(5555)
            var audio = new Audio('monday.mp3');
                audio.play();
                
        }
    },
}
</script>
<style>

</style>