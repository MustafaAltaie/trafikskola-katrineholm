import '../styles/section2.css';
import { motion } from 'framer-motion';

const Section2 = () => {
    return (
        <section className="section2 bgLines">
            <div>
                <h1>Ta ditt körkort med självförtroende!</h1>
                <div className='sec2Contact'>
                    <h3>
                        <a href="tel:0737025139">
                            <i className="fa-solid fa-phone"></i>
                            0737025139
                        </a>
                    </h3>
                    <h3>
                        <a href="mailto:mohanad@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                            mohanad@gmail.com
                        </a>
                    </h3>
                </div>
                <motion.div
                    className='sec2Ads'
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3>
                        <a
                            href='https://www.transportstyrelsen.se/sv/vagtrafik/e-tjanster-och-blanketter/e-tjanster-inom-vagtrafik/?tab=korkort&eservice=korkortstillstand(grupp1)-ansok#eservice130157'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                            Körkortstillstånd
                        </a>
                    </h3>
                    <h3>
                        <a
                            href='https://www.transportstyrelsen.se/sv/vagtrafik/e-tjanster-och-blanketter/blanketter-for-vagtrafik/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                            Handledarskap
                        </a>
                    </h3>
                    <h3>
                        <a
                            href='https://www.trafikskolaonline.se/sv'
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={e => {
                                e.preventDefault();
                                window.open('https://www.trafikskolaonline.se/sv', '_blank', 'noopener,noreferrer');
                            }}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                            Plugga online
                        </a>
                    </h3>
                </motion.div>
            </div>
        </section>
    )
}

export default Section2;