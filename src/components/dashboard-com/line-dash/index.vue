<template>
  <div class="lw-line-daboard">
    <svg :id="data.id"></svg>
    <div class="tooltip" :style="tooltipStyle"></div>
  </div>
</template>
<style lang="less" src="./index.less">
  
</style>
<script>
  import * as d3 from 'd3';
  export default {
    name: 'line-dash',
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
        const height = this.data.height
        const width = this.data.width
        const padding = this.data.padding
        const tooltip = this.data.tooltip
        const lineSvg = d3.select(`#${this.data.id}`).attr('width', width).attr('height', height)
        const Ymax = d3.max(Ydata)
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
                              .duration(300)
                              .ease(d3.easeQuadIn)
        const points = lineSvg.selectAll('.Mypoint')
                                .data(Ydata)
                                .enter()
                                .append('circle')
                                .attr('class', 'Mypoint')
                                .attr('r', 4)
                                .attr('cx', (d, i) => {
                                  return XScale(i) + XScale.bandwidth() / 2
                                })
                                .attr('cy', d => {
                                  return YScale(d)
                                })
                                .attr('fill', '#20a0ff')
                                .attr('stroke-width', 2)
                                .attr('stroke', '#fff')
                                .attr('transform', `translate(${padding.left}, ${padding.top})`)
        
        const lineData = this.getLinesData(Ydata)
        const lines = lineSvg.selectAll('.Myline')
                              .data(lineData)
                              .enter()
                              .append('line')
                              .attr('class', 'Myline')
                              .attr('transform', `translate(${padding.left}, ${padding.top})`)
                              .attr('x1', (d, i) => {
                                return XScale(i) + XScale.bandwidth() / 2
                              })
                              .attr('y1', (d, i) => {
                                return YScale(d.start)
                              })
                              .attr('x2', (d, i) => {
                                return XScale(i) + XScale.bandwidth() / 2
                              })
                              .attr('y2', (d, i) => {
                                return YScale(d.start)
                              })
                              .transition(transition)
                              .attr('x2', (d, i) => {
                                return XScale(i + 1) + XScale.bandwidth() / 2
                              })
                              .attr('y2', (d, i) => {
                                return YScale(d.end)
                              })
                              .attr('stroke', '#20a0ff')
                              .attr('stroke-width', 2)
        lineSvg.append('g').attr('class', 'axis')
                            .attr('transform', `translate(${padding.left},${height - padding.top})`)
                            .call(xAxis)
                            .selectAll('g')
                            .attr('transform', (d, i) => {
                              return `translate(${XScale(i) + XScale.bandwidth() / 2},0)`
                            })
        lineSvg.append('g').attr('class', 'axis')
                            .attr('transform', `translate(${padding.left},${padding.top})`)
                            .call(yAxis)




                            lineSvg.on('mouseover', function() {
            d3.select(this)
              .append(d3.creator("line"))
              .attr('class', 'markline')
        })
        lineSvg.on('mousemove', function() {
          const offsetX = d3.event.offsetX - padding.left
          const points = d3.select(this).selectAll('circle').nodes()
          let curpoint = ''
          let min = width
          let mincx = 0
          let curData
          let curindex = 0
          points.forEach((item, index) => {
            const cx = +d3.select(item).attr('cx')
            const dec = Math.abs(cx - offsetX)
            if(dec < min) {
              mincx = cx
              min = dec
              curpoint = item
              curData = Ydata[index]
              curindex = index
            }
          })
          d3.select(this)
            .select('.markline')
            .attr('x1', mincx)
            .attr('y1', 0)
            .attr('x2', mincx)
            .attr('y2', height - padding.bottom)
            .attr('transform', `translate(${padding.left},0)`)
            .attr('stroke', '#484747')
            .attr('stroke-width', 1)
            .attr('stroke-opacity', 0.4)

          d3.selectAll('.piont-hover').classed('piont-hover', false)
          d3.select(curpoint).classed('piont-hover', true)

          const html = 
          `<div>
            <span>${XOrdinal(curindex)}:</span>
            </br>
            <span>${curData}</span>
          </div>`
          self.setTooltipTtyle('block', d3.event.x + 20, d3.event.y - padding.top - padding.bottom, html)
        })
        lineSvg.on('mouseout', function() {

            d3.select(this).select('.markline').remove()
            d3.selectAll('.piont-hover').classed('piont-hover', false)
            self.$set(self.tooltipStyle, 'display', 'none')
        })

      },
      setTooltipTtyle(display, x, y, html) {
        this.$set(this.tooltipStyle, 'display', display)
        this.$set(this.tooltipStyle, 'left', `${x}px`)
        this.$set(this.tooltipStyle, 'top', `${y}px`)
        d3.select('.lw-line-daboard').select('.tooltip').html(html)
      },
      getLinesData(data){
        const result = []
        data.forEach((item, index, arr) => {
          if (index === 0) return
          result.push({
            start: arr[index - 1],
            end: item
          })
        })
        return result
      },
    }
  }
</script>