import { LinkedList } from './modules/LinkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());

list.prepend('fish');
list.prepend('lizard');

console.log(list.toString());

console.log(list.size());

console.log(list.head());

console.log(list.tail());

console.log(list.at(0));
console.log(list.at(3));
console.log(list.at(20));

list.pop();

console.log(list.toString());

console.log(list.contains('hamster'));
console.log(list.contains('turtle'));

console.log(list.find('cat'));
console.log(list.find('lion'));

list.insertAt('puppy', 0);

console.log(list.toString());

list.removeAt(5);

console.log(list.toString());
