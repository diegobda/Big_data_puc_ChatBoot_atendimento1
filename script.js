function agendarConsulta() {
    const nome = document.querySelector("input[name='nome']").value;
    const planoSaude = document.querySelector("input[name='plano_saude']").value;
    const sintoma = document.querySelector("input[name='sintoma']").value;
  
    // Envia as informações para a página de agendamento
    const dataAgenda = new Date().toDateString();
    window.location.href = "/agendamento?nome=" + nome + "&plano_saude=" + planoSaude + "&sintoma=" + sintoma;
  }
  
  document.querySelector("input[type='submit']").addEventListener("click", agendarConsulta);
  