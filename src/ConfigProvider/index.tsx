/*
 * @Description: 
 * @Author: April
 * @Date: 2024-05-29 17:21:55
 * @LastEditors: April
 * @LastEditTime: 2024-05-29 17:24:24
 */
import React, { createContext } from 'react';
interface Config {
  prefix?: string;
}
const defaultConfig: Config = {
  prefix: 'april',
};
export const ConfigContext = createContext(defaultConfig);

function ConfigProvider() {
  return <div>ConfigProvider</div>;
}
export default ConfigProvider;
