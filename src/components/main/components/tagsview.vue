<template>
  <div class="tags-view-container">
      <scroll-pane class="tags-view-wrapper" ref="scrollPane">
        <router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''" v-for="tag in Array.from(visitedViews)"
        :to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
        {{generateTitle(tag.title)}}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
      </router-link>
    </scroll-pane>   
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">Close</li>
      <li @click="closeOthersTags">Close Others</li>
      <li @click="closeAllTags">Close All</li>
    </ul>
  </div>
</template>


<script>
    import scrollPane from '../../scrollpane'
    import {generateTitle} from '../../../util/showtitle'
    export default{
        components:{scrollPane},

    }
</script>
