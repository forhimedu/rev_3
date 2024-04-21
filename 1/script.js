const questionsContainer = document.querySelector('.questions')
const submitBtn = document.querySelector('.submit')
const nextBtn = document.querySelector('.next')
const score = document.querySelector('.score')
let correctAns1 = "";
let correctAns2 = "";
let answered = true;
let i = 0;


const data1 = [
  {type: "металдық кристалдар", examples: ["темір","қорғасын","болат","алтын","сынап",
  "скандий","мыс","натрий","литий","кальций","алюминий","марганец"] },
  {type: "иондық кристалдар", examples: ["KCl","калий йодиді","K2SO4","натрий сульфаты","мыс сульфаты","қорғасын нитраты",
  "литий нитриті","натрий гидрокарбонаты","ас содасы","ас тұзы","темір хлориді","күміс нитраты"]},
  {type: "атомдық кристалдар", examples: ["алмаз","графит","бор","қара фосфор","кремний оксиді", "карборунд", "кремний карбиді",]},
  {type: "молекулалық кристалдар", examples: ["көміртек диоксиді", "CO","NO2","мұз","күкірт","ақ фосфор","қатты азот"] }
];  

const data2 = [
  {type: "ортасы негіздік тұздар", examples: ["K2CO3","Na2CO3", "Ca(NO2)2","CH3COONa", "HCOOK","KF"]},
  {type: "ортасы қышқылдық тұздар", examples: ["ZnCl2", "Zn(NO3)2", "FeCl2", "AgNO3", "CuSO4", "MnCl2", "Cr(NO3)2", "CrBr2",]},
  {type: "ортасы бейтарап тұздар", examples: ["NaCl", "KBr", "Ca(NO3)2", "Na2SO4", "NaClO3", "Ba(ClO3)2",]},
]

const data3 = [
  {type: "валенттік қабат электрон конфигурациясы ns<sup>1</sup>", examples: ["литий", "натрий", "калий", "рубидий", "цезий"]},
  {type: "валенттік қабат электрон конфигурациясы ns<sup>2</sup>", examples: ["бериллий","магний","кальций","сторнций","барий"]},
  {type: "валенттік қабат электрон конфигурациясы ns<sup>2</sup>np<sup>1</sup>", examples: ["бор","алюминий","галий","индий","таллий",]},
  {type: "валенттік қабат электрон конфигурациясы ns<sup>2</sup>np<sup>2</sup>", examples: ["көміртек","кремний","германий","қалайы","қорғасын",]},
  {type: "валенттік қабат электрон конфигурациясы ns<sup>2</sup>np<sup>3</sup>", examples: ["азот","фосфор","мышьяк(күшән)","сурьма(сүрме)","висмут",]},
  {type: "валенттік қабат электрон конфигурациясы ns<sup>2</sup>np<sup>4</sup>", examples: ["оттек","күкірт","селен","теллур","полоний",]},
  {type: "валенттік қабат электрон конфигурациясы ns<sup>2</sup>np<sup>5</sup>", examples: ["фтор","хлор","бром","йод","астат",]},
  {type: "валенттік қабат электрон конфигурациясы ns<sup>2</sup>np<sup>6</sup>", examples: ["гелий","неон","аргон","криптон","ксенон",]},
]

const data4 = [
  {type: "ортанғы атом(дар) sp гибридтелген молекулалар", examples: ["BeH2","ацетилен","CO2","BeCl2",]},
  {type: "ортанғы атом(дар) sp<sup>2</sup> гибридтелген молекулалар", examples: ["C2H4", "формальдегид", "SO3", "SO2", "BCl3", "BH3", "көмір қышқылы"]},
  {type: "ортанғы атом(дар) sp<sup>3</sup> гибридтелген молекулалар", examples: ["CH4", "CCl4", "NH4+", "NH3", "H2SO4", "H2O", "H2S"]},
  {type: "ортанғы атом(дар) sp<sup>3</sup>d гибридтелген молекулалар", examples: ["PCl5", "SF4", "фосфор пентафториді", 
  "хлор трифториді",]},
  {type: "ортанғы атом(дар) sp<sup>3</sup>d<sup>2</sup> гибридтелген молекулалар", examples: ["SF6","бром пентафториді","хлор пентафториді",
  "теллур гексафториді", ]},
  {type: "ортанғы атом(дар) sp<sup>3</sup>d<sup>3</sup> гибридтелген молекулалар", examples: ["XeF6", "йод гептафториді"]},
]

const data5 = [
  {type: "N<sub>2</sub> + H<sub>2</sub> <-> NH<sub>3</sub> + Q реакциясы үшін тепе теңдік оңға ығысады егер", 
  examples: ["сутек конц. арттыру", "азот конц. арттыру", "аммиак конц. төмендету", "темп. төмендету" , "қысымды арттыру"]},
  {type: "N<sub>2</sub> + H<sub>2</sub> <-> NH<sub>3</sub> + Q реакциясы үшін тепе теңдік солға ығысады егер", 
  examples: ["сутек конц. төмендету", "азот конц. төмендету", "аммиак конц. арттыру", "темп. арттыру" , "қысымды төмендету"]},
  {type: "A + B <-> C тепе теңдің ығысады солға егер де(темп, немесе зат агрегаттық күйлері белгісіз)",
  examples: ["A конц. төмендету", "B конц. төмендету", "С конц. арттыру" ]}
]

const data6 = [
  {type: "MeNO<sub>3</sub> -> Me + NO<sub>2</sub> + O<sub>2</sub> реакциясына сәйкес ыдырайтын металдар", examples : ["сынап", "күміс", ]}, 
  {type: "MeNO<sub>3</sub> -> MeO + NO<sub>2</sub>+ O<sub>2</sub> реакциясына сәйкес ыдырайтын металдар", examples : ["мыс", "магний", 
  "мырыш", "никель", "литий",]},
  {type: "MeNO<sub>3</sub> -> MeNO<sub>2</sub> + O<sub>2</sub> реакциясына сәйкес ыдырайтын металдар", examples : ["калий", "натрий",
  "барий", "кальций", "рубидий", "стронций",]}
]

const data7 = [
  {type: "Қышқылдық оксидтер", examples:["SO3","SO2","SiO2","CO2","P2O5",
  "Cl2O7","CrO3","MnO3","Mn2O7",]},
  {type: "Негіздік оксидтер", examples:["Na2O","K2O",
  "CaO","MgO","MnO",]},
  {type: "Бейтарап-Тұз түзбейтін оксидтер", examples:["NO","CO",
  "SiO","N2O",]},
  {type: "Екідайлы-амфотерлі оксидтер", examples:["Al2O3","BeO",
  "SnO","PbO","ZnO","Cr2O3","Mn2O3","MnO2",]},
]

const data8 = [
  {type: "Калий жылын түсі", examples: ["күлгін"]},
  {type: "Натрий жылын түсі", examples: ["сары"]},
  {type: "Кальций жылын түсі", examples: ["қызыл-кірпіш"]},
  {type: "литий жылын түсі", examples: ["таңқурай"]},
  {type: "стронций жылын түсі", examples: ["күңгірт-қызыл, алқызыл"]},
  {type: "мыс жылын түсі", examples: ["ашық жасыл"]},
]


const data9 = [
  {type: "аквакешен лиганды", examples: ["H2O"]},
  {type: "гидроксокешен лиганды", examples: ["OH-"]},
  {type: "аммиакаттар лиганды", examples: ["NH3"]},
  {type: "ацидокешен лиганды", examples: ["CN, Cl-,т.б."]},
]

const data10 = [
  {type: "кумолдағы сигма байланыс саны", examples: ["21"]},
  {type: "стирол сигма байланыс саны", examples: ["16"]},
  {type: "толуол сигма байланыс саны", examples: ["15"]},
  {type: "ксилол сигма байланыс саны", examples: ["18"]},
  {type: "фенол сигма байланыс саны", examples: ["13"]},
  {type: "анилин сигма байланыс саны", examples: ["14"]},
  {type: "бензой қышқылы сигма байланыс саны", examples: ["14"]},
  
]


const allData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]
const dataShuffled = shuffleArray(allData);
// const data2 = [
//   {type: "sp гибридтелген", examples: []},
// ]

// const data3 = [
//   {type: , examples: []},
//   {type: , examples: []},
//   {type: , examples: []},
//   {type: , examples: []},
// ]

function pickRandomelem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function removeClasses(className) {
  // Select all elements with the specified class name
  const elements = document.querySelectorAll('.' + className);
  
  // Loop through each element and remove the class
  elements.forEach(element => {
    element.classList.remove(className);
  });
}




function generateRandomQuestionData() {
  const data = dataShuffled[i];
  i++;
  if (i == 10) {
    i = 0;
  }
  // const data = data8;
  const correctData = pickRandomelem(data);
  const returnData = {
    type: correctData.type,
    correctAns: '',
    incorrect1: '',
    incorrect2: '',
    incorrect3: '',
  }

  // Pick two random correct answers
  
  if (correctData.examples.length > 1) {
    const shuffledExamples = correctData.examples.slice().sort(() => Math.random() - 0.5);
    returnData.correctAns = shuffledExamples.slice(0, 2).toString();
  } else {
    returnData.correctAns = correctData.examples;
  }

  // Filter data to exclude correct type
  const filteredData = data.filter(item => item.type !== correctData.type);
  const incorArr = [];

  // Pick incorrect answers
  if (correctData.examples.length > 1) {
    for (let i = 0; i < 6; i++) {
     
      const randomIndex = Math.floor(Math.random() * filteredData.length);
      const randomExample = pickRandomelem(filteredData[randomIndex].examples);
      if (!incorArr.includes(randomExample)) {
        incorArr.push(randomExample);
      } else {
        i--;
      }
    }
  } else {
    for (let i = 0; i < 3; i++) {
      
      const randomIndex = Math.floor(Math.random() * filteredData.length);
      const randomExample = pickRandomelem(filteredData[randomIndex].examples);
      if (!incorArr.includes(randomExample)) {
        incorArr.push(randomExample);
      } else {
        i--;
      }
    }
  }
  //new added
  if (correctData.examples.length > 1) {
    returnData.incorrect1 = incorArr.slice(0,2);
    returnData.incorrect2 = incorArr.slice(2,4);
    returnData.incorrect3 = incorArr.slice(4,6);
  } else {
    returnData.incorrect1 = incorArr[0];
    returnData.incorrect2 = incorArr[1];
    returnData.incorrect3 = incorArr[2];
  }
  
  

  return returnData;
}

// function generateRandomQuestionData() {
//   const correctData = pickRandomelem(data);
//   const returnData = {
//     type: correctData.type,
//     correctAns: '',
//     incorrect1: '',
//     incorrect2: '',
//     incorrect3: '',
//   }
  
//   //picks two random and correct answers from the correct options and adds them to temp array
//   const shuffledExamples = correctData.examples.slice().sort(() => Math.random() - 0.5);
//   let temp = [];
//   temp.push(shuffledExamples[0]);
//   temp.push(shuffledExamples[1]);
//   returnData.correctAns = temp.toString();
//   temp = [];
   
//   //picks not correct answers
//   const filteredData = data.filter(item => item.type !== correctData.type);
//   temp.push(shuffledExamples[2]);
//   temp.push(pickRandomelem(filteredData[0].examples))
//   returnData.incorrect1 = temp.toString();


//   temp = [];
//   temp.push(pickRandomelem(filteredData[0].examples))
//   temp.push(pickRandomelem(filteredData[1].examples))
//     returnData.incorrect2 = temp.toString();
  
//   temp = [];
//   temp.push(pickRandomelem(filteredData[1].examples))
//   temp.push(pickRandomelem(filteredData[1].examples))
//   returnData.incorrect3 = temp.toString();
 
//   return returnData;
// }

{/* <select id="mySelect">
<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select> */}



function makeOption(data) {
  const a = document.createElement('option');
  a.innerHTML = data;
  return a;
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function makeSelect(data, container, idName) {
  const selectContainer = document.createElement('select');
  selectContainer.setAttribute('id', idName);
  const arr = [];
  arr.push(makeOption(data.correctAns));
  arr.push(makeOption(data.incorrect1));
  arr.push(makeOption(data.incorrect2));
  arr.push(makeOption(data.incorrect3));
  shuffleArray(arr);
  arr.forEach(elem => {
    selectContainer.append(elem);
  })
  

  // selectContainer.append(makeOption(data.correctAns));
  // selectContainer.append(makeOption(data.incorrect1));
  // selectContainer.append(makeOption(data.incorrect2));
  // selectContainer.append(makeOption(data.incorrect3));

  container.append(selectContainer);
}


function App() {
  answered = false;
  let firstData = undefined;
  for(let i = 0; i<2; i++){
    let ques1 = generateRandomQuestionData();
    // while (ques1 != firstData) {
    //   ques1 = generateRandomQuestionData();
    // }
    const newDiv = document.createElement('div');
    if (i == 0) {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = ques1.correctAns;
      correctAns1 = tempElement.innerText;

    } else {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = ques1.correctAns;
      correctAns2 = tempElement.innerText;

    }
    newDiv.classList.add(`question${i+1}`);
    const questText = document.createElement('h3');
    questText.innerHTML = `${ques1.type} ` 
    newDiv.append(questText);

    makeSelect(ques1, newDiv, `select${i+1}`);

    questionsContainer.append(newDiv);
  }
}

nextBtn.addEventListener('click', (e) => {
  if (answered == true) {
    questionsContainer.innerHTML = "";
    App();
  }
})



submitBtn.addEventListener('click', (e) => {
  removeClasses('red');
  removeClasses('green');

  if (correctAns1 != "") {
    const ans1 = document.querySelector('#select1');
    const ans2 = document.querySelector('#select2');
    const question1 = document.querySelector('.question1');
    const question2 = document.querySelector('.question2');
    if ((correctAns1 == ans1.value) && (correctAns2 == ans2.value)) {
      question1.classList.add("green");
      question2.classList.add("green");
      if (answered==false) {
        score.innerHTML = parseInt(score.textContent) + 1;
      }
      answered = true;

    } else if ((correctAns1 != ans1.value) && (correctAns2 == ans2.value)) {
      if (answered==false) {
        score.innerHTML = parseInt(score.textContent) - 1;
      } 
      question1.classList.add("red");
      question2.classList.add("green");
    } else if ((correctAns1 == ans1.value) && (correctAns2 != ans2.value)) {
      if (answered==false) {
        score.innerHTML = parseInt(score.textContent) - 1;
      } 
      question1.classList.add("green");
      question2.classList.add("red");
    } else {
      if (answered==false) {
        score.innerHTML = parseInt(score.textContent) - 1;
      } 
      question1.classList.add('red');
      question2.classList.add('red');
    }
}})
