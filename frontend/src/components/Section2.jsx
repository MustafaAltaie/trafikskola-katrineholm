import '../styles/section2.css';

const Section2 = () => {
    return (
        <section className="section2 bgLines">
            <div>
                <h1>Ta ditt körkort med självförtroende!</h1>
                <div className='sec2Contact'>
                    <h3><i className="fa-solid fa-phone"></i>0737025139</h3>
                    <h3><i className="fa-solid fa-envelope"></i>mohanad@gmail.com</h3>
                </div>
                <div className='sec2Ads'>
                    <h3><i className="fa-solid fa-arrow-right"></i>Körkortstillstånd</h3>
                    <h3><i className="fa-solid fa-arrow-right"></i>Handledarskap</h3>
                    <h3><i className="fa-solid fa-arrow-right"></i>Plugga online</h3>
                </div>
            </div>
        </section>
    )
}

export default Section2;