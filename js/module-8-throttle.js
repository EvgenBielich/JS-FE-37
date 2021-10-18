console.dir(_.throttle);

const refs = {
   form: document.querySelector('.form')
}
const { form } = refs;

form.addEventListener('input', (e) => {
   console.log(e.target.value);
})

form.addEventListener(
   'input',
   _.throttle((e) => {
      console.log('1', e.target.value);
   }, 1500)
)

form.addEventListener(
   'input',
   _.throttle((e) => {
      console.log('2', e.target.value);
   }, 3000)
)