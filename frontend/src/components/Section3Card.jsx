import { motion } from 'framer-motion';

const Section3Card = ({ education }) => {
    return (
        <motion.div
            className="sec3Card flexColumn"
            initial={{ opacity: 0, scale: 1.1, x: -200 }} 
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.1 }}
        >
            {education.discount > 0 &&
            <i>Spara {education.discount}:-</i>}
            <h3 dangerouslySetInnerHTML={{ __html: education.title.replace('/', '<br/>') }} />
            <div className='sec3CardInnerWrapper flexColumn'>
                <div className='flexColumn'>
                    <h1 className="sec3CardPrice">{education.price}:-</h1>
                    {education.discount > 0 &&
                    <p>Du sparar {education.discount}:-</p>}
                </div>
                <ul className='flexColumn'>
                    {education.list?.map(option => <li key={option}>- {option}</li>)}
                </ul>
            </div>
        </motion.div>
    )
}

export default Section3Card;