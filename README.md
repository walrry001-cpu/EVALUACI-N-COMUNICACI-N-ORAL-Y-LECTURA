# Evaluación de lectura · 5.° "E" · Comunicación

Aplicación web (HTML estático) para evaluar comprensión lectora y lectura en voz alta. Dos lecturas, 6 preguntas cada una, niveles C / B / A / AD con porcentajes e informe imprimible.

## Contenido
- `index.html` — la aplicación
- `config.js` — datos de la I.E. y del docente (editable)
- `icono/` y `manifest.webmanifest` — icono y opción "Añadir a pantalla de inicio"
- `recursos/` — PDF para imprimir
- `.nojekyll` — necesario para GitHub Pages

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub (por ejemplo `evaluacion-lectura-5e`).
2. Sube TODO el contenido de esta carpeta (incluido `.nojekyll` y la carpeta `icono`).
3. Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. En 1–2 minutos estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Seguridad y privacidad (importante)
- GitHub Pages gratuito exige repositorio **público**: cualquiera con el enlace verá la aplicación. Por eso **no escribas aquí nombres de estudiantes ni claves de API**. La nómina se pega dentro de la aplicación y se queda solo en tu navegador.
- La clave de API de Anthropic se escribe en la aplicación (Calificar → Ajustes de IA). Nunca la guardes en `config.js` ni en el repositorio.
- Al usar "Calificar con IA", la imagen de la hoja se envía a la API de Anthropic. Al usar el micrófono, el navegador envía el audio a su servicio de voz (Google en Chrome). Se trata de menores: revisa la normativa de tu I.E./UGEL y pide autorización. Cubre el nombre en las fotos.

## Uso
1. Estudiante: pega la nómina, elige al estudiante, imprime las hojas (una o toda la nómina).
2. El estudiante responde a mano. Fotografía cada hoja (JPG/PNG, buena luz, sin sombras).
3. Calificar: sube la foto → "Calificar con IA" propone 2/1/0 con la transcripción → tú revisas y corriges (en amarillo, lo dudoso).
4. Voz alta: "Leer con micrófono" da una estimación; confirma escuchando tú.
5. Informe: "Generar informe" e imprimir.

## Límites
- La IA puede equivocarse con letra infantil. Es una propuesta; la decisión final es del docente.
- El reconocimiento de voz del navegador corrige errores sin avisar y funciona peor con voces infantiles: tiende a sobrestimar.
- Niveles referenciales: AD ≥ 85 %, A 65–84 %, B 50–64 %, C < 50 %.

## Si actualizas la aplicación
GitHub Pages guarda copias unos 10 minutos y el navegador también. Tras subir cambios: cambia `?v=5` por `?v=6` en `index.html` (iconos, config, manifest) y recarga con Ctrl+F5 (en celular, abre en pestaña privada).
