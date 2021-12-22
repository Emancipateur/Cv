import React, { useState } from 'react';
import {portfolioData} from '../../data/portfolioData'
import Project from './Project';

const ProjectList = () => {

    const  projects = portfolioData
    const radios =[
        {id: 1, value: "javascript"},
        {id: 2, value: "php"},
        {id: 3, value: "react"},
        {id: 4, value: "css"}
    ]
   
    const [selectedRadio, setSelectedRadio] = useState('javascript')
   
    const handleRadio = (e) => {
        setSelectedRadio(e.target.value)
    }
   
   

//  const [projects, setProject] = useState(portfolioData)
//  const [radios, setRadios] = useState([
//      {id: 1, value: "javascript"},
//      {id: 2, value: "php"},
//      {id: 3, value: "react"},
//      {id: 4, value: "css"},
//  ])

//  const [selectedRadio, setSelectedRadio] = useState('javascript')

//  const handleRadio = (e) => {
//      setSelectedRadio(e.target.value)
//  }


    return (
        <div className="portfolioContent">
         <ul className="radioDisplay">
        {
            radios.map((radio) => {
                return (
                    <li key={radio.id}>
                        <input type="radio" name="radio" checked={radio.value === selectedRadio} value={radio.value} id={radio.value}
                        onChange={handleRadio} />
                        <label htmlFor={radio.value}>{radio.value}</label>
                    </li>                
            )})
        }

         </ul>

         <div className="projects">
             {
                 projects
                 .filter(item => item.languages.includes(selectedRadio))
                 .map((item) => {

                    return (
                        <Project key={item.id} {...item}/>
                    )
                 })
             }
         </div>
        </div>
    );
};

export default ProjectList;