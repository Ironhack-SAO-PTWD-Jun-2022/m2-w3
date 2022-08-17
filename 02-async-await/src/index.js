console.log('index.js conectado!');

// async function funcDeclarative() {
//   return 'goiaba';
// }

// const funcArrow = async () => {
//   return 'xinforinfola';
// }

// funcArrow()
//   .then((result) => console.log('result:', result));

const instructions = [
  '1. esquentar o pão',
  '2. fritar o ovo',
  '3. montar o sanduíche',
  '4. comer!'
];

function obtainInstruction(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(instructions[step]);

      if(!instructions[step]) {
        reject(`${step} não é um passo válido!`)
      } else {
        resolve();
      }
    }, Math.floor(Math.random() * 3000))
  })
}

// obtainInstruction(0)
//   .then(() => obtainInstruction(1))
//   .then(() => obtainInstruction(2))
//   .then(() => obtainInstruction(3))
//   .catch((err) => console.error(err));

async function makeSandwich() {
  try {
    await obtainInstruction(0)
    await obtainInstruction(1)
    await obtainInstruction(2)
    // await obtainInstruction(4) // gera erro e cai no catch!
    console.log('Aproveite!')
  } catch (err) {
    console.log(err);
  }
}

// makeSandwich();

// FETCH

// then/catch
fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => {
    return response.json();
  })
  .then((jsonResponse) => {
    console.log('resposta then/catch:', jsonResponse);
  })
  .catch((err) => console.log('Algo deu errado!', err));

const displayMissionLaunches = async (limit = 0) => {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const jsonResponse = await response.json();
    console.log('resposta async/await:', jsonResponse)

    const launchesToDisplay = jsonResponse.slice(0, limit);
    launchesToDisplay.forEach((launchObj) => {
      const patchImg = launchObj.links.patch.small;
      const imgElement = document.createElement('img');

      imgElement.setAttribute('src', patchImg);
      imgElement.setAttribute('width', 200);
      document.body.appendChild(imgElement);
    })

    return jsonResponse;

  } catch (error) {
    console.log('Algo deu errado!!', err)    
  }
}

displayMissionLaunches(2)
  .then(result => console.log(result))