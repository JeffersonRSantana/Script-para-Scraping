// server.ts

import express, { Request, Response } from "express"
import axios from "axios"
import { JSDOM } from "jsdom"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())

app.get("/api/scrape", async (req: Request, res: Response) => {

  const keyword = req.query.keyword as string

  if (!keyword) {
    return res
      .status(400)
      .json({
        error: "É necessário fornecer uma palavra-chave para a pesquisa.",
      })
  }

  const amazonUrl = `https://www.amazon.com.br/s?k=${encodeURIComponent(
    keyword
  )}`

  const products: any[] = []

  try {
    const { data } = await axios.get(amazonUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    const dom = new JSDOM(data)
    const document = dom.window.document


    const productElements = document.querySelectorAll(
      ".s-result-item[data-asin]"
    )

    productElements.forEach((element) => {
      
      const titleElement = element.querySelector("h2 > a > span")
      const ratingElement = element.querySelector(".a-icon-alt")
      const reviewsElement = element.querySelector("span.a-size-base")
      const imageElement = element.querySelector(".s-image")

      const product = {
        title: titleElement ? titleElement.textContent?.trim() : "N/A",
        rating: ratingElement ? ratingElement.textContent?.trim() : "N/A",
        reviews: reviewsElement ? reviewsElement.textContent?.trim() : "N/A",
        imageUrl: imageElement ? imageElement.getAttribute("src") : "N/A",
      }

      products.push(product)
    })

    res.json(products)
  } catch (error) {
    console.error("Erro ao raspar a página:", error)
    res.status(500).json({ error: "Erro ao raspar a página da Amazon." })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
