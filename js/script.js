// Mostrar o botão "Voltar ao topo" ao rolar a página
window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  // Rolar suavemente até o topo
  document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  