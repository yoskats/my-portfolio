
export default function Navbar(props) {
    return (
      <>
        <nav className="avbar navbar-expand-md navbar-light row mb-3 mb-sm-3 mb-md-5 mx-auto">
          <button className="navbar-toggler p-1 mb-sm-3 mb-md-0 mx-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href='#skills'>Skills</a>
              </li>
              <li className="nav-item mx-md-3 mx-lg-4 mx-xl-5">
                <a className="nav-link" href='#portfolio'>Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#contact'>Contact Me</a>
              </li>
            </ul> 
          </div>
        </nav>

        <style jsx>{`
          nav{
            border: 1px solid #eaeaea;
          }

          .nav-link {
            color: #ac6364!important;
            font-size: 20px;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .nav-item {
              font-size: 18px;
              line-height: 1.5;
            }

            nav{
              border: 0;
            }
          }
          
          @media (max-width: 600px) {
            .nav-item {
              font-size: 16px;
            }

            ul{
              flex-direction: column;
              padding: 12px 0!important;
            }
          }

          @media (max-width: 400px) {
            .nav-item {
              font-size: 14px;
            }
          }
        `}
        </style>
      </>
    );
}