# Dra. Andrea Brítez | Landing profesional

Sitio web estático (one-page) profesional para la **Dra. Andrea Brítez**, psicóloga clínica en Asunción, Paraguay. Diseñado con una estética premium, cálida, humana y editorial, alineada a su trayectoria y labor académica.


3. Completá las opciones sugeridas por defecto (todas con enter). Vercel detectará el archivo `index.html` automáticamente y publicará el sitio web en segundos.

### Opción C: GitHub Pages
1. Subí este proyecto a un repositorio público o privado en GitHub.
2. Ingresá a las configuraciones de tu repositorio (**Settings**).
3. Hacé click en la pestaña **Pages** (menú lateral izquierdo).
4. En **Build and deployment**, seleccioná `Deploy from a branch` y definí la rama principal (ej: `main` o `master`) y el directorio raíz `/root`.
5. Guardá los cambios y GitHub Pages publicará tu web en minutos de forma automática.

---

## 🛠️ Desarrollo Local

No requiere de instalación de frameworks pesados ni dependencias externas.

### Método 1 (Recomendado)
Desde VS Code o una terminal en la raíz del proyecto, corré el servidor de desarrollo ultraligero que viene preconfigurado:
```bash
npm run dev
```
Luego abrí en tu navegador la URL que se te indica en la consola (por defecto: `http://localhost:4173`).

### Método 2
Al ser HTML puro, también podés dar doble click sobre el archivo `index.html` en tu explorador de archivos para cargarlo localmente en tu navegador.

---

## 📋 Arquitectura de Archivos

```txt
andrea-britez-portfolio/
├── index.html            # Código estructural y textos de la Landing Page
├── package.json          # Script de servidor de desarrollo local
├── README.md             # Guía e instrucciones de despliegue
├── css/
│   ├── styles.css        # Diseño de componentes, tipografía y estilos generales
│   └── visual-system.css # Sistema visual global, reseteo y variables raíz
├── js/
│   └── main.js           # Lógica interactiva, envío a WhatsApp y control de UI
├── scripts/
│   └── dev-server.js     # Script del servidor local de desarrollo
└── visual/               # Documentación complementaria del sistema de diseño
    ├── brand-guide.md
    ├── color-system.md
    └── typography.md
```

---

## ✏️ Ediciones Frecuentes

### 1. Cambiar el número de WhatsApp receptor
El número de WhatsApp está configurado en una sola constante en `js/main.js`:
```javascript
const WHATSAPP_NUMBER = "595981596430";
```
Reemplazá este número con el correspondiente (incluyendo el código de país, sin espacios ni el signo +) para sincronizar de manera automatizada el envío del formulario y todos los links interactivos del sitio.

### 2. Cambiar la foto principal de Andrea (Cloudinary)
La imagen principal del Hero utiliza un recorte por servidor para máxima optimización y zoom. Podés cambiar la foto principal reemplazando el valor de la constante `ANDREA_IMAGE_URL` en `js/main.js`:
```javascript
const ANDREA_IMAGE_URL = "https://res.cloudinary.com/deqkn7ti2/image/upload/c_fill,g_face,z_2.6,w_900,h_1100,q_auto,f_auto/v1780252271/WhatsApp_Image_2026-05-31_at_15.01.58_edvrou.jpg";
```
Si deseas usar una foto local, coloca tu archivo en `assets/images/` y actualiza la URL a una ruta relativa en el código (ej: `./assets/images/tu-foto.jpg`).

---

## ✨ Características Técnicas y UI
* **SEO & Metatags:** Preparado con descriptivos precisos, estructuración semántica jerárquica (`h1`, `h2`, `h3`, etc.) y tags OpenGraph listos para compartir.
* **Interactividad Humana:** Botón flotante inteligente de WhatsApp que se oculta de forma suave al llegar al formulario de contacto para no entorpecer la vista del usuario.
* **Formulario Seguro:** Valida de forma nativa los campos requeridos y realiza un redireccionamiento automático con la consulta del paciente preestablecida en un formato ordenado y codificado de forma segura.
* **Estilo Editorial Premium:** Utiliza tipografía moderna de Google Fonts, paleta de colores cacao y cappuccino cálidos, y animaciones de entrada muy suaves para una experiencia altamente sofisticada.
