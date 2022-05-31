window.addEventListener('load', () => {
  //guardamos algunos de los elementos que usaremos de forma repetitiva
  // Seleccionamos los botones y les añadimos en addeventListener
  document.getElementById('botonCategoriaInformatica').addEventListener('click', () => {
    seleccionarCategoria(18);
  });
  document.getElementById('botonCategoriaCine').addEventListener('click', () => {
    seleccionarCategoria(11);
  });
  document.getElementById('botonCategoriaMusica').addEventListener('click', () => {
    seleccionarCategoria(12);
  });
  document.getElementById('botonCategoriaAleatoria').addEventListener('click', () => {
    seleccionarCategoria(10);
  });

  const seleccionarCategoria = (categoria) => {
    let seccionCategorias = document.getElementById('seccionCategorias');
    seccionCategorias.style.display = 'none';
    mostrarIntro(categoria);
  };

  const mostrarIntro = (id_categoria) => {
    let div = document.createElement('div');
    div.id = 'intermediarioSeleccionCategoria';
    let botonVolver = document.createElement('button');
    botonVolver.innerHTML = 'Volver';
    botonVolver.id = 'volverHome';
    let botonEmpezar = document.createElement('button');
    botonEmpezar.id = 'botonJugar';
    let texto = document.createElement('p');
    if (id_categoria === 18) {
      botonEmpezar.style.backgroundImage = ' linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)';
      document.getElementById('wrapper').style.backgroundImage = ' linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)';
      texto.innerHTML = 'Has elegido la categoria de Informatica! Si estas preparado para este reto dale a jugar! ';
    } else if (id_categoria === 11) {
      botonEmpezar.style.backgroundImage = 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)';
      document.getElementById('wrapper').style.backgroundImage = ' linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)';
      texto.innerHTML = 'Has elegido la categoria de Cine! Demuestra que eres un autentico cinefilo! ';
    } else if (id_categoria === 12) {
      botonEmpezar.style.backgroundImage = 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)';
      document.getElementById('wrapper').style.backgroundImage = ' linear-gradient(to top, #96fbc4 0%, #f9f586 100%)';
      texto.innerHTML = 'Has elegido la categoria de Musica! Mozart?...Beethoven?... o quizas Motomami??  te atreves con estas preguntas? Dale al Play! ';
    } else {
      botonEmpezar.style.backgroundImage = ' linear-gradient(180deg, #2af598 0%, #009efd 100%)';
      document.getElementById('wrapper').style.backgroundImage = ' linear-gradient(180deg, #2af598 0%, #009efd 100%)';
      texto.innerHTML = 'Te la vas a jugar a temas aleatorios? eres todo un intrepido!';
    }
    botonEmpezar.innerHTML = 'Juega ahora!';
    div.append(texto, botonEmpezar, botonVolver);
    document.getElementById('contenedorMain').appendChild(div);
    funcionabilidadBotonJugar(id_categoria);
    funcionabilidadBotonVolver();
  };

  const funcionabilidadBotonVolver = () => {
    document.getElementById('volverHome').addEventListener('click', () => location.reload());
  };

  const funcionabilidadBotonJugar = async (id_categoria) => {
    document.getElementById('botonJugar').addEventListener('click', async () => {
      document.getElementById('intermediarioSeleccionCategoria').style.display = 'none';
      let arrayPreguntas = await conseguirPreguntas(id_categoria);
      mostrarPreguntasYRespuestas(arrayPreguntas);
    });
  };

  const conseguirPreguntas = async (id) => {
    let url = `https://opentdb.com/api.php?amount=10&category=${id}`;

    try {
      let resolv = await fetch(url);
      let data = await resolv.json();
      data = data.results;
      return data;
    } catch (error) {
      console.log('Error : ' + error);
    }
  };

  const mostrarPreguntasYRespuestas = (preguntas) => {};
});
