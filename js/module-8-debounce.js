console.dir(_.debounce);

const refs = {
   form: document.querySelector('.form')
}
const { form } = refs;

form.addEventListener(
   'input',
   _.debounce((e) => {
      console.log('1', e.target.value);
   }, 1000)
)