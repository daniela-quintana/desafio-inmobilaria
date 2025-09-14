const propiedades_venta = [
  {
    name: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    location: '123 Luxury Lane, Prestige Suburb, CA 45678',
    rooms: 4,
    bathrooms: 2,
    price: 5000,
  },
  {
    name: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    location: '789 Mountain Road, Summit Peaks, CA 23456',
    rooms: 2,
    bathrooms: 1,
    price: 1200,
  },
  {
    name: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    location: '567 Skyline Avenue, Skyview City, CA 56789',
    rooms: 3,
    bathrooms: 2,
    price: 4500,
  },
  {
    name: 'Casa moderna con piscina',
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzYSUyMGx1am98ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60',
    description: 'Hermosa casa moderna con piscina y amplios jardines',
    location: '222 Sunshine Blvd, Brightville, CA 98765',
    rooms: 5,
    bathrooms: 3,
    price: 7500,
  },
    {
    name: 'Casa familiar en suburbio',
    src: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Cómoda casa familiar con jardín y garage para 2 autos',
    location: '456 Maple Street, Greenfield, CA 56789',
    rooms: 3,
    bathrooms: 1,
    price: 3200,
  },
    {
    name: 'Apartamento moderno con terraza',
    src: 'https://plus.unsplash.com/premium_photo-1684445035420-cc3aae0560cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Apartamento moderno con terraza y vistas panorámicas',
    location: '123 Skyline Road, Downtown, CA 45678',
    rooms: 1,
    bathrooms: 1,
    price: 2500,
  }
];

const propiedades_alquiler = [
  {
    name: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    location: '123 Main Street, Anytown, CA 91234',
    rooms: 2,
    bathrooms: 1,
    price: 2000,
    smoke: false,
    pets: true
  },
  {
    name: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    location: '456 Ocean Avenue, Seaside Town, CA 56789',
    rooms: 3,
    bathrooms: 1,
    price: 2500,
    smoke: true,
    pets: true
  },
  {
    name: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    location: '123 Main Street, Anytown, CA 91234',
    rooms: 2,
    bathrooms: 1,
    price: 2200,
    smoke: false,
    pets: false
  },
  {
    name: 'Loft estilo industrial',
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Amplio loft con diseño industrial en zona trendy de la ciudad',
    location: '789 Loft Avenue, Arts District, CA 34567',
    rooms: 1,
    bathrooms: 1,
    price: 1800,
    smoke: true,
    pets: false
  },
    {
    name: 'Penthouse de lujo',
    src: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Penthouse de lujo con terraza panorámica y piscina privada',
    location: '789 Horizon Blvd, Elite District, CA 67890',
    rooms: 4,
    bathrooms: 3,
    price: 5000,
    smoke: true,
    pets: true
  },
    {
    name: 'Estudio luminoso',
    src: 'https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Estudio pequeño pero luminoso ideal para estudiantes o profesionales',
    location: '789 University Lane, College Town, CA 34567',
    rooms: 1,
    bathrooms: 1,
    price: 1200,
    smoke: false,
    pets: false
  }
];

function renderProperty(property, elementId, amount = null) {
  const container = document.getElementById(elementId);
  let html = '';
  let properties = property;

  if (amount) {
    properties = property.slice(0, amount);
  }

  properties.forEach(property => {

    const smokeIcon = property.smoke === null || property.smoke === undefined ? '' : property.smoke ?
    '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' :
    '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';

    const petsIcon = property.pets === null || property.pets === undefined ? '' : property.pets ?
    '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' :
    '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';

    const roomIcon = property.rooms === 1 ?
    `<i class="fas fas fa-bed"></i> ${property.rooms} Habitación`:
    `<i class="fas fas fa-bed"></i> ${property.rooms} Habitaciones`;

    const bathroomIcon = property.bathrooms === 1 ?
    `<i class="fas fa-bath"></i> ${property.bathrooms} Baño`:
    `<i class="fas fa-bath"></i> ${property.bathrooms} Baños`;

      html += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${property.src}" class="card-img-top" alt="Imagen de la property">
          <div class="card-body">
            <h5 class="card-title">${property.name}</h5>
            <p class="card-text">${property.description}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
            <p> ${roomIcon} | ${bathroomIcon} </p>
            <p><i class="fas fa-dollar-sign"></i> ${property.price.toLocaleString()}</p>
            ${smokeIcon}
            ${petsIcon}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}