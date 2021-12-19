import React from 'react';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import OthersSkills from '../components/knowledges/OthersSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (


        <div className="knowledges">
            <Navigation />
         <div className="knowledgesContent">
         <Languages />
         <Experience />
         <OthersSkills />
         <Hobbies />
         </div>

        </div>
    );
};

export default Knowledges;