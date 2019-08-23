// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data = {

    filterData: (data, condicion) => {
      const nasafilterData = data.filter(dataNasa => dataNasa.camera.name == condicion)
      console.log(nasafilterData);
      return nasafilterData;
    },
    sortData: (data, sortBy, sortOrder) => {
      let orderCamp = data.sort((a,b) => {
        if (sortOrder == "menor-mayor") {         
          if (sortBy == "id") {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          }
          
        }
        if (sortOrder == "mayor-menor") {
          if (sortBy == "id") {
            return b.id - a.id;
          }
          
        }
      });
      //console.log(orderCamp);
      
      return orderCamp;

    }
  }