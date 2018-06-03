<template>
    <div class="app-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <el-input style="width: 325px;" v-model="baryear"></el-input>
        <el-button style="width: 100px;" type="primary" size="large" @click="month(baryear)">年/月报告</el-button>
        <div class="chart-wrapper">
          <bar-chart :chartdata="this.bardata"></bar-chart>
        </div>
      </el-col>
    </el-row>
    </div>
</template>

<script>
import BarChart from './detail/purchases'
    export default{
        name:'businesschart',
        components:{
            BarChart
        },
        data(){
            return{
                baryear:'',
                bardata:{}
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
            xdata.push(element.month)
            debugger
            ydata.push(element.sum)
        });
        _this.bardata={
            xdata:xdata,
            ydata:ydata
        }        
      }
                )
                debugger
            }
        }
    }
</script>
