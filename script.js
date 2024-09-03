document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const lessonList = document.getElementById('lesson-list');
    const lessons = lessonList.getElementsByClassName('lesson-card');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < lessons.length; i++) {
            const h3 = lessons[i].getElementsByTagName('h3')[0];
            const textValue = h3.textContent || h3.innerText;
            lessons[i].style.display = textValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
        }
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
