const fs=require('fs');
const path=require('path');

//require files
const calculateSizeD=require('./calculateSizeD.js');
const calculateSizeF=require('./calculateSizeF.js');

const buildMainContent = (fullStaticPath,pathname) =>{
	let mainContent='';
	let items;
	//loop through the elements inside the folder
	try{
		items=fs.readdirSync(fullStaticPath);//to display all elements in that particular path directory
		console.log(items);
	}
	catch(err){
		console.log(`error: ${err}`);
		return `<div class="alert alert-danger">Internal server error</div>`;
	}

	//get the following elements for each item:
	items.forEach(item => {
		
		//storing iten details in an object
		let itemDetails={};
		//name
		itemDetails.name=item;
		//link to item
		const link=path.join(pathname,item);
		const itemFullStaticPath=path.join(fullStaticPath,item);
		try{
			itemDetails.stats=fs.statSync(itemFullStaticPath);
		}catch(err){
			console.log(`statSync error:${err}`);
			mainContent=`<div class="alert alert-danger">Internal server error</div>`;
			return false;
		}

		if(itemDetails.stats.isDirectory()){
			itemDetails.icon='<ion-icon name="folder"></ion-icon>';
			[itemDetails.size,itemDetails.sizeBytes]=calculateSizeD(itemFullStaticPath);

		} else if(itemDetails.stats.isFile()){
			itemDetails.icon='<ion-icon name="document"></ion-icon>';
			[itemDetails.size,itemDetails.sizeBytes]=calculateSizeF(itemDetails.stats);
		}

		itemDetails.timeStamp=itemDetails.stats.mtimeMs;
		itemDetails.date=new Date(itemDetails.timeStamp);
		//itemDetails.date=itemDetails.date.toLocaleDateString();
		itemDetails.date=itemDetails.date.toLocaleString();
		console.log(itemDetails.date);

		mainContent += `
<tr data-name="${itemDetails.name}" data-size="${itemDetails.sizeBytes}" data-time="${itemDetails.timeStamp}">
    <td>${itemDetails.icon}<a href="${link}">${item}</a></td>
    <td>${itemDetails.size}</td>
    <td>${itemDetails.date}</td>
</tr>`;
	});
	  //name
	  //icon
	  
	  //size 
	  //last modified
	
    
    return mainContent;
};

module.exports=buildMainContent;