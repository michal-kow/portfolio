import './ProjectInfo.scss';

const ProjectInfo = ({projects, index}) => {

    return (
        <div className="ProjectInfo">
            <a href={projects[index].link}><h3>{projects[index].name}</h3></a>
            <p>{projects[index].description}</p>
            <div className="btn-container">
                <a className='page-link' href={projects[index].link}>See live</a>
                <a className='source-code-link' href={projects[index].sourceCode}>Source code</a>
            </div>
        </div>
    );
}
 
export default ProjectInfo;