/*
* @Author: aFei
* @Date: 2018-11-26 10:51:05
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-17 11:35:37
*/
import vueUeditorBlock from './vueUeditorBlock';
const comment = {
    install(Vue) {
        Vue.component('vueUeditorBlock', vueUeditorBlock);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}
export default comment;
