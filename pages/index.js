import Head from 'next/head'
import AboutMe from '~/components/about-me';
import Navbar from '~/components/nav-bar';
import Skills from '~/components/skills';
import Portf from '~/components/portfolio';
import Contact from '~/components/contact';
import Footer from '~/components/footer';


export default function Home() {
  return (
    <div className="container px-0">
      <Head>
        <title>Yosi Josef Kats</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
        <link rel="" href="" />
      </Head>

      <AboutMe />
      <Navbar />
      <Skills />
      <Portf />
      <Contact />
      <Footer />


      <style global jsx>{`
        body,
        input[type=text],
        input[type=email],
        textarea {
          font-family: 'Roboto Mono', monospace;
        }
        
        .headline {
          align-items: center;
          display: flex;
          justify-content: center;
          min-height: 300px;
          position: relative;
        }

        .headline::after {
          background-color: #000;
          content: "";
          height: 100%;
          opacity: 0.1;
          position: absolute;
          width: 100%;
          z-index: 1;
        }

        .headline-title {
          color: #000;
          font-size: 40px;
          font-weight: bold;
          position: relative;
          text-shadow: 3px 3px 20px #fff;
          text-transform: capitalize;
          z-index: 2;
        }
      `}</style>
    </div>
  )
}
