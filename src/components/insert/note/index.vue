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
        <el-button  type="success" style="width:206.4px" @click="imageShow=true">{{$t('main.scan')}}</el-button>
        </el-form-item>  
        <el-form-item label="               ">
        <el-button  type="danger" style="width:206.4px" @click="resetForm('form')">{{$t('main.reset')}}</el-button> 
        </el-form-item>          
      </el-form>
      <el-dialog :visible.sync="imageShow" width="400px">
  <el-upload
  class="upload-demo"
  drag
  action="http://localhost:8080/freight/upload/invoice/note"
  name="file"
  :on-success="successup"
  >
  <i class="el-icon-upload"></i>  
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>
      </el-dialog>
  </div>
</template>


<script>
    export default{
      name:'insertnote',
      data(){
        return{
            imageShow:false,
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
          successup(response){
            let _this=this
            this.imageShow=false
            if(response.msg=='success'){
            var list=response.data.date.split('/')
            this.form.date=list[2]+"-"+list[1]+"-"+list[0]
            this.form.address=response.data.add
            this.form.hawb=response.data.hawb
            this.form.pieces=response.data.pieces
            this.form.weight=response.data.weight
            this.form.name=response.data.name
            this.form.signed=response.data.signed
            var list2=response.data.dated.split('/')
            this.form.dated=list2[2]+"-"+list2[1]+"-"+list2[0]
            }
            else{
            _this.$message(
              {
                message:response.event,
                type:response.msg
              }
            )
            }
          },
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