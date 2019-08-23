const selectCamara = document.querySelector('#select-for-camera');
console.log('Canito');
selectCamara.addEventListener('click', () => {
  
  //Ordenar data
  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fEVOIK3DYkE7N1SbqHH7fc0cbSwMOnOCyUdRyBSj')
  .then((response) => {
    
    
    return response.json();
    
  })
  .then((myJson) =>{
    const valueCamara = selectCamara.options[selectCamara.selectedIndex].value;
    console.log(valueCamara);
    console.log(myJson);
      
      //for (let i=0; i<=820; i=i+1 ){//me ayudo a entender filter
        //
        //const data = myJson.photos[i];
        //console.log(data.camera.name);
      
     //}
     const data = myJson.photos
    
      const dataFilter = window.data.filterData(data, valueCamara)
      //console.log(data.sol);
      console.log(dataFilter);
      
      
      
    });
})