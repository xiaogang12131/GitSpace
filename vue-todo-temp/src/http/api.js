import axios from './http.js';
import qs from 'qs'

// 配置API接口地址


//====正式
//  let root = "http://spread.yilvs.com";
//====测试
 let root = "http://114.215.130.190:8081";

/**
 * 接口模版====post
 *
 * export const test = params => {return axios.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test1 = function(){return axios.get(`${root}/api/getNewsList`)}
 *
 */
//=========数据接口==========
// 获取试题
export const getQuestion = params => axios.post(`${root}/word/examList`,qs.stringify(params))
// 获取错题
export const getErrorWord = () => axios.get(`${root}/record/errorWordList`)
export const login = params => axios.post(`${root}/login`,qs.stringify(params))
