<template>
    <div class="app-container">
        <el-button @click="print()" type="primary" size="large">{{$t('main.print')}}</el-button>
    </div>
</template>

<script>
    export default{
        name:'businessexcel',
        data(){
            return{
                
            }
        },
        methods:{
            print(){
            this.$api.purchasesinvoice().then(res=>{
                console.log(res)
                var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
                var downloadElement = document.createElement('a');
                var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　        downloadElement.href = href;
                downloadElement.download = 'invoice.xls'
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
