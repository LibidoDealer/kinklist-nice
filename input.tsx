const updateOwner = (target: HTMLInputElement) => {
    // Update title
    if (target.value.length > 0) {
        document.title = `${target.value}'s Kink List`;
        localStorage.owner = target.value;
    } else {
        document.title = 'Kink List';
        localStorage.removeItem('owner');
    }

    // Update input size
    const content = target.value || target.placeholder;
    const span = document.createElement("span");
    span.innerHTML = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    target.parentElement.appendChild(span);
    const theWidth = span.getBoundingClientRect().width;
    target.parentElement.removeChild(span);
    target.style.width = `${theWidth}px`;
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    if (localStorage.owner !== undefined) {
        nameInput.value = localStorage.owner;
    }
    updateOwner(nameInput);
    nameInput.addEventListener('input', updateOwner);
});
