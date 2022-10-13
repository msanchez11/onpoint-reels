import './styles.css';
import data from'../../db/database.json';

const StoriesContainer = () => {

    const triggerModal = () => {
        window.alert('⚠️MODAL CON REELS ABIERTO⚠️')
    };
    const triggerLogin = () => {
        window.alert('⚠️INCENTIVO DE LOGIN ABIERTO⚠️')
    };

    return(
    <div className="stories-wrapper">
        <div className="stories-header">
            <span>CREATORS BUZZ</span>
            <span className='see-all' onClick={triggerLogin}> SEE ALL</span>
        </div>
        <div className="stories-people-wrapper">
            {data.people.map(item => (
                <div key={item.id} className='stories-person-wrapper' onClick={triggerModal}>
                    <div className='stories-photo-container'>
                        <img className='stories-person-photo' src={item.avatar} alt={item.name} />
                    </div>
                    <span className='stories-person-name'>{item.name}</span>
                    <span className='stories-person-area'>{item.area}</span>
                </div>
            ))}    
        </div>
    </div>
)
};

export default StoriesContainer;