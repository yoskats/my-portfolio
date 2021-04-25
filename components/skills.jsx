
export default function Skills(props) {
    return (
      <>
        <section className="row w-100 flex-column mx-0" id="skills">

            <div id="headline-skills" className="headline col-12 mb-3 mb-sm-3 mb-md-4">
                <h2 className="headline-title">Skills</h2>
            </div>

            <div className="progress-wrapper col-12 my-3 my-sm-3 my-md-5">
                <div className="row justify-content-around">
                    <div className="left-wrapper my-2 my-sm-2 my-md-4 col-5 d-flex flex-column justify-content-between">
                        <div className="lang-wrapper mb-3 mb-sm-3 mb-md-5">
                            <h3 className="mb-2">Languages</h3>
                            <div>

                                <p className="mb-2">Bootstrap</p>
                                <div className="progress">
                                    <div className="progress-bar boots"></div>
                                </div>

                                <p className="mb-2">PHP</p>
                                <div className="progress">
                                    <div className="progress-bar php"></div>
                                </div>

                                <p className="mb-2">CSS</p>
                                <div className="progress">
                                    <div className="progress-bar css"></div>
                                </div>

                                <p className="mb-2">HTML</p>
                                <div className="progress">
                                    <div className="progress-bar html"></div>
                                </div>

                                <p className="mb-2">JS</p>
                                <div className="progress">
                                    <div className="progress-bar js"></div>
                                </div>
                            </div>
                        </div>

                        <div className="tools-wrapper mb-3 mb-sm-3 mb-md-5">
                            <h3 className="mb-2">Tools</h3>
                            <div>
                                <p className="mb-2">Sublime</p>
                                <div className="progress">
                                    <div className="progress-bar subl"></div>
                                </div>

                                <p className="mb-2">Visual Studio Code</p>
                                <div className="progress">
                                    <div className="progress-bar vsc"></div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="Storage-wrapper mb-3 mb-sm-3 mb-md-5">
                            <h3 className="mb-2">Storage</h3>
                            <div>
                                <p className="mb-2">MySQL</p>
                                <div className="progress">
                                    <div className="progress-bar mysql"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right-wrapper my-2 my-sm-2 my-md-4 col-5 d-flex flex-column justify-content-between">
                        <div className="fram-wrapper mb-3 mb-sm-3 mb-md-5">
                            <h3 className="mb-2">Framework</h3>
                            <div>
                                <p className="mb-2">Codeigniter</p>
                                <div className="progress">
                                    <div className="progress-bar codeig"></div>
                                </div>

                                <p className="mb-2">React</p>
                                <div className="progress">
                                    <div className="progress-bar react"></div>
                                </div>

                                <p className="mb-2">Next.js</p>
                                <div className="progress">
                                    <div className="progress-bar next"></div>
                                </div>
                                
                                <p className="mb-2">Node.js</p>
                                <div className="progress">
                                    <div className="progress-bar node"></div>
                                </div>
                            </div>
                        </div>

                        <div className="plat-wrapper mb-3 mb-sm-3 mb-md-5">
                            <h3 className="mb-3">Platforms</h3>
                            <div>
                                <p className="mb-2">MacOS</p>
                                <div className="progress">
                                    <div className="progress-bar mac"></div>
                                </div>
                                
                                <p className="mb-2">Wordpress</p>
                                <div className="progress">
                                    <div className="progress-bar word"></div>
                                </div>

                                <p className="mb-2">Elementor</p>
                                <div className="progress">
                                    <div className="progress-bar elem"></div>
                                </div>

                                <p className="mb-2">Shopify</p>
                                <div className="progress">
                                    <div className="progress-bar shop"></div>
                                </div>  

                                <p className="mb-2">Webflow</p>
                                <div className="progress">
                                    <div className="progress-bar web"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </section>


        <style jsx>{`
            #headline-skills {
                background-image: url('/photos/georg.JPG');
                background-size: 100% 190%;
            }

            .progress{
                width: 100%;
            }

            .html, .vsc {
                width: 85%;
            }

            .mac, .word{
                width: 80%
            }

            .boots, .css, .codeig, .next, .elem{
                width: 70%;
            }
            
            .subl, .mysql, .react, .shop{
                width: 60%;
            }

            .node, .web{
                width: 50%;
            }

            .php, .js, .vsc{
                width: 40%;
            }

            .progress-wrapper{
                font-size: 20px;
            }

            .progress-wrapper p{
                margin-top: 16px;
                margin-bottom: 0;
            }

            h3{
                font-weight: 600;
            }

            

            @media (max-width: 1200px) {
                #headline-skills{
                    background-size: 370% 190%;
                }
            
            }

            @media (max-width: 992px) {

                #headline-skills{
                    background-size: 170% 250%;
                }

            }


            @media (max-width: 768px) {
                .progress-wrapper{
                    font-size: 18px;
                }

                h3{
                    font-size: 26px;
                }

                #headline-skills{
                    background-size: 370% 190%;
                }
                
                .skills-title{
                    font-size: 30px;
                }

                #headline-skills{
                    min-height: 200px;
                }


            }
            
            @media (max-width: 600px) {
                .progress-wrapper{
                    font-size: 16px;
                }

                h3{
                    font-size: 24px;
                }

                #headline-skills{
                    background-size: 400% 300%;
                   
                }
                
                #headline-skills{
                    min-height: 150px;
                }
                
                .skills-title{
                    font-size: 28px;
                }

            }

            @media (max-width: 400px) {
                .progress-wrapper{
                    font-size: 14px;
                }

                h3{
                    font-size: 22px;
                }

                #headline-skills{
                    background-size: 400% 300%;
                   
                }
                
                #headline-skills{
                    min-height: 150px;
                }

                .skills-title{
                    font-size: 24px;
                }
            
            }
            
            
        `}

        </style>
      </>
    );
}