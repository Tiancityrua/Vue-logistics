<template>
    <div class="app-container">
        <el-form ref="form1" inline :model="form1" label-width="125px" size="large">
        <el-form-item>
            <el-input  v-model="form1.year" placeholder="year"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="print1(form1.year)" type="primary" size="large">{{$t('main.purchases')}}</el-button>
        </el-form-item>
        </el-form>
        <el-form>
        <el-form-item>
            <el-button @click="print2()" type="primary" size="large">{{$t('main.debtors')}}</el-button>
        </el-form-item>
        </el-form>  
        <el-form>
        <el-form-item>
            <el-button @click="print3()" type="primary" size="large">{{$t('main.creditors')}}</el-button>
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
               },
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
        print2(){
            var date=new Date()
            var day=date.getDate()
            var month=date.getMonth()
            month++
            month=month<10?'0'+month.toString():month
            day=day<10?'0'+day.toString():day
            var year=date.getFullYear()
            var param={'time':year+'-'+month+'-'+day}
            debugger
            this.$api.debtorsinvoice(param).then(res=>{
                console.log(res)
                var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
                var downloadElement = document.createElement('a');
                var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　        downloadElement.href = href;
                downloadElement.download = 'debtors.xls'
    　　        document.body.appendChild(downloadElement);
    　　        downloadElement.click(); //点击下载
    　　        document.body.removeChild(downloadElement); //下载完成移除元素
    　　        window.URL.revokeObjectURL(href); //释放掉blob对象 
            }
            )
        },
          print3(){
            var date=new Date()
            var day=date.getDate()
            var month=date.getMonth()
            month++
            month=month<10?'0'+month.toString():month
            day=day<10?'0'+day.toString():day
            var year=date.getFullYear()
            var param={'time':year+'-'+month+'-'+day}
            debugger
            this.$api.creditorsinvoice(param).then(res=>{
                console.log(res)
                var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
                var downloadElement = document.createElement('a');
                var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　        downloadElement.href = href;
                downloadElement.download = 'creditors.xls'
    　　        document.body.appendChild(downloadElement);
    　　        downloadElement.click(); //点击下载
    　　        document.body.removeChild(downloadElement); //下载完成移除元素
    　　        window.URL.revokeObjectURL(href); //释放掉blob对象 
            }
            )
        }
        }
    }
</script>
