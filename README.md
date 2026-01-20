# Tarea Dev Junior - Ruuf

## 🎯 Objetivo

El objetivo de este ejercicio es poder entender tus habilidades como programador/a, la forma en que planteas un problema, cómo los resuelves y finalmente cómo comunicas tu forma de razonar y resultados.

## 🛠️ Problema

El problema a resolver consiste en encontrar la máxima cantidad de rectángulos de dimensiones "a" y "b" (paneles solares) que caben dentro de un rectángulo de dimensiones "x" e "y" (techo).

## 🚀 Cómo Empezar

### Opción 1: Solución en TypeScript
```bash
cd typescript
npm install
npm start
```

### Opción 2: Solución en Python
```bash
cd python
python3 main.py
```

## ✅ Casos de Prueba

Tu solución debe pasar los siguientes casos de prueba:

- Paneles 1x2 y techo 2x4 ⇒ Caben 4
- Paneles 1x2 y techo 3x5 ⇒ Caben 7
- Paneles 2x2 y techo 1x10 ⇒ Caben 0

---

## 📝 Tu Solución



---

## 💰 Bonus (Opcional)

Si completaste alguno de los ejercicios bonus, explica tu solución aquí:

### Bonus Implementado
*[Indica cuál bonus implementaste: Opción 1 (techo triangular) o Opción 2 (rectángulos superpuestos)]*



### Explicación del Bonus
*[Explica cómo adaptaste tu algoritmo para resolver el bonus]*

---

## 🤔 Supuestos y Decisiones

Primero, en lugar de solo dividir el área total, el cual fue el pensamiento inicial, me imaginé el techo como en una hoja de cuaderno donde vas poniendo las piezas y mi lógica fue la siguiente:

1. **Probar dos caminos:** El programa calcula qué pasa si pongo los paneles "parados" y qué pasa si los pongo "acostados". Como resultado final, se queda con el número más alto, es decir, la mayor cantidad de paneles.
2. **Aprovechar los restos:** Después de llenar la mayor parte del techo, siempre quedan unos restos de espacio en los bordes. Mi código revisa si en esos espacios sobrantes de área puedo meter algún panel extra dándolo vuelta.