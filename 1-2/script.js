function updateCountdown() {
    // Fecha final: Defínela según sea necesario
    // Por ejemplo, el 14 de febrero de 2026 a las 00:00
    const targetDate = new Date('2026-02-13T00:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            clearInterval(timer);
            // Eliminar header
            document.querySelector('header').style.display = 'none';
            // Palabra de amor cifrada con César +2: "TE AMO" → "VG COQ"
            document.getElementById('countdown').innerHTML = '<div style="margin-bottom: 30px; font-size: 2em; color: #ffd700;">VG COQ</div><div style="font-size: 1.5em; color: #ff69b4; font-weight: bold;">1/2 COMPLETADO</div>';
            // Mostrar botón
            document.getElementById('nextButton').style.display = 'block';
        }
    }, 1000);
}

// Iniciar el contador cuando la página carga
updateCountdown();

// Configurar botón para redirigir (cambia la URL según sea necesario)
document.getElementById('nextButton').addEventListener('click', function() {
    // Reemplaza 'URL_DE_DESTINO' con la página a la que deseas redirigir
    window.location.href = 'https://maxroblero.github.io/Te-Amo/2-2/';
});
