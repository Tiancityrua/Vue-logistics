<template>
  <div  class="app-container">
      <el-form ref="form"  :model="form" label-width="125px" inline :rules="rules" size="large" >
        <el-form-item  label="date" prop="date">
            <el-date-picker
                        v-model="form.date"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
        </el-form-item>
        <el-form-item  label="hawb" prop="hawb">
        <el-input type="text" v-model="form.hawb"></el-input>
        </el-form-item>
        <el-form-item  label="pieces" prop="pieces">
        <el-input type="text" v-model="form.pieces"></el-input>
        </el-form-item>
        <el-form-item  label="weight" prop="weight">
        <el-input type="text" v-model="form.weight"></el-input>
        </el-form-item>
        <el-form-item  label="address" prop="address">
        <el-input type="textarea" autosize v-model="form.address" style="width: 206.4px;"></el-input>
        </el-form-item>
        <el-form-item  label="name" prop="name">
        <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label="signed" prop="signed">
        <el-input type="text" v-model="form.signed"></el-input>
        </el-form-item>
        <el-form-item  label="dated" prop="dated">
            <el-date-picker
                        v-model="form.dated"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
        </el-form-item>
        <el-form-item  label="type" prop="type">
        <el-select v-model="form.type" placeholder="select" style="width: 206.4px;">
            <el-option
             v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="                   ">
        <el-button  type="primary" style="width:206.4px" @click="onSubmit('form')">{{$t('main.submit')}}</el-button>
        </el-form-item>    
        <el-form-item label="               ">
        <el-button  type="success" style="width:206.4px">{{$t('main.scan')}}</el-button>
        </el-form-item>  
        <el-form-item label="               ">
        <el-button  type="danger" style="width:206.4px" @click="resetForm('form')">{{$t('main.reset')}}</el-button> 
        </el-form-item>          
      </el-form>
  </div>
</template>

<script>
    export default{
      name:'insertnote',
      data(){
        return{
            options:[
                {
                    value:'delivery',
                    label:'delivery'
                },
                {
                    value:'collection',
                    label:'collection'
                }
            ],
            form:{
                date:'',
                hawb:'',
                pieces:'',
                weight:'',
                address:'',
                name:'',
                signed:'',
                dated:'',
                type:''
            },
            rules:{
            date:[
                {required: true,trigger: 'blur' }
            ],
            hawb:[
                {required: true,trigger: 'blur' }
            ],
            pieces:[
                {required: true,trigger: 'blur' }
            ],
            weight:[
                {required: true,trigger: 'blur' }
            ],
            address:[
                {required: true,trigger: 'blur' }
            ],
            name:[
                {required: true,trigger: 'blur' }
            ],
            signed:[
                {required: true,trigger: 'blur' }
            ],
            dated:[
                {required: true,trigger: 'blur' }
            ],
            type:[
                {required: true,trigger: 'blur' }
            ]
        }
        }
      },
      methods:{
          onSubmit(formname){
                let _this=this;
                this.$refs[formname].validate((valid)=>{
                if(valid){
                var param=_this.form;
                _this.$api.insertnote(param).then(function (response) {
                    var type=response.msg;
                    var message=response.event;
                    if(type=='success'){
                        _this.$message(
                            {
                                message:message,
                                type:'success'
                            }
                        )
                    }
                    else {
                        _this.$message.error(message)
                    }
                })
            }
            else{
                return false;
            }
      })
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    }
    }
    }
</script>