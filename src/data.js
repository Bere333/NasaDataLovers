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
          if(sortBy == "full_name"){
            if (a.full_name > b.full_name) {
              return 1;
            }
            if (a.full_name < b.full_name) {
              return -1;
            }
            return 0;
          }
          if (sortBy == "earth_date") {
            if (a.earth_date > b.earth_date) {
              //return 1;
            }
            if (a.earth_date < b.earth_date) {
              return -1;
            }
            return 0;
          }
         
          
          if (sortBy == "id") {
            if (a.id > b.id) {
              //return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          }
          
        }
        if (sortOrder == "mayor-menor") {
          if(sortBy == "full_name"){
            return b.full_name.localeCompare(a.full_name);
          }
          
          if (sortBy == "id") {
            return b.id - a.id;
          }
          if (sortBy == "earth_date") {
            return b.earth_date - a.earth_date;
          }
          
        }
      });
      //console.log(orderCamp);
      
      return orderCamp;

    }
  }