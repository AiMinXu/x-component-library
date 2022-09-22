import React, { createContext, useState } from 'react';
import classNames from 'classnames';
// import { type } from 'os';
// type MenuMode = 'horizontal' | 'vertical' //使用联合类型
// type SelectCallback = (slectedIndex: number) => void//定义回调的type
// //定义接口类型
// export interface MenuProps {
//   defaultIndex?: number;//active高亮属性
//   className?: string;
//   mode?: MenuMode;//不同形式，横竖版本
//   style?: React.CSSProperties;
//   children?: React.ReactNode;
//   onSelect?: SelectCallback//定义回调类型
// }

// interface IMenuContext {
//   index: number;//必选参数
//   onSelect?: SelectCallback;
// }
// export const MenuContext = createContext<IMenuContext>({ index: 0 })//创建并导出context,并设置初始值

// const Menu: React.FC<MenuProps> = (props) => {
//   const { className, mode, style, children, defaultIndex, onSelect } = props
//   const [active, setActive] = useState(defaultIndex)//创建State记录当前active


//   //计算出的classes
//   const classes = classNames('viking-menu', className, {
//     'menu-vertical': mode === 'vertical' //当mode变化时添加对应属性
//   })
//   //设置点击回调
//   const handleClick = (index: number) => {
//     setActive(index);
//     if (onSelect) {
//       onSelect(index)
//     }
//   }
//   //创建value
//   const passdContext: IMenuContext = {
//     index: active ? active : 0,
//     onSelect: handleClick,
//   }
//   //创建方法渲染组件
//   // const renderChildren
//   return (
//     <ul className={classes} style={style} data-test="test-menu">
//       <MenuContext.Provider value={passdContext}>
//         {children}
//       </MenuContext.Provider>
//     </ul>
//   );
// };

// Menu.defaultProps = {
//   defaultIndex: 0,
//   mode: 'horizontal'
// }



//定义属性
type MenuMode = 'horizontal' | 'vertical'
//定义选择回调类型
type SelectCallback = (selectIndex: number) => void
//定义Menu的接口
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;//react内置的属性
  children?: React.ReactNode;//定义children属性
  onSelect?: SelectCallback;
}
//定义context接口类型
interface IMenuContext {
  index: number;
  onSelect?: SelectCallback
}
//创建并导出MenuContext，并且设置初始值
export const MenuContext = createContext<IMenuContext>({ index: 0 })//对象类型

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [active, setActive] = useState(defaultIndex)//父组件设置状态高不高亮
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical'//为true时才生成className
  })
  // menu点击事件函数进行设置active及是否执行回调（有值再进行执行）
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  //定义context传递内容
  const passedContext: IMenuContext = {
    index: active ? active : 0,//因为active为联合类型，需要做判断
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style} data-testid="test-id">
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

//设置默认defaultProps
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
