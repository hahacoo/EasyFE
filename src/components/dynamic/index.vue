<template>
  <el-form ref="form" label-position="top">
    <!-- 内容 -->
    <el-form-item label="内容" v-if="contentChangeable(component)">
      <el-input :value="component.children[0]" @input="handleContentChange"></el-input>
    </el-form-item>
    <!-- 属性 -->
    <el-form-item :label="attr.label" v-for="attr in component.attribute" :key="attr.prop">
      <el-input :value="attr.value" @input="handleAttrChange(attr.prop, $event)" v-if="attr.formType === 'input'"></el-input>
      <el-select :value="attr.value" @change="handleAttrChange(attr.prop, $event)" v-else-if="attr.formType === 'select'">
        <el-option
          v-for="item in attr.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    component: {
      type: Object,
      default() {
        return {}
      }
    },
    attribute: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    contentChangeable(component) {
      const children = component.children
      return children && children.length === 1 && typeof children[0] === 'string'
    },
    handleAttrChange(prop, value) {
      this.$emit('change', {
        prop,
        value
      })
    },
    handleContentChange(value) {
      this.$emit('change', {
        prop: 'children',
        value
      })
    }
  },
  watch: {
    component(value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
