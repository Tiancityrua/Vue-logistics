<template>
<scroll-bar>
<el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
    <sidebar-item :routes="permission_routers"></sidebar-item>
</el-menu>
</scroll-bar>
</template>

<script>
    import {mapGetters} from 'vuex'
    import sidebarItem from './sidebaritem'
    import scrollBar from '../../../scrollbar'

    export default {
        components:{sidebarItem,scrollBar},
        computed:{
            ...mapGetters([
                'permission_routers',
                'sidebar'
            ]
            ),
            isCollapse(){
                return !this.sidebar.opened
                
            }
        }
    }
</script>
