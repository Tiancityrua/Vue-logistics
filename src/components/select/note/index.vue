<template>
    <div class="app-container">
        <el-form ref="form" inline :model="form" label-width="125px" size="large">
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
            <el-form-item label="hawb">
                <el-input  v-model="form.hawb"></el-input>
            </el-form-item>
            <el-form-item label="type">
                <el-input  v-model="form.type"></el-input>
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
                        prop="hawb"
                        label="hawb"
                        width="125">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="date"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="pieces"
                        label="pieces"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="weight"
                        label="weight"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="address"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="name"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="signed"
                        label="dstn"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="dated"
                        label="dated"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="type"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="operating"
                        width="100">
                    <template slot-scope="scope">
                    <el-button @click="editShow(scope.row)" type="primary" size="small">{{$t('main.update')}}</el-button>
                    </template>
                    </el-table-column>
                    </el-table>
            </div>
        <el-dialog title="note" :visible.sync="dialogFormVisible">
        <el-form ref="form1"  :model="form1" label-width="125px" inline :rules="rules" size="large">
        <el-form-item  label="hawb" prop="hawb">
        <el-input type="text" v-model="form1.hawb" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item  label="date" prop="date">
            <el-date-picker
                        v-model="form1.date"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
        </el-form-item>
        <el-form-item  label="pieces" prop="pieces">
        <el-input type="text" v-model="form1.pieces"></el-input>
        </el-form-item>
        <el-form-item  label="weight" prop="weight">
        <el-input type="text" v-model="form1.weight"></el-input>
        </el-form-item>
        <el-form-item  label="address" prop="address">
        <el-input type="textarea" autosize v-model="form1.address" style="width: 206.4px;"></el-input>
        </el-form-item>
        <el-form-item  label="name" prop="name">
        <el-input type="text" v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item  label="signed" prop="signed">
        <el-input type="text" v-model="form1.signed"></el-input>
        </el-form-item>
        <el-form-item  label="dated" prop="dated">
            <el-date-picker
                        v-model="form1.dated"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
        </el-form-item>
        <el-form-item  label="type" prop="type">
        <el-select v-model="form1.type" placeholder="select" style="width: 206.4px;" :disabled="true">
            <el-option
             v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
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
    export default{
        name:'selectnote',
        data(){
            return{
            rules:{
            hawb:[
                 {required: true,trigger: 'change' }
            ],
            date:[
                {required: true,trigger: 'change' }
            ],
            pieces:[
                {required: true,trigger: 'change' }
            ],
            weight:[
                {required: true,trigger: 'change' }
            ],
            address:[
                {required: true,trigger: 'change' }
            ],
            name:[
                {required: true,trigger: 'change' }
            ],
            signed:[
                {required: true,trigger: 'change' }
            ],
            dated:[
                {required: true,trigger: 'change' }
            ],
            type:[
                {required: true,trigger: 'change' }
            ]},
                form:{
                    date1:'',
                    date2:'',
                    hawb:'',
                    type:''
                },
                tableData:[],
                dialogFormVisible:false,
                form1:{
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
                options:[
                {
                    value:'delivery',
                    label:'delivery'
                },
                {
                    value:'collection',
                    label:'collection'
                }
                ]
            }
        },
        methods:{
            onSubmit() {
            let _this=this;
            var param=this.form;
            this.$api.selectnote(param).then(res=>{
            _this.tableData=res.data;
            })
            },
            editShow(row){
                var role=this.$store.getters.role
                if(role=='manager'){
                this.form1=row
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
            update(formname){
                let _this=this;
                this.$refs[formname].validate((valid)=>{
                if(valid){
                var param=_this.form1;
                _this.$api.updatenote(param).then(function (response) {
                    var type=response.msg;
                    var message=response.event;
                    if(type=='success'){
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
            }
        }
    }
</script>