<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '../../../../util/index.js'

const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartdata:{
        type:Object
    }
  },
  data() {
    return {
      chart: null,
      xdata:[],
      ydata:[],
      params:{}
    }
  },
  mounted() {
     let _this=this
    this.initChart()
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
        this.$api.monthinvoice(_this.params).then(res=>{
        res.data.forEach(element => {
            _this.xdata.push(element.year)
            _this.ydata.push(element.sum)
        });
        _this.chartdata={
            xdata:_this.xdata,
            ydata:_this.ydata
        }        
      }
      )
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  watch:{
    chartdata: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')    
      this.setOptions(this.chartdata)
    },
    setOptions({xdata,ydata}={}){
        this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data:xdata,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '营业额',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: ydata,
          animationDuration
        }]
        
      })
    }
  }
}
</script>
