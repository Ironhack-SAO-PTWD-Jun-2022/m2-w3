console.log('index.js conectado!')

function func1 (cb) {
  console.log('oi!');

  if(typeof cb === 'function'){
    cb();
  }
}

function func2 () {
  console.log('tchau!');
}

// func1(func2);

const recipe = [
  '1. esquentar o pão',
  '2. fritar o ovo',
  '3. montar o sanduíche',
  '4. comer!'
];

function makeSandwich (step, callback, errorCallback) {
  setTimeout(() => {
    console.log((recipe[step]));
  
    if (!recipe[step]) {
      errorCallback('Instrução não encontrada!');
    } else {
      callback();
    }
  }, 1000);
}

// CALLBACK HELL!!!!
// makeSandwich(0, () => {
//   makeSandwich(1, ()=> {
//     makeSandwich('a', () => {
//       makeSandwich(3, () => {
//         makeSandwich(4, () => {}, errorFunc);
//       }, errorFunc)
//     }, errorFunc)
//   }, errorFunc)
// }, errorFunc)

function errorFunc (err) {
  if (err) {
    console.error(err)
  } else {
    console.error('Erro genérico')
  }
}

function obtainInstruction(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(recipe[step]);
      if (!recipe[step]) {
        reject(`${step} não é um passo válido!`)
      } else {
        resolve();
      }
    }, Math.floor(Math.random() * 2000))
  })
};

// obtainInstruction(0)
//   .then(() => obtainInstruction(1)) // then é a callback de sucesso (resolve)
//   .then(() => obtainInstruction('xis')) // gera erro e vai pro catch!
//   .then(() => obtainInstruction(3))
//   .catch(errorFunc); // catch é a errorCallback (reject)

  
// const pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Ironhack!');
//   }, 1000);
// })

// pr1.then((value) => console.log(value));

// const pr2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Rejeitado!');
//   }, 1000)
// })

// pr2
//   .then((result) => console.log(`Resolvido com: ${result}`))
//   .catch((err) => console.log(`catch() --> ${err}`));

// const pr3 = new Promise((resolve, reject) => {
//   throw new Error('Rejeitado por razão de erro!')
// })

// pr3
//   .then((result) => console.log(`Resolvido com: ${result}`))
//   .catch((err) => console.log(`catch() --> ${err}`));

// pr1
//   .then(() => {
//     console.log('1. then');
//   })
//   .then(() => {
//     console.log('2. then');
//     throw new Error('Alguma coisa deu errado!')
//   })
//   .then(() => {
//     console.log('3. then');
//   })
//   .catch((err) => {
//     console.log(`catch() --> ${err}`)
//   })

// const pr4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('A')
//   }, 2000)
// });

// pr4
//   .then((result) => {
//     console.log('result1:', result);
//     return 'B';
//   })
//   .then((result) => {
//     console.log('result2:', result);
//     return 'C';
//   })
//   .then((result) => {
//     console.log('result3:', result);
//     return 'D';
//   })
//   .then((result) => {
//     console.log('result4:', result);
//   })

// const pr5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('A')
//   }, 2000)
// });

// pr5
//   .then((result) => {
//     console.log('1o. then:', result);
//     throw new Error('Primeiro erro!')
//   })
//   .catch((err) => {
//     console.error('1o. catch:', err);
//   })
//   .then((result) => {
//     console.log('2o. then:', result);
//     throw new Error('Segundo Erro!')
//   })
//   .catch((err) => {
//     console.error('2o. catch:', err);
//   })
//   .finally(() => {
//     console.log('finally!')
//   })


// Promise.all()

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolve pr1'), 1000);
})
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(1337), 2000);
})
const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: 'João'}), 1500);
})

Promise.all([pr2, pr3, pr1])
  .then((result) => console.log(result))
  .catch((err) => console.log('error', err))


