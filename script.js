var posicao = 3
function adicionarLinha() {
      const nome = document.querySelector('#squad').value;
      const sobrenome = document.querySelector('#score').value;
      
      const tabela = document.getElementById('play1');
      const novaLinha = tabela.insertRow();
      
      const colunaPosicao = novaLinha.insertCell(0)
      const colunaNome = novaLinha.insertCell(1);
      const colunaSobrenome = novaLinha.insertCell(2);
      
      colunaPosicao.innerHTML = posicao++
      colunaNome.innerHTML = nome;
      colunaSobrenome.innerHTML = sobrenome;
      // Limpa os campos de entrada
      document.getElementById('squad').value = '';
      document.getElementById('score').value = '';

      // Reordena a tabela com base no sobrenome em ordem decrescente
      reordenarTabela();
}

// Função para reordenar a tabela com base no sobrenome em ordem decrescente
function reordenarTabela() {
      var tabela = document.getElementById('play1');
      var linhas = [].slice.call(tabela.rows, 1); // Ignora a primeira linha (cabeçalho)
      
      linhas.sort(function(a, b) {
        var sobrenomeA = a.cells[2].textContent;
        var sobrenomeB = b.cells[2].textContent;
        return sobrenomeB.localeCompare(sobrenomeA);
      });

      while (tabela.rows.length > 1) {
        tabela.deleteRow(1)
      }
      
      for (var i = 0; i < linhas.length; i++) {
        tabela.appendChild(linhas[i]);
        tabela.rows[i + 1].cells[0].innerHTML = i + 1
      }
    }