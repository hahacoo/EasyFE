<template>
  <div class="efe-placeholder" :style="{width: width, height: height}">
    <slot>
      <div class="efe-placeholder__hint">
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
    text: ''
  }
}
</script>

<style lang="less">
  .efe-placeholder {
    &:hover {
      border: 1px dashed #cccccc;
    }
    &__hint {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
