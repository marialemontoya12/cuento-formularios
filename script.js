// Escucha el evento 'DOMContentLoaded' que se dispara cuando el contenido del DOM se ha cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Agrega un manejador de eventos para el formulario con el id 'story-form' cuando se envía
    document.getElementById('story-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional (recarga de la página)
        
        // Obtiene el valor del campo de entrada con id 'nombre'
        const nombre = document.getElementById('nombre').value;
        // Obtiene el valor del campo de entrada con id 'apodo'
        const apodo = document.getElementById('apodo').value;
        // Obtiene el valor del campo de entrada con id 'color-cabello'
        const colorCabello = document.getElementById('color-cabello').value;
        // Obtiene el valor del campo de entrada con id 'color-ojos'
        const colorOjos = document.getElementById('color-ojos').value;
        // Obtiene el valor del campo de entrada con id 'edad'
        const edad = document.getElementById('edad').value;
        // Obtiene el valor del campo de entrada con id 'hobby'
        const hobby = document.getElementById('hobby').value;


        // Array de plantillas de cuentos
        const plantillas = [
            `Había una vez una persona llamada ${nombre}, que era conocida por su apodo especial: ${apodo}. 
            ${nombre} tenía un hermoso cabello de color ${colorCabello} y unos ojos brillantes de color ${colorOjos}. 
            A sus ${edad} años, ${nombre} disfrutaba mucho de su hobby favorito: ${hobby}. 
            Cada día, ${nombre} se aventuraba a explorar nuevas formas de disfrutar su pasatiempo, y vivió muchas 
            emocionantes aventuras gracias a su pasión. ¡Y así, ${nombre} vivió feliz y contento, compartiendo su alegría con todos!`,
            
            `En un rincón del mundo vivía ${nombre}, un/a joven con el apodo de ${apodo}. ${nombre} se destacaba por su cabello de ${colorCabello} y sus ojos de ${colorOjos}. 
            Con ${edad} años, ${nombre} dedicaba su tiempo libre a ${hobby}, lo cual lo/la llenaba de felicidad. 
            Sus aventuras y descubrimientos mientras practicaba su hobby lo/la llevaron a vivir muchas experiencias inolvidables. ¡Así es como ${nombre} encontró la magia en lo que más amaba!`,
            
            `${nombre}, conocido/a por su apodo ${apodo}, tenía un cabello tan ${colorCabello} como el atardecer y unos ojos tan ${colorOjos} como el cielo despejado. 
            Con ${edad} años, ${nombre} encontraba su mayor alegría en ${hobby}. 
            Cada día, ${nombre} se sumergía en su hobby con pasión, creando historias y memorias llenas de emoción. ¡La vida de ${nombre} estaba llena de color y aventura gracias a su amor por ${hobby}!`,
            
            `En un pequeño pueblo vivía ${nombre}, quien llevaba el apodo de ${apodo}. Su cabello de ${colorCabello} y sus ojos ${colorOjos} eran características que todos admiraban. 
            A los ${edad} años, ${nombre} tenía una pasión única: ${hobby}. 
            Con cada nuevo proyecto relacionado con ${hobby}, ${nombre} creaba magia y vivía aventuras inolvidables. ¡De esta manera, ${nombre} convirtió su hobby en una fuente inagotable de felicidad y descubrimiento!`
        ];

// Selecciona una plantilla al azar
const plantillaElegida = plantillas[Math.floor(Math.random() * plantillas.length)];

// Genera el cuento usando la plantilla seleccionada
const cuento = plantillaElegida;

// Muestra el cuento generado en la página
document.getElementById('cuento').textContent = cuento; // Asigna el cuento generado al contenido del elemento con id 'cuento'
document.getElementById('cuento-generado').style.display = 'block'; // Muestra el div que contiene el cuento generado
});

// Manejador del formulario general (si existe)
document.querySelector('form').addEventListener('submit', function(event) {
    // Obtiene el valor del campo de entrada con id 'nombre'
    const nombre = document.getElementById('nombre').value;
    // Obtiene el valor del campo de entrada con id 'email'
    const email = document.getElementById('email').value;
    // Obtiene el valor del área de texto con id 'productos'
    const productos = document.getElementById('productos').value;

    // Verifica si alguno de los campos 'nombre', 'email' o 'productos' está vacío
    if (!nombre || !email || !productos) {
        // Muestra una alerta si algún campo está vacío
        alert('Por favor, complete todos los campos.');
        // Cancela el envío del formulario para que el usuario pueda corregir los errores
        event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
    } else {
        // Muestra una alerta si todos los campos están completos
        alert('Cotización enviada con éxito.');
        }
    });
});
