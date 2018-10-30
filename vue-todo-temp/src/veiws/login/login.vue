<template>
    <div class="login">
      <div>
          <div  id="showCourse">
            <h4 class="login-title">用户登录</h4>
          </div>
          <div>
            <form class="login-form" id="login-form">
              <ul class="login">
                <li class="form-group">
                  <img class="left" src="@common/image/user.png"/>
                  <input autofocus  type="text" name="username" v-model="name" placeholder="用户名">
                </li>
                <li class="form-group">
                  <img class="left" src="@common/image/password.png" alt=""/>
                  <input id="password" v-model="password"
                         :type="typeSwitch?'password':'text'"
                         name="password" placeholder="密码" value="">
                  <img :src="imgSwitch?require('@common/image/close.png'):require('@common/image/eye.png')" alt=""  class='switch' @click="switchType" />
                </li>
              </ul>
              <div class="login-btn" @click="loginSubmit">
                登录
              </div>
            </form>
            <mt-popup
              v-model="popupVisible"
              popup-transition="popup-fade"
              >
              <p>微信扫一扫</p>
            </mt-popup>
            <router-link :to="{ path: 'login'}" class="register">注册新用户</router-link>
          </div>
      </div>
    </div>
</template>

<script>
    import {getQuestion, getErrorWord, login} from '@http/api'
    import HelloWorld from '@components/HelloWorld'
    export default {
        components: {
            HelloWorld
        },
        data() {
            return {
                msgName:"",
                name:"",
                password:"",
                imgSwitch :true,
                typeSwitch:true,
                popupVisible:true
            }
        },
        created() {
//            login(this.data).then(res => {
//                console.log(res);
//            })
//            getQuestion(this.params).then(res => {
//                console.log(res);
//            })
//            getErrorWord().then(
//                res => {
//                    console.log(res)
//                },
//                error => {
//                    console.log(error)
//                }
//            )
        },
        mounted() {
            this.name=this.$route.params.name;
        },
        methods: {
            loginSubmit(){
                if(this.name==""){
                  this.$toast({
                      message:"请输入用户名",
                      position:"bottom",
                      duration:1500
                  });
                  return false
                }
                if(this.password==""){
                  this.$toast({
                    message:"请输入密码",
                    position:"bottom",
                    duration:1500
                  });
                  return false
                }
                login({"username":this.name,"password":this.password}).then(
                  res => {
                    let {status} = res;
                    if(status=="200"){
                      this.$router.push({name: 'index', params:{username: this.name}});
                    }
                  },
                  error => {
                      this.$toast({
                        message:"账号或密码错误",
                        position:"bottom",
                        duration:1500
                      });
                  }
                )
            },
            switchType(){
                this.imgSwitch?this.imgSwitch=false:this.imgSwitch=true;
                this.typeSwitch?this.typeSwitch=false:this.typeSwitch=true;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "login.styl";
</style>
