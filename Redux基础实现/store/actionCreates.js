/*
 * 生成CHANG_NAME动作函数
 */
import * as constants from "./constants";
export const createChgNameAct = value => {
  //返回动作
  return {
    type: constants.CHANGE_NAME,
    value
  };
};
