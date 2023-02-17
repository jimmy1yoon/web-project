<template>
  <v-row>
    <v-col
      v-for="content in housedummies"
      :key="content.code"
      cols="4"
    >
      <v-card
        class="mx-auto"
        max-width="550"
      >
        <v-img
          class="align-end text-white"
          height="350"
          :src=content.imageURL
          cover
        >
        </v-img>

        <v-card-title>{{content.title}}</v-card-title>
        <v-card-subtitle class="pt-4">
          {{content.town}}
        </v-card-subtitle>

        <v-card-text>
          <div>정보</div>

          <div>{{content.description}}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange">
            Share
          </v-btn>

          <v-btn color="orange">
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

// import housedummies from '@/dummy/housedummy';
import axios from '@/axiosWrapper'
  export default {
    components: { 
    },
    async mounted() {
      const response = await axios.get('houses');
      if (response.status === 200) {
        this.housedummies = response.data;
      }
    },
    data() {
      return {
        housedummies: []
      }
    },
    methods: {
      
    }
  }

  </script>