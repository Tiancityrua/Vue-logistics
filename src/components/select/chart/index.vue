<template>
    <div class="app-container">
    <el-row :gutter="32">
      <el-col  :span="12">
        <el-input style="width: 325px;" v-model="baryear"></el-input>
        <el-button style="width: 100px;" type="primary" size="large" @click="month(baryear)">年/月报告</el-button>
        <div class="chart-wrapper">
          <bar-chart :chartdata1="this.bardata"></bar-chart>
        </div>
      </el-col>
      <el-col :span="12">
        <el-input style="width: 325px;" v-model="nameyear"></el-input>
        <el-button style="width: 100px;" type="primary" size="large" @click="name(nameyear)">客户占比</el-button>
        <div class="chart-wrapper">
          <name :chartdata2="this.namedata"></name>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="12">
        <el-input style="width: 325px;" v-model="dstnyear"></el-input>
        <el-button style="width: 100px;" type="primary" size="large" @click="dstn(dstnyear)">目的地占比</el-button>
        <div class="chart-wrapper">
          <dstn :chartdata3="this.dstndata"></dstn>
        </div>
      </el-col>
      <el-col :span="12">
        <el-input style="width: 325px;" v-model="originyear"></el-input>
        <el-button style="width: 100px;" type="primary" size="large" @click="origin(originyear)">发货地占比</el-button>
        <div class="chart-wrapper">
          <origin :chartdata4="this.origindata"></origin>
        </div>
      </el-col>
    </el-row>
    </div>
</template>


<script>
import BarChart from './detail/purchases'
import name from './detail/name'
import dstn from './detail/dstn'
import origin from './detail/origin'
    export default{
        name:'businesschart',
        components:{
            BarChart,
            name,
            dstn,
            origin
        },
        data(){
            return{
                baryear:'',
                bardata:{},
                nameyear:'',
                namedata:{},
                dstnyear:'',
                dstndata:{},
                originyear:'',
                origindata:{}
            }
        },
        methods:{
            month(baryear){
                let _this=this
                var xdata=[]
                var ydata=[]
                var param=baryear==''?{}:{"year":baryear}
                this.$api.monthinvoice(param).then(res=>{
        res.data.forEach(element => {
            xdata.push(baryear==''?element.year:element.month)
            ydata.push(element.sum)
        });
        _this.bardata={
            xdata:xdata,
            ydata:ydata
        }        
      }
                )
            },
            name(nameyear){
                let _this=this
                var xdata=[]
                var data=[]
                var param={"year":nameyear}
                this.$api.nameinvoice(param).then(res=>{
        res.data.forEach(element => {
            xdata.push(element.name)
            data.push(element)
        });
        _this.namedata={
            xdata:xdata,
            data:data
        }        
      }
                )
            },
            dstn(dstnyear){
                let _this=this
                var xdata=[]
                var data=[]
                var param={"year":dstnyear}
                this.$api.dstninvoice(param).then(res=>{
        res.data.forEach(element => {
            xdata.push(element.name)
            data.push(element)
        });
        _this.dstndata={
            xdata:xdata,
            data:data
        }        
      }
                )
            },
            origin(originyear){
                let _this=this
                var xdata=[]
                var data=[]
                var param={"year":originyear}
                this.$api.origininvoice(param).then(res=>{
        res.data.forEach(element => {
            xdata.push(element.name)
            data.push(element)
        });
        _this.origindata={
            xdata:xdata,
            data:data
        }        
      }
                )
            },

        }
    }
</script>
