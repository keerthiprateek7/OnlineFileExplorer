const https=require('https');

//json link
const mimeURL = 'https://gist.githubusercontent.com/AshHeskes/6038140/raw/27c8b1e28ce4c3aff0c0d8d3d7dbcb099a22c889/file-extension-to-mime-types.json';

const getMimeType= extension => {
	return new Promise((resolve,reject) =>{
		https.get(mimeURL, response => { // code from https module of node js
			if(response.statusCode<200 || response.statusCode >299){
				reject(`error: failed to load mime type: ${response.statusCode}`);
				console.log(`error: failed to load mime type: ${response.statusCode}`);
				return false;
			}
			
			let data='';
			//you will recieve data by chunks
			response.on('data', (chunk) => {
				data +=chunk;
			});
			//once u receive all chunks of data
			response.on('end', () => {
				resolve(JSON.parse(data)[extension]);
			});
		}).on('error', (e) => {
			console.error(e);
		});
	});
};

module.exports=getMimeType;