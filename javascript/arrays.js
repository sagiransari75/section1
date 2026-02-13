const myArr = [1, 'hello', true, null];

console.log(myArr);

const movies = [ 'dhurandha', 'Dune', 'Toxic', 'tenet', 'Pushpa', 'Batman'];

console.log( movies.length); 

// indexing
console.log(movies[3]);
console.log(movies.indexOf('pushpa'));
console.log(movies.at(-1));

movies[2] = 'Odyssey';

console.log(movies);
// slicing

console.log(movies.slice(1 ,3));
console.log(movies.slice(2));
console.log(movies.slice(-3));
console.log(movies.slice(-3 ,-1));
console.log(movies.slice(0 ,10));
// adding and removing elements
movies.push('RRR');
movies.unshift('KGF');
console.log(movies)
    
movies.pop()
movies.shift();
console.log(movies);

// splice function add,remove,replace

// movies.splice(3, 2);removing element
movies.splice(3, 2);
console.log(movies)

// movies.splice(3, 2, 'Superman', 'Spiderman') //replace element
movies.splice(3, 2, 'Superman', 'Spiderman')
console.log(movies)

// movies.splice(3, 0, 'Superman', )//inseting element
movies.splice(3, 0, 'Supergirl', )
console.log(movies)