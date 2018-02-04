<template>
    <div style="text-align: center">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="主单号">
                <el-input  v-model="mawb" placeholder="主单号"></el-input>
            </el-form-item>
            <el-form-item label="航空公司">
                <el-input  v-model="airline" placeholder="航空公司"></el-input>
            </el-form-item>
            <el-form-item label="航班号">
                <el-input v-model="flightNo" placeholder="航班号"></el-input>
            </el-form-item>
            <el-form-item label="发货人">
                <el-select
                    v-model="shipper"
                    clearable
                    filterable
                    placeholder="发货人">
                    <el-option v-for="list in ships" :key="list.value"
                                :value="list.value" :label="list.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="收货人">
                <el-select
                        v-model="consignee"
                        clearable
                        filterable
                        placeholder="收货人">
                    <el-option v-for="list in consignees" :key="list.value"
                               :value="list.value" :label="list.label"></el-option>
                </el-select>
            </el-form-item>
            <el-date-picker
                        v-model="date1"
                        type="date"
                        placeholder="起始时间"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-date-picker
                    v-model="date2"
                    type="date"
                    placeholder="结束时间"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            </el-form>
            <div style="text-align: center">
            <el-table
                    max-height="800"
                    header-align="center"
                    align="center"
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        fixed="left"
                        prop="mawb"
                        label="主单号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="airline"
                        label="航空公司"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="flightNo"
                        label="航班号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="flightDate"
                        label="航班日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="accInfo"
                        label="附加信息"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="shipper"
                        label="发货人"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="consignee"
                        label="收货人"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="weight"
                        label="重量"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="volume"
                        label="体积"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="chargableWeight"
                        label="计算重量"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="airDeparture"
                        label="出发机场"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="airDestination"
                        label="到达机场"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                     <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="medium">查看</el-button>
                     </template>
                </el-table-column>
            </el-table>
            </div>
    </div>
</template>
<script>
  import routers from '../index.js';
  export default {
    name: 'svg',
      data(){
        return{
            tableData:[],
            mawb:null,
            airline:null,
            flightNo:null,
            shipper:null,
            consignee:null,
            date1:null,
            date2:null,
            ships:null,
            consignees:null

        }
      },
      mounted() {
          this.getShipper()
          this.getConsignee()
      },
      methods: {
          onSubmit() {
              console.log('submit!');
              let _this=this;
              var param={
                  'mawb':this.mawb,
                  'airline':this.airline,
                  'flightNo':this.flightNo,
                  'shipper':this.shipper,
                  'consignee':this.consignee,
                  'date1':this.date1,
                  'date2':this.date2
              };
              this.$api.selectmawb(param).then(res=>{
                  _this.tableData=res.data;
              })

          },
          getShipper(value) {

              this.$api.getShips().then(res => {
                  const result = []
                  res.data.forEach(item => {
                      result.push({
                          value: item,
                          label: item
                      })
                  })
                  this.ships = result
              }, err => {
              })

          },
          getConsignee(value) {
              this.$api.getConsignees().then(res => {
                  const result = []
                  res.data.forEach(item => {
                      result.push({
                          value: item,
                          label: item
                      })
                  })
                  this.consignees = result
              }, err => {
              })

          },
          handleClick(row){
            console.log(row)
            this.$router.push({name: 'realdashboard',params:row})
          }
      }
  }
</script>