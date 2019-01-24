<template>
  <div class="efe-placeholder" @dragover.prevent @drop="handleDrop">
    <slot>
      <div class="efe-placeholder__hint" :style="{width, height}">
        <div class="efe-placeholder__hint__info">请将组件拖入{{text}}区域</div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'efe-placeholder',
  props: {
    height: String,
    width: String,
    text: String
  },
  data() {
    return {
    }
  },
  methods: {
    handleDrop(evt) {
      const component = evt.dataTransfer.getData('comp')

      this.$parent.addComp(JSON.parse(component))
      evt.stopPropagation()
    }
  }
}
</script>

<style lang="less">
  .efe-placeholder {
    border: 1px dashed transparent;
    &__hint {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .efe-preview {
    .efe-placeholder {
      &:hover {
        border: 1px dashed #cccccc;
      }
    }
  }
  .efe-component-panel {
    .efe-placeholder__hint {
      display: none;
    }
  }
</style>
