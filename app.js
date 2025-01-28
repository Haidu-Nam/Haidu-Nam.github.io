// Función para cargar contenido dinámico
function loadContent(url) {
    fetch(url) // Solicita el archivo HTML
        .then(response => {
            if (!response.ok) {
                throw new Error(Error HTTP! status: ${response.status});
            }
            return response.text(); // Devuelve el contenido como texto
        })
        .then(html => {
            const dynamicContent = document.getElementById('dynamic-content');
            dynamicContent.innerHTML = html; // Inserta el contenido en el contenedor
        })
        .catch(error => {
            console.error('Error al cargar contenido:', error);
            document.getElementById('dynamic-content').innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error al cargar el contenido.
                </div>`;
        });
}

// Configurar enlaces dinámicos
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el contenido inicial (home.html)
    loadContent('home.html');

    // Manejar clics en enlaces con la clase 'dynamic-link'
    document.querySelectorAll('.dynamic-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Evita la recarga de la página
            const url = link.getAttribute('href'); // Obtén la URL del enlace
            loadContent(url); // Carga el contenido dinámico
        });
    });
})