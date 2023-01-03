document.querySelector('#something-3').addEventListener('click', () => {
    document.querySelector('link').setAttribute('href', 'after click.css');
    document.querySelector('#something-2').textContent = `Współrzędne X: ${event.clientX} - Y: ${event.clientY}`;
})