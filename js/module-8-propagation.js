// const refs = {
//    propagation: document.querySelector('.propagation'),
//    articleProp: document.getElementById('article-prop'),
//    articleList: document.getElementById('article-list'),
//  }
import refs from './references/refs.js'
console.log(refs);
const { propagation, articleProp, articleList } = refs

window.addEventListener('click', (e) => {
   console.log('window',e);
})

propagation.addEventListener('click', (e) => {
   console.log('propagation',e);
})

articleProp.addEventListener('click', (e) => {
   console.log('articleProp',e);
})

articleList.addEventListener('click', (e) => {
   console.log('articleList',e);
})

articleList.addEventListener('click', (e) => {
   // console.log('articleList', e);
   // console.log(e.target.attributes.name.value);
   e.stopPropagation() //все обработчики на этом эл-те будут вызваны, а выше нет 
})