<template>
  <div class="efe-attribute-panel">
    <div class="efe-title">属性面板{{description}}</div>
    <efe-dynamic :component="component" :attribute="component.attribute" @change="handleChange"></efe-dynamic>
  </div>
</template>

<script>
export default {
  props: {
    component: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  inject: ['container'],
  data() {
    return {
      comp: JSON.parse(JSON.stringify(this.component))
    }
  },
  computed: {
    description() {
      return this.component.description ? '-' + this.component.description : ''
    }
  },
  watch: {
    component(value) {
      this.comp = JSON.parse(JSON.stringify(value))
    }
  },
  methods: {
    handleChange(payload) {
      if (payload.prop === 'children') {
        this.container.$emit('render', 'updateContent', [ payload.value ])
      } else {
        this.container.$emit('render', 'updateAttr', payload)
      }

    }
  }
}
</script>

<style>

</style>

<style lang="less">
  .efe-attribute-panel {
    .el-form-item {
      margin-bottom: 15px;
    }
  }
</style>
