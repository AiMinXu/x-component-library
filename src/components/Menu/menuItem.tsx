import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu'

//定义MenuItem的接口
export interface MenuItemProps {
  index: number; //必传项？
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const ctx = useContext(MenuContext)//获取context
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': ctx.index === index//何时高亮
  })
  const handleClick = () => {
    //点击事件回调函数，当onSelect有值且不是disabled执行回调
    if (ctx.onSelect && !disabled) {
      ctx.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem
