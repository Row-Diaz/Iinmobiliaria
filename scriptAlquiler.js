// aLQUILER

const propiedadesAlquiler = [
  {
    id: 0,
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
    enAlquiler: true,
  },
  {
    id: 1,
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
    enAlquiler: true,
  },
  {
    id: 2,
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false,
    enAlquiler: true,
  },
];

const alquilerSection = document.getElementById("alquiler");

for (let rent of propiedadesAlquiler) {
  if (rent.enAlquiler) {
    const propiedadTemplateString = `
  <section id="alquiler1" class="mb-5">
  <div class="row">
  <div class="col-md-4 mb-4">
    <div class="card">
    <img src=${rent.src} class="card-img-top"
    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      ${rent.nombre}
                    </h5>
                    <p class="card-text">
                      ${rent.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> 
                    ${rent.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i>${
                      rent.habitaciones
                    }<span>Habitaciones</span> <span>|</span>
                      <i class="fas fa-bath"></i>${
                        rent.baños
                      } <span>Baños</span>
                      </p>
                      <p><i class="fas fa-dollar-sign"></i>${rent.costo}</p>
                      <p class="text-danger">
                      <i class="fas fa-smoking-ban"></i>${
                        rent.smoke ? "Permitido fumar" : "No se permite fumar"
                      } 
                      </p>
                      <p class="text-success">
                      <i class="fas fa-paw"></i>${
                        rent.pets
                          ? "Mascotas permitidas"
                          : "No se permiten mascotas"
                      } 
                      </p>
                  </div>
                  </div>
                  </div>
                  </div>
              
                </section>
                  `;
    alquilerSection.innerHTML += propiedadTemplateString;
  } 
    
}   