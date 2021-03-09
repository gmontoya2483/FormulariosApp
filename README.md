# FormulariosApp

## Description

Proyecto FormularioApp del curso "Angular: Decero a experto (Edición 2021)".  
Esta aplicación muestra el uso de formulario por template y reactivos.

## Temas Cubiertos en esta aplicación:

### Formularios por Template

* Modularización de la aplicación
* Boostrap 5 - [getbootstrap](https://getbootstrap.com/)
* Estructura de la aplicación de media a gran escala
* Lazy Load
* Template driven
* FormsModule
* ViewChild
* Two way databinding
* Formularios dinámicos
* Checks, radios y switches
* Directivas personalizadas
* Manejo del formulario y validaciones
* Encapsular módulos y scope de los mismos

### Formularios Reactivos

* [Formularios Reactivos](https://angular.io/guide/reactive-forms#reactive-forms)
* Validaciones propias de Angular
* Arreglos y objetos anidados
* FormBuilder
* FormGroup
* FormArray

### Validacion Formularios Reactivos

* Validaciones manuales
* Validaciones asíncronas
* Validar contra expresiones regulares
* Separar la lógica de validaciones
* Estado del formulario
* Mensajes de error personalizados


## Development server
Ejecutar`ng serve` para el servidor de desarrollo. Navegar a  `http://localhost:4200/`. La aplicación será automaticamente recargada si se realizan cambios en el código fuente.

# Backend Server
Para simular el servidor backend se utiliza el paquete [JSON Server](https://www.npmjs.com/package/json-server).

Para instalar el **JSON server** se debe ejecutar el siguiente comando:
```text
npm install -g json-server
```

La base de datos ``db.json`` debe tener la siguiente estructura:

```json5
{
  "usuarios": [
    {
      "id": 1,
      "email": "test1@test.com",
      "username": "test1"
    },
    {
      "id": 2,
      "email": "test2@test.com",
      "username": "test2"
    },
    {
      "id": 3,
      "email": "test3@test.com",
      "username": "test3"
    }
  ]
}
```
Para ejecutar el servidor, dentro de la carpeta donde se encuentra el archivo ``db.json``, se debe ejecutar el siguiente comando:

```text
json-server --watch db.json
```

## Application en producción
[FormulariosApp](https://formulariosapp.netlify.app/)
