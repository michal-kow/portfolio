import './LaptopComponent.scss'

const LaptopComponent = ({isProjectsInfoVisible, isProjectChanging, projects, index}) => {


    return (
        <div className={isProjectsInfoVisible ? "LaptopComponent moved" : "LaptopComponent"}>
            <div className="screen-outline">
                <div className="front">
                    <div className="camera"></div>
                    <div className={!isProjectChanging ? "screen" : "screen change"}>
                        <a href={projects[index].link}>
                            <img src={projects[index].image}/>
                        </a>
                    </div>
                </div>
                <div className="left">
                    <div className="strip-1"></div>
                    <div className="strip-2"></div>
                    <div className="strip-3"></div>
                    <div className="strip-4"></div>
                    <div className="strip-5"></div>
                    <div className="strip-6"></div>
                    <div className="strip-7"></div>
                    <div className="strip-8"></div>
                    <div className="strip-9"></div>
                </div>
                <div className="top"></div>
                <div className="right">
                    <div className="strip-1"></div>
                    <div className="strip-2"></div>
                    <div className="strip-3"></div>
                    <div className="strip-4"></div>
                    <div className="strip-5"></div>
                    <div className="strip-6"></div>
                    <div className="strip-7"></div>
                    <div className="strip-8"></div>
                    <div className="strip-9"></div>
                </div>
            </div>
            <div className="base">
                <div className="front">
                    <div className="handle"></div>
                </div>
                <div className="bottom">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
            </div>
        </div>
    );
}
 
export default LaptopComponent;