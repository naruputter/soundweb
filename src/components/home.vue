<template>
  <v-container>
    <br>
    <v-row>
      <v-col order="last">
        <v-card color="purple" dark height="150" max-width="1000">
          <v-card-title class="text-h5"> Example </v-card-title>

          <v-card-subtitle>Listen music demo </v-card-subtitle>

          <v-card-actions>
            
            <v-btn text to="/ex"> Listen Now </v-btn>
            
          </v-card-actions>
        </v-card>
      </v-col>
      
      <v-col>
        <v-card color="pink" dark height="150" max-width="1000">
          <v-card-title class="text-h5"> Produce </v-card-title>

          <v-card-subtitle
            >Choose your favorite style and start project</v-card-subtitle
          >
        </v-card>
      </v-col>
      <v-col order="first">
        <v-card color="orange" dark height="150" max-width="1000">
          <v-card-title class="text-h5"> Untimate </v-card-title>

          <v-card-subtitle>Create the best song for you</v-card-subtitle>

          <v-card-actions>
            <v-btn text> Listen Now </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <br>
    <br>

    
   <v-carousel  cycle 
    height="550"
    hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

    <v-row class="text-center">
      <v-col cols="12">
        <br />
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="purple" dark v-bind="attrs" v-on="on">
              Open Dialog
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">
              Use Google's location service?
            </v-card-title>
            <v-card-text
              >Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are
              running.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    dialog: false,
   items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
  }),
};
</script>
<style scoped>
/* .v-card{
    display : inline-block;
  } */
</style>