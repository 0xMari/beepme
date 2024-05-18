import './contacts.css';

function Contacts(){
    return(
        <div className="contacts" id='contacts'>
            <div className='cont-wrapper'>
                <div className="peaks">
                    Call me, beep me if you wanna reach me
                </div>
                <div className='links-wrap'>
                    <div>Schedule a call ↗</div>
                    <div>Linkedin ↗</div>
                    <div>Mail ↗</div>
                    <div>Github ↗</div>
                </div>
                <div className='foot'>
                    <div>LAST UPDATE: MAY 2024</div>
                    <a href='#top'>BACK TO THE WATER BUBBLES ↑</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;