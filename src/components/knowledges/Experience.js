import React from 'react';



const showExp = () => {
    
    
           document.querySelector('#experiencepara').classList.toggle('showExp')
     

    }
const Experience = () => {



    return (
        

        <div className="experience">
                <h3>Expérience</h3>
                <div className="exp-1">
                <h4 > <span>Directeur technique   <button id="buttonExp" onClick={showExp}> Voir détails</button></span></h4>
                 
                    <p id="experiencepara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla soluta quidem sit enim aperiam ad. Velit, dolore? Adipisci quam nemo veniam voluptatum debitis totam ipsa rerum, est praesentium exercitationem.lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa voluptas molestiae vel illo est recusandae, facilis quo quibusdam sequi fugit quos corporis iusto, omnis non dolores. At unde, explicabo quod vel, error tempora consequuntur voluptatibus quae minus aut velit consectetur id laboriosam iste nostrum maiores culpa neque qui magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusandae laboriosam? Nihil dolorum repellat molestiae voluptatum et autem dicta provident at magnam corrupti sapiente, saepe dolorem ea praesentium unde sint, Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, aperiam? Atque commodi officia, sunt explicabo soluta sapiente maiores adipisci aut dicta cupiditate iusto reiciendis ratione suscipit consequuntur deleniti, placeat in culpa expedita at nisi! Placeat, voluptatum amet! Maiores perferendis eos exercitationem, sit eveniet hic nemo ex dicta at, dolores distinctio?.</p>
                    </div>      
                    <div className="exp-2">
                    <h4> <span>Directeur technique   <button id="buttonExp" onClick={showExp}> Voir détails</button></span></h4>
                    <h5>2007-2009</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusandae laboriosam</p>
                    </div>                  
        </div>
      
    
 
    );
};

export default Experience;