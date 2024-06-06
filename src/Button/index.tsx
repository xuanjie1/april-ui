/*
 * @Description:
 * @Author: April
 * @Date: 2024-05-28 15:05:58
 * @LastEditors: April
 * @LastEditTime: 2024-05-30 10:52:59
 */
import React, { ReactNode, useContext } from 'react';
import ClassNames from 'classnames';
import './index.less';
import { ConfigContext } from '../ConfigProvider';
interface ButtonProps {
  type?: 'highlight' | 'default';
  disabled?: boolean;
  icon?: ReactNode;
  text?: string;
  children?: ReactNode;
  className?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  orderType?: number;
}
export default (props: ButtonProps) => {
  const { prefix } = useContext(ConfigContext);
  const { type, disabled, icon, text, children, className, style, onClick, orderType } = props;
  const btnPrefix = prefix + '-btn';
  const classes = ClassNames(btnPrefix, className, {
    [`${btnPrefix}-highlight`]: type === 'highlight',
    [`${btnPrefix}-disabled`]: disabled,
  });

  const getTextByOrderType = () => {
    if (orderType === 1) {
      return '已完成';
    }
    if (orderType === 2) {
      return '已超时';
    }
    return '未完成';
  };
  return (
    <div
      className={classes}
      style={style}
      onClick={(e) => {
        if (disabled) return;
        onClick && onClick(e);
      }}
    >
      {icon}
      {orderType ? getTextByOrderType() : text}
      {children}
    </div>
  );
};
