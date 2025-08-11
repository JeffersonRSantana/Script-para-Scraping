


const keywordInput = document.getElementById("keyword-input")
const scrapeButton = document.getElementById("scrape-button")
const resultsContainer = document.getElementById("results-container")
const loadingElement = document.getElementById("loading")
const errorElement = document.getElementById("error-message")


const apiUrl = "http://localhost:3000/api/scrape"


function showError(message) {
  errorElement.textContent = message
  errorElement.classList.remove("hidden")
}


function hideStatus() {
  loadingElement.classList.add("hidden")
  errorElement.classList.add("hidden")
}


function displayProducts(products) {
  
  resultsContainer.innerHTML = ""

  if (products.length === 0) {
    
    resultsContainer.innerHTML =
      '<p class="no-results">Nenhum produto encontrado. Tente outra palavra-chave.</p>'
    return
  }


  products.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")

    productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p class="rating">${product.rating}</p>
            <p class="reviews">${product.reviews} avaliações</p>
        `
    resultsContainer.appendChild(productCard)
  })
}


async function scrapeProducts() {
  hideStatus()
  resultsContainer.innerHTML = "" 

  const keyword = keywordInput.value.trim()

  
  if (!keyword) {
    showError("Por favor, insira uma palavra-chave para a busca.")
    return
  }

  
  loadingElement.classList.remove("hidden")

  try {
   
    const response = await fetch(
      `${apiUrl}?keyword=${encodeURIComponent(keyword)}`
    )

    
    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do servidor.")
    }

    const products = await response.json()

    hideStatus()
    displayProducts(products)
  } catch (error) {
    console.error("Erro na requisição:", error)
    hideStatus()
    showError(
      "Ocorreu um erro ao buscar os produtos. Verifique se o back-end está rodando."
    )
  }
}


scrapeButton.addEventListener("click", scrapeProducts)
