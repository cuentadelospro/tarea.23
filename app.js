console.log('Página IDGS cargada');
 
document.addEventListener('DOMContentLoaded', function() {
    const tabla = document.querySelector('table');
    tabla.addEventListener('click', function() {
        alert('Tabla de materias IDGS');
    });
});