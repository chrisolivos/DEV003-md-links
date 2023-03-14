# Markdown Links
*	Este proyecto se realizó siguiendo estas consideraciones El Proyecto 
* En este proyecto se usó JS y Node.JS (Colors, Markdown-it, Yargs)


## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios de aceptación del proyecto](#4-criterios-de-aceptación-del-proyecto)
* [5. Instlación y Uso](#5-instalación-y-uso)
* [6. Consideraciones Técnicas](#7-consideraciones-técnicas)


***

## 1. Preámbulo

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).
Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.
Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.
 
## 2. Resumen del proyecto
Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, ...
En este proyecto nos alejamos un poco del navegador para construir un programa que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el sistema archivos, con el entorno (proceso, env, stdin/stdout/stderr), ...
En este proyecto se creó una herramienta de línea de comando (CLI) así como la propia librería (o biblioteca - library) en JavaScript.
Diseñar tu propia librería es una experiencia fundamental para cualquier desarrollador porque que te obliga a pensar en la interfaz (API) de tus módulos y cómo será usado por otros developers. Debes tener especial consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

## 3. Objetivos de aprendizaje
JavaScript
•	  Diferenciar entre tipos de datos primitivos y no primitivos
•	  Arrays (arreglos)
•	  Objetos (key, value)
•	  Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
•	  Funciones (params, args, return)
•	  Recursión o recursividad
•	  Módulos de CommonJS
•	  Diferenciar entre expresiones (expressions) y sentencias (statements)
•	  Callbacks
•	  Promesas
•	  Pruebas unitarias (unit tests)
•	  Pruebas asíncronas
•	  Uso de mocks y espías
•	  Pruebas de compatibilidad en múltiples entornos de ejecución
•	  Uso de linter (ESLINT)
•	  Uso de identificadores descriptivos (Nomenclatura y Semántica)
Node.js
•	  Instalar y usar módulos con npm
•	  Configuración de package.json
•	  Configuración de npm-scripts
•	  process (env, argv, stdin-stdout-stderr, exit-code)
•	  File system (fs, path)
Control de Versiones (Git y GitHub)
•	  Git: Instalación y configuración
•	  Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
•	  Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)
•	  GitHub: Creación de cuenta y repos, configuración de llaves SSH
•	  GitHub: Despliegue con GitHub Pages
•	  GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)
•	  GitHub: Organización en Github (projects | issues | labels | milestones | releases)
HTTP
•	  Consulta o petición (request) y respuesta (response).
•	  Codigos de status de HTTP

## 4. Criterios que cumple el proyecto
General
•	  Puede instalarse via npm install --global <github-user>/md-links

README.md
•	  Un board con el backlog para la implementación de la librería.
•	  Documentación técnica de la librería.
•	  Guía de uso e instalación de la librería

API mdLinks(path, opts)
•	  El módulo exporta una función con la interfaz (API) esperada.
•	  Implementa soporte para archivo individual
•	  Implementa soporte para directorios
•	  Implementa options.validate
•	  Agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.

CLI
•	  Expone ejecutable md-links en el path (configurado en package.json)
•	  Se ejecuta sin errores / output esperado
•	  Implementa --validate
•	  Implementa --stats
•	  Pruebas / tests
•	  Pruebas unitarias cubren un mínimo del 70% de statements, functions, lines, y branches.
•	  Pasa tests (y linters) (npm test).
## 5. Instalación y Uso
