# Andrea Brítez · Web editorial

![Vista de la web](docs/preview.jpg)

[Ver sitio ↗](https://dra-andrea-britez.vercel.app/)

Web profesional para la Dra. Andrea Brítez. Una landing de estética editorial con tipografía serif, una paleta cálida y una composición que prioriza la trayectoria, los servicios y la lectura.

## Diseño e interacción

- Sistema visual en tonos cacao y crema, con Cormorant Garamond y Jost.
- Secciones de presentación, trayectoria, especialidades, atención y contacto.
- Navegación responsive y animaciones de entrada sutiles.
- Formulario con validación nativa que prepara una consulta para WhatsApp; el sitio no almacena mensajes.
- Metadatos Open Graph para compartir enlaces y estructura semántica de contenidos.

## Desarrollo local

No requiere instalar dependencias de frontend. Necesita Node.js para el servidor de desarrollo:

```bash
npm run dev
```

El servidor muestra la dirección local; normalmente usa `http://127.0.0.1:4173`.

## Estructura

```text
index.html             Contenido y estructura
css/styles.css         Componentes y responsive
css/visual-system.css  Colores, tipografía y variables
js/main.js             Interacciones y enlaces
scripts/dev-server.js  Servidor local
visual/                Guías del sistema visual
docs/preview.jpg       Captura local del proyecto
```

## Editar y publicar

Los textos están en `index.html`. Los enlaces de contacto y la imagen de portada se configuran en `js/main.js`. Las guías de diseño están en `visual/`.

Para publicar, un hosting estático debe servir `index.html`, `css/` y `js/`, conservando sus rutas relativas. El proyecto no necesita compilación.

La captura corresponde al proyecto ejecutado localmente. La demo pública permite explorar el diseño y sus interacciones.
