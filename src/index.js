import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger; // Wprowadza debugger to kodu, gdzie mozna bedzie miec wgląd do oryginalnego kodu; Zapewnia do sourceMapa zaimplementowana w webpack 'inline-source-map'
console.log(`I would pay ${courseValue} for this awesome course`);
