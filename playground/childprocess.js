const {execSync}=require('child_process');

try{
	const result=execSync(`du -sh "/c/xampp/htdocs/udemy/project/Projects/OnlineFileExplorer"`).toString();
	console.log(result);
}catch(err){
	console.log(`error:${err}`);
}