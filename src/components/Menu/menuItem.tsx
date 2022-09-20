import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu'

export interface MenuItemProps {
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  index: number;//index为必传条件参数
  children?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, index, style, className, disabled } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index//设置高亮条件
  })
  const handleClick = () => {
    //设置调用回调函数条件
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

//添加静态属性
MenuItem.displayName = 'MenuItem'
export default MenuItem;
