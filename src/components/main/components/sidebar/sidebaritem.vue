<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">

        <el-submenu :index="item.name||item.path" :key="item.name">
         <template slot="title">

             <svg t="1506329916765" class="icon svg-icon" aria-hidden="true" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1661" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><defs></defs><path d="M64 64 448 64 448 448 64 448 64 64ZM64 576 448 576 448 960 64 960 64 576ZM576 576 960 576 960 960 576 960 576 576ZM768 448C874.038669 448 960 362.038672 960 256 960 149.961328 874.038669 64 768 64 661.961328 64 576 149.961328 576 256 576 362.038672 661.961328 448 768 448Z" p-id="1662"></path></svg>

            <span v-if="item.meta&&item.meta.title">
                {{generateTitle(item.meta.title)}}
            </span>
         </template>

         <template v-for="child in item.children" v-if="!child.hidden">
            <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path">
            </sidebar-item> 
            <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
                <span  v-if="child.meta&&child.meta.title">{{generateTitle(child.meta.title)}}
                </span>
            </el-menu-item>
            </router-link>
         </template>
        </el-submenu>

    </template> 
  </div>
</template>



<script>
import {generateTitle} from '../../../../util/showtitle'

export default{
    name:'sidebarItem',
    props:{
        routes:{
            type: Array
        },
        isNest:{
            type: Boolean,
            default:false
        }
    },
    methods:{
        generateTitle
    }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>