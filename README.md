# Página Web para la pizzería El Pizzeton D'Gutí
Este proyecto es una aplicación web desarrollada con Astro, un framework que permite la integración de React para la creación de
aplicaciones web rápidas y escalables. La aplicación está diseñada para cumplir con los requisitos impuestos por el cliente.

---

## Requisitos
- La página debe presentar un diseño responsive y optimizado para dispositivos móviles.
- Debe de poder mostrar una selección de fotos y descripciones de los platos que son especialidades de la pizzería.
- Debe de mostrar una selección de fotos delo local de la pizzería.
- Tiene que mostrar un listado de los platos disponible en el día, clasificados por categorías.
- El precio de los platos de poder mostrarse en diferentes monedas, según la taza de cambio vigente ese día.
- Debe de poder mostrar una lista de los eventos que se desarrollan en la pizzería y ofrecer la información de contacto necesaria para poder reservar.
- Los usuarios deben de poder dejar sus opiniones sobre la pizzería en la página web.
- Debe de mostrar los datos de los empleados y propietario.
- Se debe mostrar toda la información de contacto de la pizzería (localización en el mapa, horarios, dirección).

## Comenzando
Estas instrucciones te proporcionarán una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

---

### Prerequisitos
Para ejecutar este proyecto, necesitarás tener instalado lo siguiente:

- Node.js v20 o superior
- Astro CLI
- Tener acceso a la API desarrollada por este equipo. `https://github.com/whatarelive/pizzeton-api`

---

### Configurar .env
1. Crear el archivo `.env` siguiendo el `.env.template`.
2. Cambiar el valor del `API_URL` por la url de la API a utilizar.

### Instalación
1. Primero, clona el repositorio:

```bash
  git clone https://github.com/whatarelive/pizzeton-web-oficial.git
```

2. Instalar las dependencias:
```bash
   cd cd pizzeton-web-oficial
   npm install
```

3. Ejecutar la aplicación en modo desarrollo:
```bash
   npm run dev
```

4. Abre el navegador y visita `http://localhost:4321` para ver la aplicación en funcionamiento.

----

### Otros comandos utiles

| Comandos                  | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run build`           | Crear versión de producción `./dist/`            |
| `npm run preview`         | Lanzar servidor de la versión de producción.     |
| `npm run astro ...`       | Ejecutar CLI de Astro  `astro add`, `astro check`|
| `npm run astro -- --help` | Mostrar ayuda de Astro CLI                       |

----

### Estructura del Proyecto
`public/:` Archivos estáticos como imágenes, fuentes y otros recursos que se pueden servir directamente.  
`src/:` Código fuente de la aplicación.
  |--> `actions/:` Funciones que solo se ejecutaran en el servidor.
        |--> `helpers/:` Funciones auxiliares que se ejecutan dentro de las actions.
        |--> `validations/:` Esquemas de validación de los parametros de las actions.
  |--> `api/:` Configuración de Axios para conectar con el API.
  |--> `components/:` Componentes de Astro pertenecientes a la página.
        |--> `react/:` Componentes de React pertenecientes a la página.      
  |--> `data/:` Data que se usa en la ui de la página principal.     
  |--> `hooks/:` Custom Hooks para los componentes de React.     
  |--> `layout/:` Layouts pertenecientes a la página.
  |--> `pages/:` Conjunto de páginas que componen la aplicación web.
        |--> `auth/:` Conjunto de páginas que pertenecen al módulo de autentificación.     
  |--> `store/:` Configuración de los estados globales de la página.     
  |--> `views/:` Pantallas de la página principal.  
       `env.d.ts:` Configuración de tipos para las variables de Astro.  
       `global.css:` Estilos globales de la página.
       `interfaces.d.ts:` Configuración de tipos e interfaces de TypeScript.
`astro.config.mjs:` Configuración de Astro.  
`package.json:` Dependencias y scripts del proyecto.
`tailwind.config.mjs:` Configuración de Tailwind
`tsconfig.json:` Configuración de TypeScript.  

----

### Construido Con
- `React :` Biblioteca de JavaScript para construir interfaces de usuario dinámicas.
- `Astro:` Framework compatible con React que permite la renderización del lado del servidor y generación de sitios estáticos. 
- `TypeScript :` Lenguaje de programación tipado.
- `Tailwind :` Biblioteca de estilos de CSS.  
- `Node.js :` Entorno de ejecución para JavaScript en el servidor.

### Contribuciones
Este fue desarrollado como solución a una prueba técnica, por lo tanto no se aceptan contribuciones a este proyecto.

### Licencia
Este proyecto no está bajo ninguna Licencia.
