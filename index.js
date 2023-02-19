function randomPause(time = 50) {
  ms = Math.floor(Math.random() * time);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sleep(ms = 200) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const type = async (string, elem,len) => {
  for (let i = 0; i < string.length; i++) {
    elem.innerHTML = elem.innerHTML + string[i]; 
    await randomPause(len);
  }
};

class CommandAndOutput {
  constructor(script, output) {
    this.output = output;
    this.script = script


    this.command = document.createElement("p");
    this.command.className = "command";    
    this.command.innerHTML = "ovogrant@mywebsite scripts %";


    this.outputElement = document.createElement("p");
    this.outputElement.className = "output";
    this.outputElement.innerHTML="";
  }
  renderSelf = async (val) => {
    const terminal = document.getElementById("terminal");
    const len = val ? 350 : 0;
    terminal.appendChild(this.command);
    
    await sleep(len);

    await type(this.script, this.command, len);

    await sleep(len)

    terminal.appendChild(this.outputElement);
    await type(this.output, this.outputElement);
  };
}

const commands = [
  " ./AboutMe.sh",
  " ./experience.sh",
  " echo $languages",
  " echo $others",

];

const outputs = [
  `Hi, my name is Ogheneovo Grant-Oyeye. I'm in my 4th Year of studying
   Computer Science at Mount Allison University, and expect to graduate in
   time in 2024. I'm passionate about building
   software and am open to internship oppurtunities and new-grad oppurtunities.
    I'm authorized to work in Canada and EU countries.`
   ,
    `In addition to my experience gained through
    personal projects, I also have two months of proffesional experience. 
    I gained this through a summer internship with Toast, Inc in the summer of 2022.`
    ,
    `Languages: C, Java, JavaScript, SQL, Python`
    ,
    `Other: React, Tailwind, PostgreSQL Node.JS`
    ,
]



let commandsAndOutput = [];

for(let i = 0; i < commands.length; i++){
  commandsAndOutput.push(new CommandAndOutput(commands[i],outputs[i]));
}

const render = async (comm) => {
  for(let i = 0; i < comm.length; i++){
     await comm[i].renderSelf(true);
  }
}

render(commandsAndOutput);

