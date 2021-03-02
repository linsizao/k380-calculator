import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, WebView, Button } from '@tarojs/components'
import { computed } from './eval'
import './index.scss'

export default class Index extends Component {
  isDecimalAdded = false
  isOperatorAdded = false // 是否已经输入运算符
  isStarted = false //  是否开始输入数字
  state = {
    viewer: '0',
    showblog: false //  显示博客名称
  }


  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  // 判断是否有运算符
  isOperator(character) {
    return ['+', '-', '×', '÷'].includes(character)
  }

  append(character) {
    const { viewer, showblog } = this.state
    showblog && this.setState({ showblog: false})
    Taro.vibrateShort()
    if (viewer === '0' && !this.isOperator(character)) {
      if (character === '.') {
        this.setState({
          viewer: viewer + character + ''
        })
        this.isDecimalAdded = true
      } else {
        this.setState({
          viewer:  character + ''
        })
      }

      this.isStarted = true
      return
    }

    // 输入数字
    if (!this.isOperator(character)) {
      if (character === '.' && this.isDecimalAdded) {
        return
      }

      if (character === '.') {
        this.isDecimalAdded = true
        this.isOperatorAdded = true
      } else {
        this.isOperatorAdded = false
      }

      this.setState({
        viewer: viewer + character + ''
      })
    }

    // 输入运算符
    if (this.isOperator(character) && !this.isOperatorAdded) {
      this.setState({
        viewer: viewer + character + ''
      })
      this.isDecimalAdded = false
      this.isOperatorAdded = true
    }
  }

  // 点击 =
  calculate() {
    Taro.vibrateShort()
    const { viewer, showblog } = this.state
    if (viewer === '21' || showblog) {  // 彩蛋
      this.setState({
        viewer: 'BerniLin21',
        showblog: true
      })
    } else {
      this.setState({
        // viewer: parseFloat(eval(result).toFixed(9)).toString() 
        viewer: this.result(viewer)
      })

      this.isDecimalAdded = false
      this.isOperatorAdded = false
    }
  }

  // 格式化
  result(v) {
    let format = v.replace(new RegExp('×', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
    switch (format[format.length - 1]) {
      case '+':
        format += '0'
        break;
      case '-':
        format += '0'
        break;
      case '*':
        format += '1'
        break;
      case '/':
        format += '1'
        break;
    }

    try {
      const result = parseFloat(computed(format).toFixed(9)).toString() === 'NaN'
        ? '0'
        : parseFloat(computed(format).toFixed(9)).toString()
      return result
    } catch (error) {
      return format
    }

  }

  // 点击 +/-
  calculateSign() {
    const { viewer, showblog } = this.state
    showblog && this.setState({ showblog: false})
    Taro.vibrateShort()
    if (this.isOperatorAdded || !this.isStarted) {
      return
    }
    this.setState({
      viewer: '-1 *' +  viewer
      // viewer: viewer + 'r 1'
    },() => {
      console.log(this.state.viewer)
      this.calculate()
    })
  }

  // 点击 %
  calculatePercent() {
    const { viewer, showblog } = this.state
    showblog && this.setState({ showblog: false })
    Taro.vibrateShort()
    if (this.isOperatorAdded || !this.isStarted) {
      return
    }

    this.setState({
      viewer: viewer + '* 0.01'
    }, () => {
      this.calculate()
    })
  }

  // 清除
  clear() {
    Taro.vibrateShort()
    this.setState({
      viewer: '0',
      showblog: false
    })
    this.isDecimalAdded = false
    this.isOperatorAdded = false
    this.isStarted = false
  }

  toBlog() {

  }

  render () {
    const { viewer, showblog } = this.state
    return (
      <View className='calculator'>
        <View className="viewer" style="grid-area: viewer" onClick={this.toBlog.bind(this)}>{viewer}</View>

        <Button style="grid-area: ac" onClick={this.clear.bind(this)}>AC</Button>
        <Button style="grid-area: plus-minus" onClick={this.calculateSign.bind(this)}>±</Button>
        <Button style="grid-area: percent" onClick={this.calculatePercent.bind(this)}>%</Button>
        <Button style="grid-area: add" onClick={this.append.bind(this,'+')}>+</Button>
        <Button style="grid-area: subtract" onClick={this.append.bind(this,'-')}>-</Button>
        <Button style="grid-area: multiply" onClick={this.append.bind(this,'×')}>×</Button>
        <Button style="grid-area: divide" onClick={this.append.bind(this,'÷')}>÷</Button>
        <Button style="grid-area: equal" onClick={this.calculate.bind(this)}>=</Button>

        <Button style="grid-area: number-1" onClick={this.append.bind(this,1)}>1</Button>
        <Button style="grid-area: number-2" onClick={this.append.bind(this,2)}>2</Button>
        <Button style="grid-area: number-3" onClick={this.append.bind(this,3)}>3</Button>
        <Button style="grid-area: number-4" onClick={this.append.bind(this,4)}>4</Button>
        <Button style="grid-area: number-5" onClick={this.append.bind(this,5)}>5</Button>
        <Button style="grid-area: number-6" onClick={this.append.bind(this,6)}>6</Button>
        <Button style="grid-area: number-7" onClick={this.append.bind(this,7)}>7</Button>
        <Button style="grid-area: number-8" onClick={this.append.bind(this,8)}>8</Button>
        <Button style="grid-area: number-9" onClick={this.append.bind(this,9)}>9</Button>
        <Button style="grid-area: number-0" onClick={this.append.bind(this,0)}>0</Button>

        <Button style="grid-area: dot" onClick={this.append.bind(this,'.')}>.</Button>
        {/* {
          showblog && <WebView src='https://linsizao.gitee.io/' />
        } */}
      </View>
    )
  }
}
