import{EventEmitter} from 'node:events';

const task=new EventEmitter();
const sayhi=(name)=>{
    console.log(`logged in ${name}`);
    };
    const starts=()=>{
        console.log("System started");
    }
    task.once("greet",starts);
    task.on("greet", sayhi);//event and method binding
    task.on("greet",(name)=>{
        console.log(`${name} starts shopping`);
    });
    task.on("greet",(name)=>{
        console.log(`${name} logged out`);
    });

    task.emit("greet","akanksha");//znnouncement
    task.emit("greet","sdfg");
