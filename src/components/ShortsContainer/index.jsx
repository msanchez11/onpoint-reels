import './styles.css';
import data from'../../db/database.json';

const ShortsContainer = () => {

    const triggerModal = () => {
        window.alert('⚠️MODAL CON REELS ABIERTO⚠️')
    }
    const triggerLogin = () => {
        window.alert('⚠️INCENTIVO DE LOGIN ABIERTO⚠️')
    }

    return(
        <div className="shorts-wrapper">
            <div className="shorts-header">
                <span>CREATORS SUGGESTED FOR YOU</span>
                <span className='see-all' onClick={triggerLogin}> SEE ALL</span>
            </div>
            <div className="shorts-people-wrapper">
                {data.people.map(item => (
                    <div key={item.id} className='shorts-person-wrapper' onClick={triggerModal}>
                        <div className='shorts-photo-container'>
                            <img className='shorts-person-photo' src={item.avatar} alt={item.name} />
                        </div>
                        <span className='shorts-person-name'>{item.name}</span>
                        <span className='shorts-person-area'>{item.area}</span>
                    </div>
                ))}    
            </div>
        </div>
    )
};

export default ShortsContainer;