document.querySelectorAll('.spoiler-btn').forEach(button => {
  button.addEventListener('click', () => {
    const spoiler = button.nextElementSibling;
    spoiler.style.display = spoiler.style.display === 'block' ? 'none' : 'block';
    button.textContent = spoiler.style.display === 'block' ? 'Hide Spoiler' : 'Show Solane’s Opinions';
  });
});
