<script>
export default {
  name: 'efe-preview',
  data() {
    return {
      components: [
        {
          name: 'el-form',
          attribute: {},
          children: [
            {
              name: 'efe-placeholder',
              attribute: {
                height: '200px'
              }
            }
          ]
        },
        {
          name: 'el-card',
          attribute: {},
          children: [
            {
              name: 'efe-placeholder',
              attribute: {
                height: '50px',
                text: '头部',
                slot: 'header',
              }
            },
            {
              name: 'efe-placeholder',
              attribute: {
                height: '200px',
                text: '内容'
              }
            }
          ]
        },
        {
          name: 'el-input',
          attribute: {},
          children: [
            {
              name: 'span',
              attribute: {
                slot: 'prepend'
              },
              children: [
                'http://'
              ]
            }
          ]
        },
        {
          name: 'el-rate'
        },
        {
          name: 'el-progress',
          attribute: {
            percentage: 80,
            color: '#8e71c7'
          },
        }
      ]
    }
  },
  render() {
    return (
      <div class="efe-preview">
        {this.components.map(comp => <efe-render name={comp.name} attribute={comp.attribute} children={comp.children}></efe-render>)}
      </div>
    )
  }
}
</script>

<style>
</style>
