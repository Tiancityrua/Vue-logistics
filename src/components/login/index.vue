<template>
  <div class="login-container">
    <el-form class="login-form" label-width="0px" label-position="left" :model="form" ref="form" :rules="loginrules">
        <div class="title-container">
              <h3 class="title">{{$t('login.title')}}</h3>  
              <lang-select class="set-language"></lang-select>
        </div>
        <el-form-item prop="username">
        <span class="icon-container icon-container_login">
        <i class="el-icon-edit"></i>
        </span>
        <el-input name="username" type="text" v-model="form.username" autoComplete="on" placeholder="username"/>

      </el-form-item>
        <el-form-item prop="password">
        <span class="icon-container icon-container_login">
        <i class="el-icon-edit"></i>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="Login('form')" v-model="form.password" autoComplete="on"
          placeholder="password"></el-input>
         <span class="show-pwd" @click="showPwd">
             <i class="el-icon-view"></i>
         </span>
      </el-form-item>
        <el-form-item>
        <el-button type="primary" style="width:100%;" @click.native.prevent="Login('form')">
            {{$t('login.login')}}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<style src="./index.less" lang="less"></style>

<script>
    import LangSelect from '../langselect'
    export default{
        components:{LangSelect},
        name:'login',
     data(){
            return{
                form:{
                    username:'',
                    password:''
                },
                loginrules:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'}
                    ]
                },
                pwdType:'password'
            }
        },
        methods:{
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    Login(formname){
        this.$refs[formname].validate((valid)=>{
            if(valid){
                this.$store.dispatch('Login',this.form).then(()=>{
                    this.$router.push({path:'/main'})
                }
                ).catch(()=>{   
                }
                )
            }
            else{
                return false;
            }
        }

        )
    }
    }
    }
</script>
