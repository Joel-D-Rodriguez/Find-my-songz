# 🎵 Find My Songz

**Find My Songz** es una aplicación web interactiva que permite buscar canciones utilizando la [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html). Muestra resultados con reproductores de audio, carátulas de álbumes, y enlaces directos a Spotify y YouTube.

![Find My Songz Screenshot](captures/capture1.png)

## 🌐 Accede al proyecto online

🔗 [https://joel-d-rodriguez.github.io/Find-my-songz](https://joel-d-rodriguez.github.io/Find-my-songz)

---

## 🛠️ Tecnologías y herramientas utilizadas

| Recurso                  | Uso                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| **HTML5**                | Estructura principal de la aplicación                                                    |
| **CSS3**                 | Estilos visuales y modo oscuro responsive                                                |
| **JavaScript**           | Lógica de búsqueda, paginación, reproductor de audio y dark mode                         |
| **iTunes Search API**    | Fuente de los datos musicales, incluyendo nombre de canción, artista, preview y carátula |
| **Git y GitHub**         | Control de versiones y despliegue vía GitHub Pages                                       |
| **Visual Studio Code**   | Editor de código principal                                                               |

---

## 🚀 Características destacadas

* 🔍 Búsqueda dinámica por canción o artista
* 🎧 Reproductor de audio integrado para escuchar previews
* 📄 Paginación automática para explorar múltiples resultados
* 🌓 Modo oscuro para una experiencia visual cómoda
* 📱 Diseño responsive optimizado para móviles

---

## 📸 Capturas de pantalla

### Página de búsqueda

![Captura búsqueda](captures/capture2.png)

---

## 🧠 Cómo funciona internamente

1. **Entrada del usuario:**

   * Al escribir una canción/artista y presionar "Buscar", se realiza una petición a la iTunes API limitando a 50 resultados.

2. **Renderizado y paginación:**

   * Los resultados se dividen dinámicamente en páginas de 10 items. La interfaz actualiza el DOM sin recargar la página.

3. **Control de audio:**

   * Solo una canción se puede reproducir al mismo tiempo.

4. **Modo oscuro:**

   * Se alterna mediante una clase `dark-mode`, afectando todos los componentes visuales.

---

## 🧑‍💻 Autor

Desarrollado con dedicación por **Joel Rodríguez**. Proyecto personal con fines educativos y de mejora continua.

> "La música es el lenguaje universal, y ahora puedes encontrarla en un clic."

---

## 📬 Contacto

¿Tienes ideas o quieres contribuir? ¡Bienvenido!

📧 Email: [joeldev.contacto@gmail.com](mailto:joerh0803@gmail.com)

💻 GitHub: [Joel-D-Rodriguez](https://github.com/Joel-D-Rodriguez)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Libre para modificar y compartir con atribución.

