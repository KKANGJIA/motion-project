class Youtube{
  constructor(url){
    this.url = url;
  }

  async mostPopular(url){
    try {
       const response = await fetch(url,
         this.requestOptions);
       const result = await response.json();
       return result;
     } catch (error) {
       return console.log('error', error);
     }
  } 
}

export default Youtube;
