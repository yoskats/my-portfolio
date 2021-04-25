export default function Footer(props) {
    return (
      <>
        <a className="top-image" href="#about">
          &#9757;&#127997;
        </a>

        <footer className="row w-100 align-items-center justify-content-center mx-0">
          <a href="/">
            &copy; Built with <span>&#10084;</span> by Yosi Josef Kats &#128521;
          </a>
        </footer>

        <style jsx>{`
          .top-image {
            bottom: 30px;
            font-size: 55px;
            position: fixed;
            right: 30px;
            text-decoration: none;
            transform: scaleX(-1);
            z-index: 3;
          }

          footer {
            border: 1px solid #eaeaea;
            border-bottom: 0;
            color: #000;
            height: 70px;
          }

          footer a {
            border-bottom: 2px solid #000;
            color: #000;
            font-size: 18px;
            padding-bottom: 1px;
            text-decoration: none;
            transition: all 200ms ease-out;
          }

          footer a:hover {
            border-color: #fff;
          }

          @media (max-width: 815px) {
            .top-image {
              visibility: hidden;
            }
          }

          @media (max-width: 600px) {
            footer a {
              font-size: 14px;
            }
          }
        `}
        </style>
      </>
    );
}