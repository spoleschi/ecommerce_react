const products = [
  {
    id: '1',
    title: 'Auriculares JBL Quantum  50  Black',
    price: '$ 28.870',
    category: 'auriculares',
    galery: [{id:'1',url:'Auriculares/Jbl _Quantum_50_Black01.jpg'},{id:'2',url:'Auriculares/Jbl _Quantum_50_Black02.jpg'},{id:'3',url:'Auriculares/Jbl _Quantum_50_Black03.jpg'},{id:'4',url:'Auriculares/Jbl _Quantum_50_Black04.jpg'}],
    stock: 10,
    desc: `¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los JBL 50 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.

          El formato perfecto para vos. Al ser in-ear, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.

          Características:
          * Modo manos libres incluido.
          * Con micrófono incorporado.
          * Tipo de conector: Jack 3.5 mm.
          * El largo del cable es de 1.2 m.
          * Sonido superior y sin límites.
          * Cómodos y prácticos.`
  }, 
  {
    id: '2',
    title: 'Auriculares Bluetooth Inalámbricos Noise Cancelling Bose Headphones 700 Gris',
    price: '$ 1.043.091',
    category: 'auriculares',
    galery: [{id:'1',url:'Auriculares/image-ffabce0616f44f088822d5ad4f23e123.jpg'}],
    stock: 10,
    desc: `Auriculares Bluetooth Inalámbricos Noise Cancelling Bose Headphones 700 Gris Características generales Fabricante Bose Marca Bose Modelo 794297-0300 Color gris Micrófono Con micrófono Sí Con modo manos libres Sí Otros Largo del cable 1.06 m Con cable desmontable Sí Con asistentes de voz integrados Sí Asistentes de voz integrados Alexa,Siri,Google Assistant Accesorios incluidos Cable de carga USB-C,Cable auxiliar,Estuche,Guía de inicio Especificaciones Formato del auricular Over-ear Conectividad Es inalámbrico Sí Con Bluetooth Sí Alcance inalámbrico 10 m Tipo de conector Jack 3.5 mm Versión de Bluetooth 5.0 Sonido Con cancelación de ruido Sí Batería Duración de la batería del auricular 20 h Incluye estuche de carga Sí Con carga inalámbrica Sí`
    
  }, 
  {
    id: '3',
    title: 'Auriculares JBL Quantum TWS Black',
    price: '$ 161.698,95',
    category: 'auriculares',
    galery: [{id:'1',url:'Auriculares/image-52c1c5c76fa04408aeb7bd221b18f205.jpg'}],
    stock: 10,
  },
  {
    id: '4',
    title: 'Auriculares JBL Tour One Supraaurales Bluetooth Negro',
    price: '$ 718.199',
    category: 'auriculares',
    galery: [{id:'1',url:'Auriculares/image-0fd0d2a336754c62818df5fd296215cc.jpg'}],
    stock: 10,
  },
  {
    id: '5',
    title: 'Auricular Bose Soundtrue Ae P/android I I Azul',
    price: '$ 281.080,8',
    category: 'auriculares',
    galery: [{id:'1',url:'Auriculares/318445-300-300.jpg'}],
    stock: 10,
  },
  {
    id: '6',
    title: 'Auriculares Bose® Sleepbuds® II para Dormir Bloqueo de Ruido',
    price: '$ 476.128,8',
    category: 'auriculares',
    galery: [{id:'1',url:'Auriculares/image-0e2fd76356f94163a934e8586448af66.jpg'}],
    stock: 10,
  },
  {
    id: '7',
    title: 'Galaxy Z Flip4',
    price: '$ 383.999',
    category: 'celulares',
    galery: [{id:'1',url:'Celulares/232658-300-300.jpg'}],
    stock: 10,
  },
  {
    id: '8',
    title: 'Celular Galaxy S23 ULTRA',
    price: '$ 779.999',
    category: 'celulares',
    galery: [{id:'1',url:'Celulares/231072-300-300.jpg'}],
    stock: 10,
  },
  {
    id: '9',
    title: 'Celular Samsung A23 5G 4GB 128GB Blanco',
    price: '$ 569.999',
    category: 'celulares',
    galery: [{id:'1',url:'Celulares/376935-300-300.jpg'}],
    stock: 10,
  },
  {
    id: '10',
    title: 'Celular Motorola Moto E22 64gb 4gb Ram',
    price: '$ 89.999',
    category: 'celulares',
    galery: [{id:'1',url:'Celulares/414181-300-300.jpg'}],
    stock: 10,
  },
  {
    id: '11',
    title: 'Celular Motorola G72 6/128gb Azul',
    price: '$ 245.999',
    category: 'celulares',
    galery: [{id:'1',url:'Celulares/490716-300-300.jpg'}],
    stock: 10,
  }, {
    id: '12',
    title: 'Celular Xiaomi Redmi 10 4GB 128GB V22 Guijarro Blanco Sin Cargador',
    price: '$ 450.599',
    category: 'celulares',
    galery: [{id:'1',url:'Celulares/369995-300-300.jpg'}],
    stock: 10,
  }

  ]
  
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export const getProductById = ( {productId} ) => {
  return new Promise((resolve) => {
    setTimeout(() => {

      // console.log(products[0].id);
      //  console.log(productId);
      // console.log(products[0].id === id);

      resolve(products.find(prod => (prod.id === productId)));
    }, 2000)
  })
}

export const getProductByCat = ( categoryId ) => {
  return new Promise((resolve) => {
    setTimeout(() => {

      // console.log(products[0].id);
        // console.log(categoryId);
      // console.log(products[0].id === id);

      resolve(products.filter(prod => (prod.category === categoryId)));
    }, 2000)
  })
}