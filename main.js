document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('changeBackground');

    button.addEventListener('click', function () {
        const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff33ec', '#33ecff'];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
});
