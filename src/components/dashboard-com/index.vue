<template>
  <div class="dashboard-component">
    <div class="barDash" >
      <lw-bar :data="barData"></lw-bar>
    </div>
    <div class="lineDash">
      <lw-line :data="lineData"></lw-line>
    </div>
  </div>
</template>
<style lang="less" src="./index.less">
</style>
<script>
  import barDash from './bar-dash'
  import lineDash from './line-dash'
  export default {
    name: 'dashboard-component',
    components: {
      'lw-bar': barDash,
      'lw-line': lineDash
    },
    data() {
      return {
        barData: {
          id: 'bar-exm',
          xAxis: {
            type: 'year',
            data: ['1951 年', '1952 年','1956 年','1957 年','1958 年','1959 年','1960 年','1962 年']
          },
          yAxis: {
            type: 'sales',
            data: [38,52,61,145,48,58,88,108]
          },
          height: 400,
          width: 400,
          padding: {
            top: 20,
            bottom: 20,
            left: 40,
            right: 20
          },
          barPadding: 20,
          tooltip: {
            fomt: `
            <div>
              <span>XDATA:</span>
              <span>YDATA</span>
            </div>`
          }
        },
        lineData: {
          id: 'line-exm',
          xAxis: {
            type: 'year',
            data: ['1951 年', '1952 年','1956 年','1957 年','1958 年','1959 年','1960 年','1962 年']
          },
          yAxis: {
            type: 'sales',
            data: [38,52,61,145,48,58,88,108]
          },
          height: 400,
          width: 400,
          padding: {
            top: 20,
            bottom: 20,
            left: 40,
            right: 20
          },
        }
      }
    }
  }
</script>