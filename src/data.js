// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data = {

    filterData: (data, condicion) => {
      const nasafilterData = data.filter(dataNasa => dataNasa.camera.name == condicion)
      console.log(nasafilterData);
      return nasafilterData;
    }
  }