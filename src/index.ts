import './css/index.css';
import createComp from './js/comp';
import '@/js/resources';
import { add } from './js/math';

const texts: Array<string> = ['hello', 'CICD + 代码规范方案'];
// const comp = createComp('h2', { class: 'content' }, texts.at(-1));
const comp = createComp('h2', { class: 'content' }, texts.join(' '));
document.body.appendChild(comp);

console.log(texts.join('  '));

console.log(add(1, 2));
