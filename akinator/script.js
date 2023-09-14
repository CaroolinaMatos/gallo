var arvoreDecisao = {
  "pergunta": "O animal é Mamífero?",
  "respostas": [
    {
      "resposta": "sim",
      "pergunta": "O animal é Quadrúpede?",
      "respostas": [
        {
          "resposta": "sim",
          "pergunta": "O animal é Carnívoro?",
          "respostas": [
            {
              "resposta": "sim",
              "animal": "Leão"
            },
            {
              "resposta": "nao",
              "pergunta": "O animal é Herbívoro?",
              "respostas": [
                {
                  "resposta": "sim",
                  "animal": "Cavalo"
                }
              ]
            }
          ]
        },
        {
          "resposta": "nao",
          "pergunta": "O animal é Bípede?",
          "respostas": [
            {
              "resposta": "sim",
              "pergunta": "O animal é Onívoro?",
              "respostas": [
                {
                  "resposta": "sim",
                  "animal": "Homem"
                },
                {
                  "resposta": "nao",
                  "pergunta": "O animal é Frugívoro?",
                  "respostas": [
                    {
                      "resposta": "sim",
                      "animal": "Macaco"
                    }
                  ]
                }
              ]
            },
            {
              "resposta": "nao",
              "pergunta": "O animal é Voador?",
              "respostas": [
                {
                  "resposta": "sim",
                  "animal": "Morcego"
                },
                {
                  "resposta": "nao",
                  "pergunta": "O animal é Aquático?",
                  "respostas": [
                    {
                      "resposta": "sim",
                      "animal": "Baleia"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "resposta": "nao",
      "pergunta": "O animal é uma Ave?",
      "respostas": [
        {
          "resposta": "sim",
          "pergunta": "O animal é Não-voador?",
          "respostas": [
            {
              "resposta": "sim",
              "pergunta": "O animal é Tropical?",
              "respostas": [
                {
                  "resposta": "sim",
                  "animal": "Avestruz"
                },
                {
                  "resposta": "nao",
                  "pergunta": "O animal é Polar?",
                  "respostas": [
                    {
                      "resposta": "sim",
                      "animal": "Pinguim"
                    }
                  ]
                }
              ]
            },
            {
              "resposta": "nao",
              "pergunta": "O animal é Nadador?",
              "respostas": [
                {
                  "resposta": "sim",
                  "animal": "Pinguim"
                },
                {
                  "resposta": "nao",
                  "pergunta": "O animal é de Rapina?",
                  "respostas": [
                    {
                      "resposta": "sim",
                      "animal": "Águia"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "resposta": "nao",
          "pergunta": "O animal é um Réptil?",
          "respostas": [
            {
              "resposta": "sim",
              "pergunta": "O animal tem casco?",
              "respostas": [
                {
                  "resposta": "sim",
                  "animal": "Tartaruga"
                }
              ]
            },
            {
              "resposta": "nao",
              "pergunta": "O animal é Carnívoro?",
              "respostas": [
                {
                  "resposta": "sim",
                  "animal": "Crocodilo"
                },
                {
                  "resposta": "nao",
                  "pergunta": "O animal é não tem patas?",
                  "respostas": [
                    {
                      "resposta": "sim",
                      "animal": "Cobra"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

var perguntaAtual = arvoreDecisao;

const perguntaElement = document.getElementById("pergunta");
const simButton = document.getElementById("sim");
const naoButton = document.getElementById("nao");
const respostaElement = document.getElementById("resposta");

function exibirPergunta() {
  perguntaElement.textContent = perguntaAtual.pergunta;
}

function mostrarResultado(animal) {
  respostaElement.textContent = `Eu acho que é um(a) ${animal}!`;
  respostaElement.style.display = "block";
  perguntaElement.style.display = "none";
  simButton.style.display = "none";
  naoButton.style.display = "none";
}

function proximaPergunta(resp) {
  if (perguntaAtual.respostas) {
    const proxima = perguntaAtual.respostas.find(resposta => resposta.resposta === resp);
    if (proxima) {
      perguntaAtual = proxima;
      exibirPergunta();
    }
  } else {
    mostrarResultado(perguntaAtual.animal);
  }
}

simButton.addEventListener("click", () => proximaPergunta("sim"));
naoButton.addEventListener("click", () => proximaPergunta("nao"));

exibirPergunta();
