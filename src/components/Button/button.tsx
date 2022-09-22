import React from 'react';
import classNames from 'classnames'
// import { type } from '@testing-library/user-event/dist/type';
//定义按钮Size的枚举
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
//定义按钮Type类型
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}
//定义BaseButtonProps接口
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;//定义成react节点
  href?: string;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps//设置交叉类型--btn
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps//设置交叉类型--a链接
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>//使用Partial修饰

export const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, className, size, children, href, ...restProps } = props//需要添加用户自己自定义的设置的className
  //添加默认btn的className，第二个参数传入第一个object，但是key值是变化的
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled//是Link类型且有disabled属性
  })

  //判断btnType是否是Link，且具有herf为a链接
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
};

// 添加defaultProps默认值
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button;
