## Introducción

Este proyecto es una propuesta para la `Prueba técnica Web Developer NovoPayment`, se realizó con `React.js`

## Como correr el proyecto

Para `correr` el proyecto en desarrollo:

```bash
npm run dev
```

Para correr el proyecto para producción primero ejecutamos el `build`

```bash
npm run build
```

Abrimos [http://127.0.0.1:5173/](http://127.0.0.1:5173/) en el navegador para ver el resultado.

## Arquitectura

### HTML

En la estructura `HTML` se utilizaron etiquetas semánticas para poder adquirir todas la propiedad que por defecto tienes dichas etiquetas, como lo es la accesibilidad y navegación por teclado para personas con alguna discapacidad.

### JSX/React

Se dividió el proyecto en componentes que se encuentran en la carpeta `components` estas contienen el .jsx donde está alojado cada componente con sus eventos, lógica y estados para cambiar controladamente los componentes.

### Carpetas

En la carpeta `src/config` se encuentra un archivo `index.js` donde está la base url del API.
En la carpeta `src/hooks` se encuentra un archivo `useMenu.js` donde está el hook para setear los valores del menú.
En la carpeta `src/services` se encuentra un archivo `menu.js` donde está nuestro api que vamos a consumir para armar el menú.
En la carpeta `utils` se encuentran dos archivo `index` donde encontramos las funciones que vamos a utilizar.
En la carpeta `index.css` se encuentran los estilos que utilizamos en todos los componentes.

### Renderizado del menu

Para renderizar el menú, se realizó una nueva estructura de datos para poder renderizar mejor los submenús recurrentes; la función `sortMenuList()` es recurrente y realiza un bucle para armar la nueva estructura de datos.

Ejemplo: 

```bash
	"data": [
		{
			"name": "",
			"child": [
				{
					"name": "",
					"child": []
				},
				{
					"name": "",
					"child": []
				}
			]
		},
	]
```
Con esta estructura de datos podemos realizar el renderizado de los submenús a través del método `map()` con una función recurrente que en este caso es `renderSub()`;

En la data consumida del API podemos observar que las key de cada elemento son string con caracteres especiales; por ende para poder renderizar el texto correcto se crea un objeto `TEXT` en el archivo `constants.js` donde cada key tiene un valor; entonces cuando consumimos ese key retornamos el valor del key en el objeto texts.


