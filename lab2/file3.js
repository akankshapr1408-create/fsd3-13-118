import {writeFile, readFile, appendFile} from "fs/promises";
const writeData=async(fname, contents)=>{
    await writeFile(fname, contents);
    console.log("file written");
};

const readData=async(fname)=>{
  const data=await readFile(fname,"utf-8");
  console.log("File contents:");
  console.log(data);
};



const appendData=async(fname, contents)=>{
  await appendFile(fname,"\n" + contents);
  console.log("data appended");
}
await writeData("note.txt","I am fs module");

await appendData("note.txt","I am fs module and I am appending data");

await readData("note.txt");