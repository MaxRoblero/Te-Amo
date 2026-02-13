function updateCountdown() {
    // Ajusta la fecha final según lo que quieras
    const targetDate = new Date('2026-02-14T00:00:00').getTime();
    document.getElementById('finalMessage').style.display = 'none'; // Ocultar mensaje inicial
    
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
            clearInterval(messa)
        } else {
            clearInterval(timer);
            // Eliminar header
            document.querySelector('header').style.display = 'none';
            document.getElementById('countdown').innerHTML = `
                <div style="margin-bottom: 30px; font-size: 2em; color: #ffd700;">GOKNA</div>
                <div style="font-size: 1.5em; color: #ff69b4; font-weight: bold;">2/2 COMPLETADO</div>
            `;
            document.getElementById('finalMessage').style.display = 'block'; // Mostrar mensaje final
            document.getElementById('nextButton').style.display = 'block';
        }
    }, 1000);
}

// Iniciar el contador cuando la página carga
updateCountdown();

// Configurar botón para redirigir (cambia la URL según sea necesario)
document.getElementById('nextButton').addEventListener('click', function() {
    // Reemplaza 'URL_DE_DESTINO' con la página a la que deseas redirigir
    window.location.href = 'https://maxroblero.github.io/Te-Amo/';
});
