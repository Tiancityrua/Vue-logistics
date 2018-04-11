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
                    <el-button @click="formvisible=true" type="primary" size="small">{{$t('main.update')}}</el-button>
                    </template>
                    </el-table-column>
                    </el-table>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default{
        name:'selectnote',
        data(){
            return{
                form:{
                    date1:'',
                    date2:'',
                    hawb:'',
                    type:''
                },
                tableData:[]
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
        }
    }
</script>