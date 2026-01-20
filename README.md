# Desafío de Paneles Solares - Ruuf 

¡Hola! Esta es mi solución para el desafío de optimización de paneles. El objetivo es calcular cuántos paneles rectangulares caben en un techo, tratando de no desperdiciar nada de espacio.

## ¿Cómo resolví el problema?

En lugar de solo dividir el área total, el cual fue el pensamiento inicial, me imaginé el techo como en una hoja de cuaderno donde vas poniendo las piezas. Mi lógica fue la siguiente:

1. **Pruebo dos caminos:** El programa calcula qué pasa si pongo los paneles "parados" y qué pasa si los pongo "acostados". Como resultado final, se queda con el número más alto, es decir, la mayor cantidad de paneles.
2. **Aprovecho los restos:** Después de llenar la mayor parte del techo, siempre quedan unos restos de espacio en los bordes. Mi código revisa si en esos espacios sobrantes de área puedo meter algún panel extra dándolo vuelta.

## Lenguaje utilizado

- **TypeScript:** Elegí este lenguaje porque es con el que tengo más familiaridad. Además, me gusta el manejo de variables y tipos que ofrece.

## Inicialización

Para ver los resultados en la terminal:

1. Instalar las dependencias necesarias:
   ```bash
   npm install
   ```
2. Ejecutar pruebas:
   ```bash
   npm start
   ```