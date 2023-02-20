const categorias = [
  {
    id: 1,
    nombre: 'Frutas'
  },
  {
    id: 2,
    nombre: 'Verduras'
  }
];

const productos = [
  {
    id: 1,
    categorias_id: 1,
    nombre: 'Manzana',
    precio: 1000
  },
  {
    id: 2,
    categorias_id: 1,
    nombre: 'Uvas',
    precio: 123
  },

  {
    id: 3,
    categorias_id: 1,
    nombre: 'Duraznos',
    precio: 245
  },

  {
    id: 4,
    categorias_id: 2,
    nombre: 'Papas',
    precio: 790
  },

  {
    id: 5,
    categorias_id: 2,
    nombre: 'Lechuga',
    precio: 1200
  }
];

const paises = [
  {
    id: 1,
    nombre: "Chile",
    dominio: "cl",
  },
  {
    id: 2,
    nombre: "Perú",
    dominio: "pe",
  },
  {
    id: 3,
    nombre: "Bolivia",
    dominio: "bo",
  },
  {
    id: 4,
    nombre: "Argentina",
    dominio: "ar",
  },
  {
    id: 5,
    nombre: "Colombia",
    dominio: "co",
  },
  {
    id: 6,
    nombre: "Venezuela",
    dominio: "ve",
  },
  {
    id: 7,
    nombre: "México",
    dominio: "mx",
  },
  {
    id: 8,
    nombre: "España",
    dominio: "es",
  },
];

const categorias_productos = [
  {
    id: 1,
    nombre: "Abarrotes",
  },
  {
    id: 2,
    nombre: "Lácteos",
  },
  {
    id: 3,
    nombre: "Carnes",
  },
  {
    id: 4,
    nombre: "Licores",
  },
  {
    id: 5,
    nombre: "Perfumería",
  },
];
const atributos = [
  {
    id: 1,
    nombre: "Perecible",
  },
  {
    id: 2,
    nombre: "Armable",
  },
  {
    id: 3,
    nombre: "Frágil",
  },
  {
    id: 4,
    nombre: "Multiuso",
  },
  {
    id: 5,
    nombre: "Edición limitada",
  },
];
const imagenes = [{
    id: 1,
    titulo: "Curso Django",
    nombre: 'https://www.cesarcancino.com/asset/images/django-tamila-750.jpg'
},
{
    id: 2,
    titulo: "Curso Laravel",
    nombre: 'https://www.cesarcancino.com/asset/images/laravel750x422-1.jpg'
},
{
    id: 3,
    nombre: 'https://www.cesarcancino.com/asset/images/springb750x422.jpg'
},
{
    id: 4,
    titulo: "Curso FastAPI",
    nombre: 'https://www.cesarcancino.com/asset/images/sticker-fastapi-tamila2.png'
},
{
    id: 5,
    titulo: "Curso Node",
    nombre: 'https://www.cesarcancino.com/asset/images/node-750x422%20(1).jpg'
},
{
    id: 6,
    titulo:"Curso Angular",
    nombre: 'https://www.cesarcancino.com/asset/images/angular750x422.jpg'
}
];

export { productos };
export { categorias };
export { paises };
export { categorias_productos };
export { atributos };
export {imagenes};
