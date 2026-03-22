function showToast() {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = 'This feature has not been implemented.';

    // Append the toast to the container
    container.appendChild(toast);

    // Show the toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10); // Small delay for the transition to work

    // Hide and remove the toast after a few seconds
    setTimeout(() => {
        toast.classList.remove('show');
        // Remove the element from the DOM after the transition is complete
        setTimeout(() => {
            container.removeChild(toast);
        }, 500); // Matches the CSS transition duration
    }, 3000); // Show duration (3 seconds)
}