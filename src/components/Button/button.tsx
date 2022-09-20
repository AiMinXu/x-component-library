import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames'//导入classnames插件

//创建button属性枚举
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;//定义成React节点
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,//用户自定义的className
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props //解构赋值拿出属性值

  //默认btn的className,，第二个传入一个object但key值是变化的
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled //是Link类型并且具有disabled属性
  })

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    )
  } else {
    return <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button;
