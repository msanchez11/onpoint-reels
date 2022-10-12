import './styles.css';
import data from'../../db/database.json';

const StoriesContainer = () => {

    const triggerModal = () => {
        window.alert('⚠️MODAL CON REELS ABIERTO⚠️')
    }

    return(
        <div className="people-wrapper">
            {data.people.map((item, i) => (
                <div key={i} className='person-wrapper' onClick={triggerModal}>
                    <div className='photo-container'>
                        <img className='person-photo' src={item.avatar} alt={item.name} />
                    </div>
                    <span className='person-name'>{item.alias}</span>
                    <span className='person-area'>{item.area}</span>
                </div>
            ))}    
        </div>
    )
};

export default StoriesContainer;