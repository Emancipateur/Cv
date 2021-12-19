import React from 'react';

const ProgressBar = ({className, languages,title , frameworks}) => {


    return (
        <div className={className}>
            <h3>{title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>1 an</span>
                <span>2ans</span>
            </div>

             <div>

            { languages ? (
                    
                   languages.map((language) => {
                        let xpYears = 2
                        let progressBar = language.xp / xpYears * 100 + '%'


                        return (
                            <div key={language.id} className='languagesList'>
                                <li>{language.value}</li>
                                <div className="progressBar" style={{width : progressBar}}></div>
                            </div>
                        )
                    })
            ): null }
            </div> 
           
        </div>
    );
};

export default ProgressBar;