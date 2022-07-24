const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});

/*
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    console.log('beforeinstallprompt');
    event.preventDefault();
    butInstall.style.visibility = 'visible';

    butInstall.addEventListener('click', () => {
        console.log('butInstall.addEventListener');
        event.prompt();
        butInstall.setAttribute('visibility', 'hidden');
    });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});
*/