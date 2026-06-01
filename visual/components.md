# Components

## Header

Header fijo con logo textual, navegación principal y CTA. Al hacer scroll suma blur, sombra suave y borde inferior. En mobile usa menú hamburguesa con apertura suave.

## Botones

- Primario: fondo `#6E473B`, texto claro, hover `#291C0E`.
- Secundario: fondo claro translúcido, borde suave y texto oscuro.
- Focus visible con outline cálido.

## Cards

Cards claras con borde `#BEB5A9` en baja opacidad. Hover con elevación leve y sombra suave. Las cards de especialidades usan una superficie translúcida cacao sobre fondos espresso, con borde más visible, sombra contenida y barra superior animada para separarlas del fondo sin volverlas pesadas.

## Stats

Los datos de trayectoria se resuelven como cards sutiles dentro de una grilla editorial. El `+20 años` debe leerse como una credencial clara, no como un bloque protagonista ni sticky.

## Formulario

Campos claros, bordes suaves y validación básica. Al enviar, el formulario abre WhatsApp con mensaje prearmado. Los errores deben mostrarse debajo de cada campo y no depender solo del color.

## Footer

Fondo oscuro, texto crema y nota ética visible. Debe cerrar el sitio con información clara de contacto y responsabilidad profesional.

## Botón flotante WhatsApp

Botón circular fijo en esquina inferior derecha. Usa verde WhatsApp moderado, tamaño contenido y `aria-label` accesible: `Agendar consulta por WhatsApp`.

## Estados hover/focus

Todos los elementos interactivos deben tener hover sutil y focus visible. Evitar movimientos grandes: usar `translateY` leve, sombras suaves y cambios de contraste.

## Microinteracciones

- Fade-up escalonado en hero al cargar.
- Reveal con `IntersectionObserver` al hacer scroll.
- Header con clase `scrolled`.
- Menú mobile con cierre al seleccionar link.
