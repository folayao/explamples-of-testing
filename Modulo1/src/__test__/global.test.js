/* Esta funcion de test recibe dos valores un string, y  una funcion 
anonima, esta funcion anónima deberá de retornar un spec que nosotros estamos
buscando en dicha prueba  */
const text = 'Hola Mundo';

test('Debe contener un texto', () => {
  expect(text).toMatch('Mundo');
});

const fruits = ['Manzana', 'Mango', 'Pera'];

test('El arreglo contiene Mango', () => {
  expect(fruits).toContain('Mango');
});

test('Mayor que?', () => {
  expect(10).toBeGreaterThan(9);
});

test('Si es verdadero', () => {
  expect(true).toBeTruthy();
});

// Callbacks Testing

const reverseString = (str, callBack) => {
  callBack(str.split('').reverse().join(''));
};

const reverseString2 = (str) => {
  return str.split('').reverse().join('');
};

test('Prueba de callbacks', () => {
  reverseString('hola', (str) => {
    expect(str).toBe('aloh');
  });
});


// Promises Testing
const reverseStringPromise = (str) => {
  return new Promise((resolve, reject)=>{
    if (!str) {
      reject(Error("You doesnt add a string"))
    }else{
      resolve(str.split('').reverse().join(''))
    }
  })
};

test('Prueba para promesas', () => { 
  reverseStringPromise("hola").then((str)=>{
    expect(str).toBe("aloh")
  }).catch((e)=>{
    console.log(e, "ERROR")
  })
 })

 // Probar async 

 test('Probar Async await', async () => { 
   const string = await reverseString2("hola")
   expect(string).toBe('aloh')
  })
/* Esta seccion dice que va a pasar antes de cada prueba, despues de cada prueba
y despues de todas las pruebas, estas funciones pueden usarse para decir o llamar x tipos
de informacion, ejecuciones, apis etc necesarias para poder usar un test sin complicaciones */

// afterEach(() => console.log("Despues de cada prueba") )
// afterAll(() => console.log("Despues de todas las pruebas") )
// beforeEach(() => console.log("Antes de todas las pruebas"))