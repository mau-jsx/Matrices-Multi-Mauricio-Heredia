# Registro de Personas en Python y JavaScript

## Descripción
Este proyecto implementa un sistema de registro de personas utilizando Python y JavaScript. El objetivo es gestionar una matriz multidimensional donde cada elemento representa los datos de una persona, incluyendo:
- Nombre
- Apellido
- DNI
- Lista de teléfonos
- Lista de hijos

El usuario puede interactuar con el programa a través de un menú que permite ingresar nuevos datos, visualizar todos los registros y filtrar por DNI.

## Estructura del Proyecto
El proyecto se divide en dos carpetas:
- `JS-Matrices-Multi/` (contiene la implementación en JavaScript)
  - `RegistroPersona.js`
- `Python-Matrices-Multi/` (contiene la implementación en Python)
  - `RegistroPersona.py`

## Funcionalidades
El programa ofrece las siguientes opciones mediante un menú interactivo:

1. **Ingresar nueva persona**: Permite al usuario ingresar los datos de una persona por línea de comandos.
2. **Mostrar todos los datos**: Muestra todos los registros ingresados.
3. **Filtrar por DNI**: Permite buscar y mostrar la información de una persona específica.
4. **Salir**: Termina la ejecución del programa.

## Ejemplo de Uso
### Menú Principal
```
--- Menú ---
1. Ingresar nueva persona
2. Mostrar todos los datos
3. Filtrar por DNI
4. Salir
Elige una opción:
```

### Ingreso de Datos
```
Ingresa el nombre: Juan
Ingresa el apellido: Pérez
Ingresa el DNI: 12345678
Ingresa los teléfonos separados por comas: 555-1234, 555-5678
Ingresa los nombres de los hijos separados por comas: Pedro, Ana
```

### Mostrar Todos los Datos
```
[
  ["Juan", "Pérez", "12345678", ["555-1234", "555-5678"], ["Pedro", "Ana"]]
]

Datos ingresados:
Juan Pérez, DNI: 12345678, Teléfonos: 2 teléfono(s), Hijos: 2
```

### Filtrar por DNI
```
Ingresa el DNI para filtrar: 12345678
Datos de Juan Pérez:
DNI: 12345678, Teléfonos: 2 teléfono(s), Hijos: 2

Ingresa el DNI para filtrar: 00112233
No se encontró una persona con ese DNI.
```

## Requisitos
- Para ejecutar el código en **Python**:
  - Python 3.x instalado.
  - Ejecutar con: `python RegistroPersona.py`

- Para ejecutar el código en **JavaScript**:
  - Node.js instalado.
  - Ejecutar con: `node RegistroPersona.js`


