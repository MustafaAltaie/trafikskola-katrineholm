

const intensivePageSettingsCard = ({ education, handlePrepareUpdate, handleDeleteIntensive }) => {
    return (
        <div className="sec3Card flexColumn">
            <div className="sec3SettingsCardHeader">
                <p onClick={() => handleDeleteIntensive(education._id)}>🗑️ Tabort</p>
                <p onClick={() => handlePrepareUpdate(education)}>🖋️ Radigera</p>
            </div>
            {education.discount > 0 &&
            <i>Spara {education.discount}:-</i>}
            <h3>{education.title}</h3>
            <div className='sec3CardInnerWrapper flexColumn'>
                <div className='flexColumn'>
                    <h1>{education.price}:-</h1>
                    {education.discount > 0 &&
                    <p>Du sparar {education.discount}:-</p>}
                </div>
                <ul className='flexColumn'>
                    {education.list.map(option => <li key={option}>- {option}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default intensivePageSettingsCard;