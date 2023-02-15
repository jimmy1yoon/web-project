<template>
    <v-app id="app">
      <v-main>
        <v-container
          style="position: relative; top: 20%; margin-left: 15%"
          class="text-xs-center"
        >
          <v-layout row wrap class="text-xs-center">
            <v-flex>
              <v-card flat class="mx-auto" max-width="800">
                <v-row style="margin-top: 60px">
                  <v-col>
                    <v-form style="width: 400px; height: 300px">
                      <div class="mx-3">
                        <v-icon color="black" size="30px">ID</v-icon>
                        <div class="mx-1">
                          <v-text-field
                            placeholder="아이디를 입력하세요."
                            v-model="userId"
                            required
                          ></v-text-field>
                        </div>
                      </div>
                      <div class="mx-3">
                        <v-icon color="black" size="30px">PassWord</v-icon>
                        <div class="mx-1">
                          <v-text-field
                            placeholder="비밀번호를 입력하세요."
                            type="password"
                            v-model="userPassword"
                            required
                          ></v-text-field>
                        </div>
                      </div>
  
                      <v-card-actions>
                        <v-btn
                          color="#2c4f91"
                          dark
                          large
                          block
                          @click="loginSubmit"
                          >Login</v-btn
                        >
                      </v-card-actions>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </template>
  

  <script>

  import axios from '@/axios'
  import router from '@/router'
  import userStore from '@/store/userStore';

  export default {
    data() {
      return {
        userId: null,
        userPassword: null,
      };
    },
    methods: {
      loginSubmit() {
        let saveData = {};
        saveData.userId = this.userId;
        saveData.userPassword = this.userPassword;

        axios.Post('/signin/',saveData)
        .then((res) => {
          if (res.status === 200) {
              if (res.data.token){
                userStore.commit("login", res.data);
                router.push("/main");
              }
              else alert("아이디 및 비밀번호를 확인하세요")
          }
        })
      },
    },
  };

  </script>