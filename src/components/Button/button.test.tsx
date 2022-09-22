import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

// test('button test case', () => {
//   const wrapper = render(<Button>Nice</Button>)//render方法创建一个对象
//   const element = wrapper.queryByText('Nice')//调用wrapper的querryByText方法获得对象
//   expect(element).toBeTruthy()//使用jest测试语法 expect（xx）.
//   expect(element).toBeInTheDocument()
// })

describe('test Button component', () => {
  //也可以用test
  //创建三个不同的测试用例
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)//render方法创建一个对象
    const element = wrapper.getByText('Nice')//调用wrapper的querryByText方法获得对象
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
  it('should render the correct component based on different props', () => {

  })
  it('should render a link when btnType equals link and href is provided', () => {

  })
  it('should render disabled button when disabled set to true', () => {

  })
})
