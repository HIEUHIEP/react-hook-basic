import VideoHomePage from '../../assets/video-homepage.mp4'

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={VideoHomePage} type="video/mp4">
                </source>
            </video>
            <div className="homepage-content">
                <div className="title-top">
                    Get to know your customers with forms worth filling out
                </div>
                <div className="title-mid">
                    Collect all the data you need to understand customers with forms designed to be refreshingly different.
                </div>
                <div className="title-bot">
                    <button>Get started-it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;