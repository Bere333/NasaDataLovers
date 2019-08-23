const selectCamara = document.querySelector('#select-for-camera');
console.log('Canito');
selectCamara.addEventListener('click', () => {
  
  //Ordenar data
  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fEVOIK3DYkE7N1SbqHH7fc0cbSwMOnOCyUdRyBSj')
  .then((response) => {
    
    
    return response.json();
    
  })
  .then((myJson) =>{
    //Filtrar data
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
      //Ordenar data
      const selectOrder = document.querySelector('#order-date');
      selectOrder.addEventListener('click', () => {
        const valueOrder = selectOrder.options[selectOrder.selectedIndex].value;
        console.log(valueOrder);
        
        const selectOrderMayorMenor = document.querySelector('#order');
        selectOrderMayorMenor.addEventListener('click', () => {
        const valueOrderMayorMenor = [selectOrder.selectedIndex].value;
        const orderPhotos = window.data.sortData(dataFilter, valueOrder, valueOrderMayorMenor);
        console.log(orderPhotos);
        const root = document.getElementById("root");
        let str = " ";
        orderPhotos.forEach(element => {
          let nasaId = element.id;
          let nasaName = element.camera.full_name;
          let nasaImg = element.img_src;
          let nasaDate = element.earth_date;
    
          str += `
          <div class="card">
          <img src="${nasaImg}" alt="" class="nasa-img"></img>
          <div class="text-img">
          <p>Núm. de foto: ${nasaId}</p>
          <p>Fecha: ${nasaDate}</p>
          <p>Nombre de la cámara: ${nasaName}</p>
          </div>
          </div>
          
          `;
        });
        root.innerHTML = str; 
          
        

        

      })
        
      })
      
      
    });
})