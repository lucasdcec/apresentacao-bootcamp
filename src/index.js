document.addEventListener("keydown", function (event) {
  // Pega o nome do arquivo atual (ex: "pagina01.html")
  const currentPage = window.location.pathname.split("/").pop();

  // Extrai o número da página usando Regex
  const match = currentPage.match(/pagina(\d+)\.html/);

  if (match) {
    let pageNumber = parseInt(match[1]);
    let newPage = "";

    if (event.key === "ArrowRight") {
      // Vai para a próxima (limite de 10)
      if (pageNumber < 10) {
        pageNumber++;
        newPage = `pagina${pageNumber.toString().padStart(2, "0")}.html`;
      }
    } else if (event.key === "ArrowLeft") {
      // Volta para a anterior (limite de 1)
      if (pageNumber > 1) {
        pageNumber--;
        newPage = `pagina${pageNumber.toString().padStart(2, "0")}.html`;
      }
    }

    if (newPage) {
      window.location.href = newPage;
    }
  }
});
