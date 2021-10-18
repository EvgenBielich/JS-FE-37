// console.dir(IntersectionObserver);

// const refs = {
//    propagation: document.querySelector('.propagation'),
//    articleProp: document.getElementById('article-prop'),
//    articleList: document.getElementById('article-list'),
// }
import references from './references/refs.js'
const { propagation, articleProp, articleList, myBtn } = references

const options = {
   root: articleList,
   rootMargin: '5px 5px 5px 5px',
   threshold: 0.5,
}

function callback(elems) {
   console.log(elems);
   if (elems[0].isVisimle) {
      console.log('ok');
   }
   
}
const myObserver = new IntersectionObserver(callback, options)

// console.log('экземпляр', myObserver);

myObserver.observe(myBtn)