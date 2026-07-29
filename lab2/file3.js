import {writeFile, readFile} from "fs/promises";
const writeData=async(fname, contents)=>{
    await writeFile(fname, contents);
    console.log("file written");
};

const readData=async(fname)=>{
  const data=await readFile(fname,"utf-8");
  console.log("File contents:");
  console.log(data);
};

await writeData("note.txt","I am fs module");
await readData("note.txt");