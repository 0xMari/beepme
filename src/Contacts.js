import './contacts.css';

function Contacts(){
    return(
        <div className="contacts" id='contacts'>
            <div className='cont-wrapper'>
                <div className="peaks">
                    Call me, beep me if you wanna reach me
                </div>
                <div className='links-wrap'>
                    <a target="_blank" href='https://calendly.com/0xmari'>Schedule a call ↗</a>
                    <a target="_blank" href='https://www.linkedin.com/in/maria-jyate/'>Linkedin ↗</a>
                    <a target="_blank" href=''>Mail ↗</a>
                    <a target="_blank" href='https://github.com/0xMari'>Github ↗</a>
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