const {readFile, writeFile}=require('fs')
readFile('./content/firstfile.txt','utf-8',(err,data)=>{
if(err){
    console.log(err);

}else{
    console.log(data);
}

})
writeFile()