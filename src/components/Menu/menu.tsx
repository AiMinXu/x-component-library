import React, { createContext, useState } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical' //使用联合类型
type SelectCallback = (slectedIndex: number) => void//定义回调的type
//定义接口类型
export interface MenuProps {
  defaultIndex?: number;//active高亮属性
  className?: string;
  mode?: MenuMode;//不同形式，横竖版本
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onSelect?: SelectCallback//定义回调类型
}

interface IMenuContext {
  index: number;//必选参数
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({ index: 0 })//创建并导出context,并设置初始值

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [active, setActive] = useState(defaultIndex)//创建State记录当前active


  //计算出的classes
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical' //当mode变化时添加对应属性
  })
  //设置点击回调
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index)
    }
  }
  //创建value
  const passdContext: IMenuContext = {
    index: active ? active : 0,
    onSelect: handleClick,
  }
  //创建方法渲染组件
  const renderChildren
  return (
    <ul className={classes} style={style} data-test="test-menu">
      <MenuContext.Provider value={passdContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}
export default Menu;
