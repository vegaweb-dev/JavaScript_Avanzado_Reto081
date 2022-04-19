//Aqui use funcion flecha y el controlador de ciclo "for" inicializando la variable count en 0.Tu puedes encontrar otros caminos para resolver el challenge!

const contadorDeBoomerangs = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 2]) count++;
  }
  return count;
};

//Puedes probar la solucion descomentando la siguiente linea.

// console.log(contadorDeBoomerangs([1, 7, 1, 7, 1, 7, 1]));
