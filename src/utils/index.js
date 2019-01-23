import beautify from 'js-beautify'

/**
 * 深度递归遍历组件树
 * @param {*} components
 * @param {*} parent
 * @param {*} before
 * @param {*} after
 */
function deepTraversal(components, parent, before, after) {
  let ret = ''
  let next = components.slice()

  while(next.length) {
    const node = next.shift()
    ret += before(node, parent)
    if(node.children) {
      ret += deepTraversal(node.children, node, before, after)
    }
    ret += after(node)
  }
  return ret
}

/**
 *
 * @param {*} component
 * @param {*} parent
 */
function startTemplate(component, parent) {
  if (typeof component === 'string') return component // 文字节点
  if (component.name === 'efe-placeholder') return '' // 占位组件，忽略
  let props = ''

  // 属性处理
  if (component.attribute) {
    component.attribute.forEach(attr => {
      props += ` ${attr.prop}= "${attr.value}"`
    })
  }

  // slot处理
  if (component.slot) {
    props += ` slot="${component.slot}"`
  }

  if (parent && parent.name === 'efe-placeholder' && parent.slot) {
    props += ` slot="${parent.slot}"`
  }
  return `<${component.name}${props}>`
}

/**
 *
 * @param {*} component
 */
function endTemplate(component) {
  if (typeof component === 'string' || component.name === 'efe-placeholder') return ''
  return `</${component.name}>`
}

export function getSource(components) {
  let source = `<template>`

  source += deepTraversal(components, null, startTemplate, endTemplate)
  source += `</template>`

  return beautify.html(source, {
    indent_inner_html: true,
    indent_size: 2,
    end_with_newline: true,
    inline: []
  })
}
