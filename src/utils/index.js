import pretty from 'pretty'

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

function startTemplate(component, parent) {
  if (typeof component === 'string') return component
  if (component.name === 'efe-placeholder') return ''
  let props = ''

  if (component.attribute) {
    component.attribute.forEach(attr => {
      props += ` ${attr.prop}= "${attr.value}"`
    })
  }

  if (component.slot) {
    props += ` slot="${component.slot}"`
  }

  if (parent && parent.name === 'efe-placeholder' && parent.slot) {
    props += ` slot="${parent.slot}"`
  }
  return `\n<${component.name}${props}>`
}

function endTemplate(component) {
  if (typeof component === 'string' || component.name === 'efe-placeholder') return ''
  return `</${component.name}>`
}

export function getSource(components) {
  let source = `<template>`

  source += deepTraversal(components, null, startTemplate, endTemplate)
  source += `\n</template>`

  return pretty(source, {
    ocd: true
  })
}
