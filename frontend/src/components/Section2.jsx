import '../styles/section2.css';

const Section2 = () => {
    return (
        <section className="section2">
            <h1>Ta ditt körkort med självförtroende!</h1>
            <div className='sec2Contact flexColumn'>
                <p><i className="fa-solid fa-phone"></i>0737025139</p>
                <p><i className="fa-solid fa-envelope"></i>mohanad@gmail.com</p>
            </div>
            <div className='sec2Ads'>
                <p><i className="fa-solid fa-arrow-right"></i>Körkortstillstånd</p>
                <p><i className="fa-solid fa-arrow-right"></i>Handledarskap</p>
                <p><i className="fa-solid fa-arrow-right"></i>Plugga online</p>
            </div>
        </section>
    )
}

export default Section2;