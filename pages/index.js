 import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>funciona</h1>

    <h3>Hooray 🎉 - Veamos sin funciona la <a href="https://lacritica.com.ar/quiniela-de-tucuman">Quiniela de Tucumán</a></h3>
      <h3><a href="https://lacritica.com.ar/2020/06/25/ana-pedraza-tucumana-belleza/">Ana Pedraza</a></h3>
  

      <h3><a href="https://argencon.org">argencon</a></h3>

      <h3><a href="https://lacritica.com.ar/2021/02/02/martin-cirio-reaparecio-me-descarto-como-si-no-fuera-nada/">Martin Cirio</a></h3>

      <h3>Mirá<a href="https://mercadoads.com">como vender mas en mercado libre</a></h3>

      <h3>Hooray 🎉 - Veamos sin funciona la <a href="https://lacritica.com.ar/quiniela-de-tucuman">Quiniela de Tucuman</a></h3>

      <h3>Hooray 🎉 - Veamos sin funciona la <a href="https://lacritica.com.ar/quiniela-de-tucuman">Quiniela de Tucuman</a></h3>


    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home
