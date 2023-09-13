import './css/index.css';
import createComp from './js/comp';
import '@/js/resources';
import { add } from './js/math';

const texts: Array<string> = ['hello', 'WEBPACK'];
const comp = createComp('h2', { class: 'content' }, texts.at(-1));
document.body.appendChild(comp);

console.log(texts.join(' '));

console.log(add(1, 2));
console.log('done');
