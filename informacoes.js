const url = 'https://raw.githubusercontent.com/luizcpj19/aula-23-10/refs/heads/main/informacoes.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    const quantidade_alunos = (dados.numero_alunos)
    const numero_votos = (dados.total_votos)
    const numero_aula_Victor = (dados.total_aula_profVictor)
    const numero_aula_Mazza = (dados.total_aula_semana)
    const porcentagem_Victor = ((numero_aula_Victor / numero_aula_Mazza ) * 100)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `uma pesquisa mostra <span> o quanto em media</span> as pessoas<span> consomem frutas </span> em media <span> pela semana </span> participaram do questionário? O professor <span>Victor Yanaguisawa</span> leciona <span>${numero_aula_Victor} aulas por semana</span>, e no colégio há <span>${numero_aula_Mazza} aulas por semana</span>. <br>Isso significa que <span>${porcentagem_Victor}%</span> das aulas acontece com um único professor. Abaixo está o resultado do Questionário`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes()
