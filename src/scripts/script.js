const calcularBtn = document.getElementById('calcularBtn') // Captura o Botão Calcular

// Função que Calcula o Consumo
const calcularConsumo = (event) => {
    event.preventDefault() // Previne o envio padrão do Formulário
    
    const $ = document.getElementById.bind(document) // Captura o documentGetElementById de document
    const resultado = $('resultado') // Input Resultado
    const litros = parseFloat($('litros').value) // Input Litros
    const km = parseFloat($('km').value) // Input Km
    const consumo = km / litros // Calcula o Consumo

    resultado.textContent = `O Seu Consumo é: ${consumo.toFixed(2)} Km/l` // Exibe o Resultado na Tela
}

calcularBtn.addEventListener('click', calcularConsumo) // Adiciona Evento de Clique no Botão Calcular