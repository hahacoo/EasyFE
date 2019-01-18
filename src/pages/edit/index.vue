<template>
  <div class="efe-edit">
    <div class="efe-edit__attribute efe-padding">
      <efe-attribute-panel></efe-attribute-panel>
    </div>
    <div class="efe-edit__main efe-padding--horizontal">
      <efe-preview></efe-preview>
    </div>
    <div class="efe-edit__component">
      <efe-component-panel></efe-component-panel>
    </div>
  </div>
</template>

<script>
import attributePanel from './components/attributePanel'
import componentPanel from './components/componentPanel'

export default {
  components: {
    'efe-attribute-panel': attributePanel,
    'efe-component-panel': componentPanel
  }
}
</script>

<style lang="less">
  .efe-edit {
    height: 100%;
    display: flex;
    &__attribute, &__main, &__component {
      height: 100%;
    }
    &__attribute,  &__component {
      width: 350px;
    }
    &__main {
      flex: 1;
    }
  }
</style>
