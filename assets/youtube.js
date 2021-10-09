class Youtube{
  constructor(url){
    this.url = url;
  }

  

  async mostPopular(url){
    try {
       const response = await fetch('http://192.168.1.5:5500/'+url,
         this.requestOptions);
       const result = await response.json();
       console.log(result);
     } catch (error) {
       return console.log('error', error);
     }
  } 
}

export default Youtube;
