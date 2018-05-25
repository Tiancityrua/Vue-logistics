<template>
    <div class="app-container">
        <el-form ref="form1" inline :model="form1" label-width="125px" size="large">
        <el-form-item>
            <el-input  v-model="form1.year" placeholder="year"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="print1(form1.year)" type="primary" size="large">{{$t('main.print')}}</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default{
        name:'businessexcel',
        data(){
            return{
               form1:{
                   year:''
               }
            }
        },
        methods:{
            print1(year){
            var param={'year':year}
            this.$api.purchasesinvoice(param).then(res=>{
                console.log(res)
                var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
                var downloadElement = document.createElement('a');
                var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　        downloadElement.href = href;
                downloadElement.download = 'purchases.xls'
    　　        document.body.appendChild(downloadElement);
    　　        downloadElement.click(); //点击下载
    　　        document.body.removeChild(downloadElement); //下载完成移除元素
    　　        window.URL.revokeObjectURL(href); //释放掉blob对象 
            }
            )
        },
        }
    }
</script>
