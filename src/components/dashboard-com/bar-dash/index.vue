<template>
  <div class="lw-bar-dashboard">
    <svg :id="data.id"></svg>
    <div class="tooltip" :style="tooltipStyle"></div>
  </div>
</template>
<style lang="less" src="./index.less">
  
</style>
<script>
  import * as d3 from 'd3'
  export default {
    name: 'bar-dash',
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        tooltipStyle: {
          display: 'none',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }
      }
    },
    mounted() {
      this.initSvg()
    },
    methods: {
      initSvg() {
        const self = this
        const xAxisConfig = this.data.xAxis
        const yAxisConfig = this.data.yAxis
        const Xdata = xAxisConfig.data
        const Ydata = yAxisConfig.data
        const width = this.data.width
        const height = this.data.height
        const padding = this.data.padding
        const barPadding = this.data.barPadding
        const tooltip = this.data.tooltip
        const svg = d3.select(`#${this.data.id}`).attr('width', width).attr('height', height)
        const Xmax = d3.max(Xdata)
        const Xmin = d3.min(Xdata)
        const Ymax = d3.max(Ydata)
        const Ymin = d3.min(Ydata)

        // 定义线性比例尺，Y轴
        const YScale = d3.scaleLinear().domain([0, Ymax]).range([height - padding.top - padding.bottom, 0]);

        // 定义序数比例尺，X轴
        const XOrdinal = d3.scaleOrdinal().domain(d3.range(Xdata.length)).range(Xdata)
        const XScale = d3.scaleBand().domain(d3.range(Xdata.length)).range([0, width - padding.left - padding.right])

        // 定义x轴  指定比例尺 表示在坐标轴的下方显示。
        const xAxis = d3.axisBottom(XScale).tickValues(Xdata)
        //定义y轴
        const yAxis = d3.axisLeft(YScale)
        const transition = d3.transition()
                              .delay((d,i) => {
                                return i * 200
                              })
                              .duration(800)
                              .ease(d3.easeQuadIn)

        const rects = svg.selectAll('.myRect')
                          .data(Ydata)
                          .enter()
                          .append('rect')
                          .attr('class', 'myRect')
                          .attr("transform",`translate(${padding.left}, ${padding.top})`)
                          .attr('x', (d, i) => {
                            return (width - padding.left - padding.right)/Xdata.length * i + barPadding/2
                          })
                          .attr('y', d => {
                            // return YScale(min)
                            return height - padding.top - padding.bottom
                          })
                          .attr('width', (width - padding.left - padding.right)/Xdata.length - barPadding) // 取序数坐标轴步长， 计算柱状图宽度
                          .attr('height', d => {
                            return 0
                          })
                          .attr('fill', '#20a0ff')
                          .on('mousemove', function(d, i) {
                            const html = 
                            `<div style="padding: 10px">
                              ${tooltip.fomt.replace('XDATA', XOrdinal(i)).replace('YDATA', d)}
                            </div>`
                            self.setTooltipTtyle('block', d3.event.x, d3.event.y - padding.top - padding.bottom - barPadding, html)
                          })
                          .on('mouseout', function(d) {
                            self.$set(self.tooltipStyle, 'display', 'none')
                          })
                          .transition(transition)
                          .attr('y', d => {
                            return YScale(d)
                          })
                          .attr('height', d => {
                            return height - padding.top - padding.bottom - YScale(d)
                          })
                        
        const test = svg.selectAll('.Mytext')
                        .data(Ydata)
                        .enter()
                        .append('text')
                        .attr('class', 'Mytext')
                        .attr('fill', '#ffffff')
                        .attr('font-size', '13px')
                        .attr('transform', `translate(${padding.left},${padding.top})`)
                        .attr('x', (d, i) => {
                          return (width - padding.left - padding.right)/Xdata.length * i + barPadding/2
                        })
                        .attr('y', d => {
                          return height - padding.top - padding.bottom
                        })
                        .transition(transition)
                        .attr('y', d => {
                          return YScale(d) + 20
                        })
                        .text(d => d)
                              

      svg.append('g').attr('class', 'xaxis')
          .attr('transform', `translate(${padding.left},${height - padding.bottom})`)
          .call(xAxis)
          .selectAll('g')
          .attr('transform', (d, i) => {
            return `translate(${(width - padding.left - padding.right)/Xdata.length * i + barPadding},0)`
          })
      
      svg.append('g').attr('class', 'yaxis')
          .attr('transform', `translate(${padding.left},${padding.top})`)
          .call(yAxis)

      },
      setTooltipTtyle(display, x, y, html) {
        this.$set(this.tooltipStyle, 'display', display)
        this.$set(this.tooltipStyle, 'left', `${x}px`)
        this.$set(this.tooltipStyle, 'top', `${y}px`)
        d3.select('.tooltip').html(html)
      },
    }
  }
</script>