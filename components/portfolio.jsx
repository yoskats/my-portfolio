import Image from 'next/image'


export default function Portf(props) {
    return (
        <>
            <section className="row w-100 align-items-center flex-column mx-0" id="portfolio">

                <div id="headline-portfolio" className="headline col-12 mb-3 mb-sm-3 mb-md-4">
                    <h2 className="headline-title">portfolio</h2>
                </div>


                <div className="col-lg-10 col-md-11 col-sm-12 my-3 my-md-5 flex-column">
                    <h3>123Code, eCommerce Project</h3>

                    <div className="list-description py-0">
                        <p>Worked as a full-time web developer freelancer with 123Code.</p>
                    </div>

                    <h4 className="py-3">Shopify</h4>

                    <ul className="list">
                        <li>Premium theme installation and customization according to the client’s needs.</li>
                        <li>Theme customizations using Liquid, CSS, JS, JSON Schema.</li>
                        <li>Working with <a className="list-link" href="https://github.com/Shopify/themekit" target="_blank">Shopify’s Theme Kit</a> in a development environment and deploying changes to the production website.</li>
                        <button className="list-btn"><a href="https://leorex.store/" target="_blank">Visit the site</a></button>
                    </ul>

                    <h4 className="py-3">WordPress</h4>

                    <ul className="list">
                        <li>Website monthly maintenance work including WordPress version update, plugin updates, and premium theme update.</li>
                        <li>Website pages creation and editing using <a className="list-link" href="https://wpbakery.com/" target="_blank">WPBakery</a> page builder, following designs and specifications supplied by the client.</li>
                        <li>Expanding functionality of a premium theme by creating a child theme and using PHP, CSS, and HTML.</li>
                        <li>Installing premium WooCommerce status plugin and adding new email templates using PHP and HTML.</li>
                        <li>Working with <a className="list-link" href="https://www.mamp.info/en/mac/" target="_blank">MAMP</a> in the development environment and deploying to production the old fashioned way via FTP and PHPMyAdmin.</li>
                        <button className="list-btn"><a href="https://leorex-ru.co.il/" target="_blank">Visit the site</a></button>
                    </ul>

                    <div className="image-wrapper row">
                        <div className="col-11 col-sm-11 col-md-9 mx-auto px-0 mt-3 mt-sm-3 mt-md-5" id="leorex">
                            <Image unoptimized={true} src="/photos/leorex-min.png" width={713} height={349} quality={100} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-10 col-md-11 col-sm-12 my-3 my-md-5 flex-column">
                    <h3>Phonebook, Self-taught PHP Project</h3>
                    <div className="list-description py-2">
                        <p>This is a web application that allows users to register and create their own contacts list, where they can create, edit, and delete contacts information.</p>
                        <p>I built this project with the purpose of improving my knowledge in the web development process from start to end. Chose to use the CodeIgniter 4 framework for the task because I wanted a challenge and to strengthen my knowledge of PHP and MVC pattern.</p>
                    </div>
                    <ul className="list">
                        <li>Learned and used CodeIgniter 4 framework.</li>
                        <li>Created the DB schema and migrations to work with MySQL.</li>
                        <li>Created controllers and models for the contacts.</li>
                        <li>Implemented 3rd-party user registration module for CodeIgniter.</li>
                        <li>Created views using PHP, HTML, Bootstrap.</li>
                        <li>Used CodeIgniter’s form validation for validating form fields on contacts create and edit pages.</li>
                        <li>Used git and Github to manage the project’s code.</li>
                        <button className="list-btn"><a href="https://phone1231990.000webhostapp.com/" target="_blank">Visit the siet</a></button>
                        <button className="list-btn"><a href="https://github.com/yoskats/pbproject" target="_blank">Git repository</a></button>
                    </ul>
                    <div className="image-wrapper row">
                        <div className="col-11 col-sm-11 col-md-9 mx-auto px-0 mt-3 mt-sm-3 mt-md-5" id="phonebook">
                            <Image unoptimized={true} src="/photos/pb.png" width={713} height={427} quality={100} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-10 col-md-11 col-sm-12 my-3 my-md-5 flex-column">
                    <h3>My Portfolio Webpage, Self-taught Next.js Project</h3>
                    <div className="list-description py-2">
                        <p>This is my portfolio web page, it allows me to show my capabilities, skills, and development knowledge by revealing my work to everyone.</p>
                        <p>In this project, I wanted to improve my frontend skills and create my own portfolio site. Chose to use the Next.js framework to challenge my knowledge in React, Node.js, JS.</p>
                    </div>
                    <ul className="list">
                        <li>Learned and used Next.js and React frameworks.</li>
                        <li>Splitted the portfolio’s sections into React components.</li>
                        <li>Used React Hook Form and Nodemailer for the contact form on the page.</li>
                        <li>Used git and Github to manage the portfolio’s code.</li>
                        <li>Deployed the portfolio to Heroku.</li>
                        <button className="list-btn"><a href="https://github.com/yoskats/my-protfolio" target="_blank">Git repository</a></button>
                    </ul>
                </div>


            </section>

            <style jsx>{`
            #headline-portfolio {
                background-image: url('/photos/forest.JPG');
                background-size: 100% 170%;
            }

            h3{
                font-weight: 600;
            }

            .list-description{
                font-size: 20px;
            }

            h4{
                font-size: 26px;
            }

            .list-link{
                color: #000;
                text-decoration: underline;
            }

            .list{         
                line-height: 1.5;
                font-size: 18px;
            }
        
            .list-btn{
                background-color: #ab6364;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                padding: 5px 5px;
                margin-top: 20px;
                margin-right: 20px;
                font-size: 16px;
            }
            
            .list-btn a{
                color: white;
            }

            #leorex{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                line-height: 0;
            }
            #phonebook{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                line-height: 0;
            }


            @media (max-width: 768px) {
                .portfolio-title{
                    font-size: 30px;
                }

                #headline-portfolio{
                    background-size: 200% 210%;
                }
                #headline-portfolio{
                    min-height: 200px;
                }
                
                h3{
                    font-size: 26px;
                }

                .list-description{
                    font-size: 18px;
                }

                .list{         
                    font-size: 16px;
                }

            }
            
            @media (max-width: 600px) {
                .portfolio-title{
                    font-size: 28px;
                }

                #headline-portfolio{
                    background-size: 150% 230%;
                }

                #headline-portfolio{
                    min-height: 150px;
                }
                
                h3{
                    font-size: 24px;
                }
                
                .list-description{
                    font-size: 16px;
                }

                .list{         
                    font-size: 16px;
                }
                .list-btn{
                    font-size: 14px;
                    margin-right: 10px;
                }

            }

            @media (max-width: 400px) {
                .portfolio-title{
                    font-size: 24px;
                }

                h3{
                    font-size: 22px;
                }

                .list-description{
                    font-size: 14px;
                }

            }
            
            
        `}

            </style>
        </>
    );
}