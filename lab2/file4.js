import {mkdir,rm} from "fs/promises";

// await mkdir("upload");
// console.log("Directory created");

//  await mkdir("upload/resume");
//  console.log("resume directory created under upload directory");
 
// await mkdir("images/profile/logos",{recursive:true});
// console.log("profile and logos directory created under images directory");


// await rm("upload/resume",{recursive:true});
// console.log("resume directory deleted under upload directory");

await rm("upload",{recursive:true});