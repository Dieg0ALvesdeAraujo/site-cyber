function processXSS() {
  const input = document.getElementById("xss-input").value;
  const outputDiv = document.getElementById("xss-output");
  outputDiv.innerHTML = `<p>resultado escrito:</p><p>${input}</p>`;
}
let carrinho = {
  itens: [],

  adicionarItem: function (nome, preco, imagem) {
    this.itens.push({ nome: nome, preco: preco, imagem: imagem });
    this.atualizarCarrinho();
  },

  calcularTotal: function () {
    let total = this.itens.reduce((acc, item) => acc + item.preco, 0);
    return total.toFixed(2);
  },

  atualizarCarrinho: function () {
    const carrinhoElement = document.querySelector(".item-carrinho");
    carrinhoElement.innerHTML = "";

    this.itens.forEach((item) => {
      const itemHTML = `
        <div class="item">
          <img src="${item.imagem}" alt="${item.nome}">
          <div>
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
          </div>
        </div>
      `;
      carrinhoElement.innerHTML += itemHTML;
    });

    const totalCarrinhoElement = document.getElementById("total-carrinho");
    totalCarrinhoElement.textContent = `R$ ${this.calcularTotal()}`;
  }
};
function adicionarAoCarrinho(nomeProduto, precoProduto, imagemProduto) {
  carrinho.adicionarItem(nomeProduto, precoProduto, imagemProduto);
}

