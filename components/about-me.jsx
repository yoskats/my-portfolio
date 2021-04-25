import Image from 'next/image'

export default function AboutMe(props) {
    return (
      <>
        <section className="row align-items-center flex-column mx-0" id="about">
          <div className="col-8 col-sm-6 col-lg-4 my-5">
            <Image src="/photos/profile.jpg" width={300} height={400} layout="responsive" />
          </div>

          <div className="col-sm-12 col-lg-9 mb-5">
            <h1 className="title d-flex justify-content-center justify-content-md-center justify-content-lg-end">
              Hello, I’m Yosi Josef Kats,
            </h1>
            <p className="sub-title d-flex justify-content-center justify-content-sm-center justify-content-lg-end mb-0">
              Junior Frontend Developer.
            </p>
          </div>

          <div className="col-10 col-lg-6 align-items-center">
            <p className="description mb-0">
              I’m a highly motivated goal oriented frontend developer, seeking an opportunity to learn and develop myself. 
              I’m a quick learner, deadline driven person, excellent communicator, and most of all a team player. 
              I enjoy the process of building stuff from scratch, seeing them grow and evolve.
            </p>
          </div>

          <div className="col-7 col-sm-6 col-lg-3 d-flex justify-content-between my-4 my-sm-4 my-md-5">
            <a href="https://www.instagram.com/yosikats/" className="card" target="_blank">
              <Image src="/icons/instagram.svg" width={20} height={20} />
            </a>

            <a href="https://www.linkedin.com/in/yosikats/" className="card" target="_blank">
              <Image src="/icons/linkedin.svg" width={20} height={20} />
            </a>

            <a href="https://github.com/yoskats" className="card" target="_blank">
              <Image src="/icons/github.svg" width={20} height={20} />
            </a>
          </div>
        </section>

        <style jsx>{`
          .card {
            align-items: center;
            background-color: #d6b1b1;
            border-radius: 50%;
            border: 2px solid #b47272;
            display: flex;
            justify-content: center;
            padding: 13px;
          }

          .title {
            line-height: 1.15;
            font-size: 3rem;
          }

          .sub-title {
            line-height: 1.5;
            font-size: 35px;
            font-weight: 500;
          }

          .description {
            line-height: 1.5;
            font-size: 20px;
          }


          @media (max-width: 1200px) {
            .title {
              font-size: 42px;
            }

            .sub-title {
              font-size: 30px;
            }
          }

          @media (max-width: 992px) {
            .title {
              font-size: 40px;
            }

            .sub-title {
              font-size: 30px;
            }

            .title,
            .sub-title {
              font-weight: 600;
            }
          }


          @media (max-width: 768px) {
            .title {
              font-size: 30px;
            }

            .sub-title {
              font-size: 26px;
            }


            .description{
              font-size: 18px;
            }
          }
          
          @media (max-width: 600px) {
            .title {
              font-size: 28px;
            }

            .sub-title {
              font-size: 22px;
            }

            .description {
              font-size: 16px;
            }
          }

          @media (max-width: 476px) {
            .title {
              font-size: 23px;
            }

            .sub-title {
              font-size: 22px;
            }

            .description {
              font-size: 16px;
            }
          }

          @media (max-width: 400px) {
            .title {
              font-size: 20px;
            }

            .sub-title {
              font-size: 18px;
            }

            .description {
              font-size: 14px;
            }
          }
        `}</style>
      </>
    );
}