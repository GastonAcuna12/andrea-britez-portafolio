# Layout notes

## Estructura de secciones

1. Header fijo.
2. Hero.
3. Sobre Andrea.
4. Trayectoria y credenciales.
5. Especialidades.
6. Atención para cada etapa.
7. Modalidad presencial y online.
8. Contacto.
9. Footer.
10. Botón flotante de WhatsApp.

## Hero

El hero usa un grid de dos columnas en desktop: contenido a la izquierda y foto a la derecha. En mobile se apila con texto primero y composición visual después.

La foto principal se carga desde Cloudinary mediante la constante `ANDREA_IMAGE_URL` en `js/main.js`. La composición usa un marco editorial limpio: contenedor vertical, bordes redondeados suaves, borde fino y sombra contenida. No usar feather, máscaras ni veladuras sobre la imagen; la prioridad es que Andrea se vea nítida, centrada y protagonista.

## Espaciados

Las secciones usan padding amplio con `clamp()` para sostener aire visual en desktop y mobile. Los grids mantienen gaps generosos para que la lectura no se sienta comprimida.

## Sobre Andrea

La sección debe mantener el foco en la lectura biográfica. En desktop usa dos columnas equilibradas: texto a la izquierda y un grid 2x2 de credenciales a la derecha. Evitar bloques destacados grandes en esta sección para no competir con el relato principal.

## Trayectoria

La trayectoria se presenta como una sección editorial clara: heading y texto breve arriba, seguido por una grilla de credenciales livianas. No usar bloques sticky ni stats gigantes; el `+20 años` debe integrarse como una card más dentro del sistema.

## Responsive

- Desktop: grids de 2 o 3 columnas según contenido.
- Tablet: reducción a 2 columnas para cards.
- Mobile: una columna, botones de ancho completo y navegación desplegable.

## Aire visual

Evitar llenar cada franja con demasiados elementos. Cada sección debe tener un foco claro: relato, credenciales, áreas clínicas, público, modalidad o contacto.

## Transición hero / contenido

El final del hero usa una veladura de fondo y una curva sutil mediante pseudo-elementos para evitar cortes duros entre módulos. La sección siguiente mantiene una entrada clara y cálida con un degradado mínimo, especialmente pensado para resolver la zona inferior derecha del hero.

## Foto principal

La imagen ideal es vertical, de cuerpo o plano amplio, fondo blanco, Andrea de pie sosteniendo una tablet. Usar buena iluminación y recorte limpio. El encuadre debe mantener a Andrea grande y balanceada dentro del marco, dejando respirar cabeza y manos.
