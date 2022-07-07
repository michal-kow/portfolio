import './Home.scss'

const Home = () => {
    return (
        <div className="Home" id='home'>
            <div className="info-container">
                <h2 className="hello">Hello, my name is</h2>
                <h2 className="name">
                    <span className='letter'>M</span>
                    <span className='letter'>i</span>
                    <span className='letter'>c</span>
                    <span className='letter'>h</span>
                    <span className='letter'>a</span>
                    <span className='letter'>ł</span>
                    <span> </span>
                    <span className='letter'>K</span>
                    <span className='letter'>o</span>
                    <span className='letter'>w</span>
                    <span className='letter'>a</span>
                    <span className='letter'>l</span>
                    <span className='letter'>i</span>
                    <span className='letter'>k</span>
                </h2>
                <p className="info">
                    and I'm a frontend developer who cares about aesthetics and user interaction.
                </p>
            </div>
            <img className='gradient-img' src={require('./assets/gradient.jpg')} alt="gradient" />
        </div>
    );
}
 
export default Home;