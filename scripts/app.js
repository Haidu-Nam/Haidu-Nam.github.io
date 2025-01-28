// Función para cargar contenido dinámico dentro del contenedor
function loadContent(url) {
    fetch(url) // Realiza una solicitud HTTP GET al archivo HTML
        .then(response => {
            if (!response.ok) {
                throw new Error(Error al cargar el contenido: ${response.statusText});
            }
            return response.text();
        })
        .then(html => {
            // Inserta el contenido HTML en el contenedor dinámico
            document.getElementById('dynamic-content').innerHTML = html;
        })
        .catch(err => {
            console.error('Error:', err);
            document.getElementById('dynamic-content').innerHTML = <p>Error al cargar el contenido.</p>;
        });
}

// Añadir eventos a los enlaces con la clase 'dynamic-link'
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dynamic-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la recarga de la página
            const url = this.getAttribute('href'); // Obtiene la URL del enlace
            loadContent(url); // Llama a la función para cargar el contenido
        });
    });

    // Carga inicial del contenido (por ejemplo, la página de inicio)
    loadContent('home.html');
});