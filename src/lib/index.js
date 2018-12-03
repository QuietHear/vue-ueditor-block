import vueEditorBlock from './vueEditorBlock';
const comment = {
    install(Vue) {
        Vue.component('vueEditorBlock', vueEditorBlock);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}
export default comment;
