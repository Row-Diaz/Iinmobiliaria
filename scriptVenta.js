// VENTAS

const propiedadesVenta = [
  {
    id: 3,
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
    enVenta: true,
  },
  {
    id: 4,
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
    enVenta: true,
  },
  {
    id: 5,
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    ubicacion: "Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
    enVenta: true,
  },
];

const ventaSection = document.getElementById("venta");

for (let buy of propiedadesVenta) {
  if (buy.enVenta) {
    const propiedadTemplateString = `
    <section id="alquiler1" class="mb-5">
    <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card">
      <img src=${buy.src} class="card-img-top"
      alt="Imagen del departamento"
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        ${buy.nombre}
                      </h5>
                      <p class="card-text">
                        ${buy.descripcion}
                      </p>
                      <p>
                      <i class="fas fa-map-marker-alt"></i> 
                      ${buy.ubicacion}
                      </p>
                      <p>
                      <i class="fas fa-bed"></i>${
                        buy.habitaciones
                      }<span>Habitaciones</span> <span>|</span>
                        <i class="fas fa-bath"></i>${
                          buy.baños
                        } <span>Baños</span>
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${buy.costo}</p>
                        <p>
                        <i class="${buy.smoke ? "text-success fas fa-smoking " : "text-danger fas fa-smoking-ban"}"></i>
                                  ${buy.smoke ? "Permitido fumar" : "No se permite fumar"}
                        </p>

                        <p>
                        <i class="${buy.pets ? "text-success fas fa-paw" : "text-danger fas fa-ban"}"></i>
                                  ${buy.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                        </p>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                        </section>
                        `;
    ventaSection.innerHTML += propiedadTemplateString;
  }
}
