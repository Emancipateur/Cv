import React, { useState } from 'react';


const Project = ({name, picture, languagesIcons, info , source }) => {


const [showInfo, setshowInfo] = useState(false)

const handleInfo = () => {
    setshowInfo(!showInfo)
}


    return (
        <div className="project">

            
            <div className="icons">
                {languagesIcons.map((icon) => {
                return (
                    <i className={icon} key={icon}></i>
                )})}
            </div>
                    <h3>{name}</h3>
                    <img src={picture} alt="ProjectImage" />
                    <span className="infos" onClick={handleInfo}>
                    <i className="fas fa-plus-circle" ></i>
                    </span>

                    {
                        showInfo && (
                            <div className="showInfos">
                                <div className="infosContent">
                                    <div className="head">
                                        <h2>{name}</h2>
                                        <div className="sourceCode">
                                            <a href={source}  className='button' target="_blank" rel="noreferrer">Code source</a>
                                        </div>
                                    </div>
                                    <p className="text">{info}</p>
                                    <div className="button return" onClick={handleInfo}>Retourner sur la page</div>
                                </div>
                            </div>
                        )
                    }
         
        </div>
    );
};

export default Project;