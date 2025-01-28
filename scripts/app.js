// Función para cargar contenido dinámico
function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(HTTP error! status: ${response.status});
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('dynamic-content').innerHTML = html; // Inserta el contenido dinámico
        })
        .catch(err => {
            console.error('Error al cargar el contenido:', err);
            document.getElementById('dynamic-content').innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error al cargar el contenido.
                </div>`;
        });
}

// Añadir eventos a los enlaces dinámicos
document.addEventListener('DOMContentLoaded', () => {
    // Carga inicial del contenido (Home por defecto)
    loadContent('home.html');

    // Configurar eventos para los enlaces dinámicos
    document.querySelectorAll('.dynamic-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la recarga de la página
            const url = this.getAttribute('href'); // Obtén la URL del enlace
            loadContent(url); // Llama a la función para cargar el contenido
        });
    });
});