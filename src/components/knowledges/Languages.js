import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state = {
        languages : [
        {id : 1, value : "Javascript", xp:1.8},
        {id : 2, value : "Css", xp:1.8},
        {id : 3, value : "php", xp:1.5},
        {id : 4, value : "Python", xp:1.3}
        ],
    
        framworks : [
            {id : 1, value : "React", xp:1.8},
            {id : 2, value : "Bootstrap", xp:1.8},
            {id : 3, value : "Sass", xp:1.5},
            {id : 4, value : "Material Ui", xp:1.3}
        ]
    }
    


    render() {
        let {languages,framworks} = this.state;
       
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar 
                languages={framworks}
                className="frameworksDisplay"
                title="framworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;