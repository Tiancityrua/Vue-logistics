<template>
  <div style="text-align: center">
    <el-form ref="form" :model="form" label-width="80px" label-height="100px" inline>
      <el-form-item  label="主单号" width="25%">
        <el-input type="text" size="large" v-model="form.mawb"></el-input>
      </el-form-item>
        <el-form-item  label="航空公司" width="25%">
            <el-input type="text" size="large" v-model="form.airline"></el-input>
        </el-form-item>
        <el-form-item  label="航班号"  width="25%">
        <el-input type="text" size="large" v-model="form.flightNo"></el-input>
        </el-form-item>
      <el-form-item label="航班日期" width="25%">
          <el-date-picker   format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="form.flightDate" style="width: 100%;"></el-date-picker>
      </el-form-item>
        <el-form-item  label="附加信息">
            <el-input type="text" size="large" v-model="form.accInfo"></el-input>
        </el-form-item>
        <el-form-item  label="发货人">
                <el-input type="text" size="large" v-model="form.shipper"></el-input>
        </el-form-item>
        <el-form-item  label="收货人">
                <el-input type="text" size="large" v-model="form.consignee"></el-input>
        </el-form-item>
        <el-form-item  label="重量">
                <el-input type="text" size="large" v-model="form.weight"></el-input>
        </el-form-item>
        <el-form-item  label="体积">
                <el-input type="text" size="large" v-model="form.volume"></el-input>
        </el-form-item>
        <el-form-item  label="计算重量">
                <el-input type="text" size="large" v-model="form.chargableWeight"></el-input>
        </el-form-item>
        <el-form-item  label="出发机场">
                <el-input type="text" size="large" v-model="form.airDeparture"></el-input>
        </el-form-item>
        <el-form-item  label="到达机场">
                <el-input type="text" size="large" v-model="form.airDestination"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认更新</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default{
    name:'updatemawb',
    data(){
      return{
            form:{
                  mawb:'',
                  airline:'',
                  flightNo:'',
                  flightDate:'',
                  accInfo:'',
                  shipper:'',
                  consignee:'',
                  weight:'',
                  volume:'',
                  chargableWeight:'',
                  airDeparture:'',
                  airDestination:''
              }
      }
    },
    mounted(){
      this.form=this.$route.params
    },
    methods:{
      onSubmit(){
        var param=this.form
        let _this=this
          this.$api.updatemawb(param).then((response)=>{
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
          }
          )
      }
    }

  }
</script>