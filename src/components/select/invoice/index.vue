<template>
    <div class="app-container">
        <el-form ref="form" inline :model="form" label-width="125px" size="large">
            <el-form-item label="invoice_no">
                <el-input v-model="form.invoiceNo"></el-input>
            </el-form-item>
            <el-form-item label="start_time">
                        <el-date-picker
                        v-model="form.date1"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="end_time">
                        <el-date-picker
                        v-model="form.date2"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
             <el-form-item label="invoice_to">
                <el-input  v-model="form.invoiceTo"></el-input>
            </el-form-item>
             <el-form-item label="bill_laden">
                <el-input  v-model="form.billLaden"></el-input>
            </el-form-item>
             <el-form-item label="origin">
                <el-input v-model="form.origin"></el-input>
            </el-form-item>
             <el-form-item label="dstn">
                <el-input v-model="form.dstn"></el-input>
            </el-form-item>
            <el-form-item label="         ">
                <el-button type="primary" @click="onSubmit" style="width: 206.4px;">{{$t('main.search')}}</el-button>
            </el-form-item>
        </el-form>
        <div style="text-align: center">
                    <el-table
                    border="true"
                    max-height="800"
                    header-align="center"
                    align="center"
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        fixed="left"
                        prop="invoiceNo"
                        label="invoice_no"
                        width="125">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="date"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="terms"
                        label="terms"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="invoiceTo"
                        label="invoice_to"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="billLaden"
                        label="bill_laden"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="origin"
                        label="origin"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="dstn"
                        label="dstn"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="nature"
                        label="nature"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="total"
                        label="total"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="operating"
                        width="300">
                    <template slot-scope="scope">
                    <el-popover
                    ref="detail"
                    placement="left"
                     width="300"
                    trigger="click">
                    <el-table :data="gridData">
                    <el-table-column width="100" prop="invoiceNo" label="invoice_no"></el-table-column>
                    <el-table-column width="100" prop="description" label="description"></el-table-column>
                    <el-table-column width="100" prop="amount" label="amount"></el-table-column>
                    </el-table>
                    </el-popover>
                    <el-button v-popover:detail @click="detail(scope.row.invoiceNo)" type="primary" size="small">{{$t('main.detail')}}</el-button>
                    <el-button @click="editShow(scope.row)" type="primary" size="small">{{$t('main.update')}}</el-button>
                    <el-button @click="deleteinvoice(scope.row.invoiceNo)" type="danger" size="small">{{$t('main.delete')}}</el-button>
                    <el-button @click="print(scope.row)" type="primary" size="small">{{$t('main.print')}}</el-button>
                     </template>
                    </el-table-column>
                    </el-table>
            </div>
            <el-dialog title="invoice" :visible.sync="dialogFormVisible">
                <el-form ref="form1"  :model="form1" label-width="125px" inline :rules="rules" size="large" >
        <el-form-item  label="invoice_no" prop="invoiceNo">
        <el-input type="text" v-model="form1.invoiceNo"></el-input>
        </el-form-item>
      <el-form-item  label="date" prop="date">
            <el-date-picker
                        v-model="form1.date"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
      </el-form-item>
      <el-form-item  label="terms" prop="terms">
        <el-input type="text" v-model="form1.terms"></el-input>
      </el-form-item>
      <el-form-item  label="invoice_to" prop="invoiceTo">
        <el-input type="textarea" autosize  v-model="form1.invoiceTo"></el-input>
      </el-form-item>
      <el-form-item  label="bill_laden" prop="billLaden">
        <el-input type="text" v-model="form1.billLaden"></el-input>
      </el-form-item>
       <el-form-item  label="origin" prop="origin">
        <el-input type="text" v-model="form1.origin"></el-input>
      </el-form-item>
      <el-form-item  label="dstn" prop="dstn">
        <el-input type="text" v-model="form1.dstn"></el-input>
      </el-form-item>
      <el-form-item  label="nature" prop="nature">
        <el-input type="textarea" autosize v-model="form1.nature"></el-input>
        </el-form-item>
        <el-form-item  label="total" prop="total">
        <el-input type="text" v-model="form1.total"></el-input>
      </el-form-item> 
         <el-form-item
        v-for="(domain, index) in form2.gridData"
        :label="''+index"
        :key="domain.key"
         >
     <el-input v-model="domain.description" style="width:206.4px" placeholder="description" :disabled="true"></el-input>
    <el-input v-model="domain.amount" style="width:206.4px" placeholder="amount"></el-input>
    </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('main.cancel')}}</el-button>
        <el-button type="primary" @click="update('form1')">{{$t('main.confirm')}}</el-button>
    </div>
    </el-dialog>
    </div>
</template>

<script>
    export default {
    name: 'selectinvoice',
    data(){
        return{
            form:{  
                invoiceNo:'',
                date1:'',
                date2:'',
                invoiceTo:'',
                billLaden:'',
                origin:'',
                dstn:'',
            },
            tableData:[],
            gridData:[],
            dialogFormVisible:false,
            form1:{
            invoiceNo:'',
            date:'',
            terms:'',
            invoiceTo:'',
            billLaden:'',
            origin:'',
            dstn:'',
            nature:'',
            total:''
            },
            form2:{
                gridData:[]
            },
            rules:{
                invoiceNo:[
                    {required: true,trigger: 'change' }
                ],
                date:[
                     {required: true,trigger: 'change' }
                ],
                terms:[
                     {required: true,trigger: 'change' }
                ],
                invoiceTo:[
                     {required: true,trigger: 'change' }
                ],
                billLaden:[
                     {required: true,trigger: 'change' }
                ],
                origin:[
                     {required: true,trigger: 'change' }
                ],
                dstn:[
                     {required: true,trigger: 'change' }
                ],
                nature:[
                     {required: true,trigger: 'change' }
                ],  
                total:[
                     {required: true,trigger: 'change' }
                ]
            }

        }
    },
    methods:{
        print(row){
            this.$api.printinvoice(row).then(res=>{
                console.log(res)
                var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
                var downloadElement = document.createElement('a');
                var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　        downloadElement.href = href;
                downloadElement.download = 'invoice.xlsx'
    　　        document.body.appendChild(downloadElement);
    　　        downloadElement.click(); //点击下载
    　　        document.body.removeChild(downloadElement); //下载完成移除元素
    　　        window.URL.revokeObjectURL(href); //释放掉blob对象 
            }
            )
        },
        editShow(row){
            var role=this.$store.getters.role
            let _this=this
                if(role=='manager'){
                this.form1=row
                var param={
                invoiceNo:this.form1.invoiceNo
                }
                this.$api.selectdetail(param).then(res=>{
                  _this.form2.gridData=res.data;
                })
                this.dialogFormVisible=true
                }
                else{
                    this.$message(
                        {
                            message:'permission denied',
                            type:'warning'
                        }
                    )
                }
        },
         onSubmit() {
              let _this=this;
              var param=this.form;
              this.$api.selectinvoice(param).then(res=>{
                  _this.tableData=res.data;
              })
          },
          detail(invoiceno){
            let _this=this
            var param={
                invoiceNo:invoiceno
            }
              this.$api.selectdetail(param).then(res=>{
                  _this.gridData=res.data;
              })
          },
          update(formname){
                let _this=this;
                var list=[]
                this.$refs[formname].validate((valid)=>{
                if(valid){
                for(var i=0;i<_this.form2.gridData.length;i++){
                list.push(
                {
                  invoiceNo:_this.form1.invoiceNo,
                  description:_this.form2.gridData[i].description,
                  amount:_this.form2.gridData[i].amount
                }
                )     
                }
                var param=_this.form1;
                _this.$api.updateinvoice(param).then(function (response) {
                    var type=response.msg;
                    var message=response.event;
                    if(type=='success'){
                        _this.$api.updatedetail(list)
                        _this.dialogFormVisible=false
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
          deleteinvoice(invoiceNo){
              var role=this.$store.getters.role
            if(role=='manager'){
              var param={"invoiceNo":invoiceNo}
                this.$confirm('确认删除？','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(()=>{
                this.$api.deleteinvoice(param).then(res=>{
                        this.$message({
                        type: res.msg,
                        message: res.event
                        })
                })}).catch(()=>{
                        this.$message({
                        type: 'info',
                        message: '已取消删除'
                        })
                })
          }
          else{
              this.$message(
                        {
                            message:'permission denied',
                            type:'warning'
                        }
                )
          }
          }

    }
    }
</script>