import React, { useState } from 'react';


//    document.querySelector('#').classList.toggle('showExp')



const Experience = () => {
    
    const [showInfo, setShowInfo]= useState('')
    
    const showExp = (item) => {
        if(item.id !== showInfo)
        setShowInfo(item.id)
        else{
            setShowInfo('')
        }
    
     
    }
        

const experiences = [
    {id: 1, title : 'Directeur Technique', content :"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla soluta quidem sit enim aperiam ad. Velit, dolore? Adipisci quam nemo veniam voluptatum debitis totam ipsa rerum, est praesentium exercitationem.lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa voluptas molestiae vel illo est recusandae, facilis quo quibusdam sequi fugit quos corporis iusto, omnis non dolores. At unde, explicabo quod vel, error tempora consequuntur voluptatibus quae minus aut velit consectetur id laboriosam iste nostrum maiores culpa neque qui magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusandae laboriosam? Nihil dolorum repellat molestiae voluptatum et autem dicta provident at magnam corrupti sapiente, saepe dolorem ea praesentium unde sint, Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, aperiam? Atque commodi officia, sunt explicabo soluta sapiente maiores adipisci aut dicta cupiditate iusto reiciendis ratione suscipit consequuntur deleniti, placeat in culpa expedita at nisi! Placeat, voluptatum amet! Maiores perferendis eos exercitationem, sit eveniet hic nemo ex dicta at, dolores distinctio? ",years : "2007-2009"}
,
    {id: 2, title : 'Directeur Technique ASUS', content :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla soluta quidem sit enim aperiam ad. Velit, dolore? Adipisci quam nemo veniam voluptatum debitis totam ipsa rerum, est praesentium exercitationem.lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa voluptas molestiae vel illo est recusandae, facilis quo quibusdam sequi fugit quos corporis iusto, omnis non dolores. At unde, explicabo quod vel, error tempora consequuntur voluptatibus quae minus aut velit consectetur id laboriosam iste nostrum maiores culpa neque qui magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusanda", years : "2007-2009"},
    {id: 3, title : 'Directeur Technique ASUS', content :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla soluta quidem sit enim aperiam ad. Velit, dolore? Adipisci quam nemo veniam voluptatum debitis totam ipsa rerum, est praesentium exercitationem.lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa voluptas molestiae vel illo est recusandae, facilis quo quibusdam sequi fugit quos corporis iusto, omnis non dolores. At unde, explicabo quod vel, error tempora consequuntur voluptatibus quae minus aut velit consectetur id laboriosam iste nostrum maiores culpa neque qui magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusanda", years : "2007-2009"}, {id: 4, title : 'Directeur Technique ASUS', content :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla soluta quidem sit enim aperiam ad. Velit, dolore? Adipisci quam nemo veniam voluptatum debitis totam ipsa rerum, est praesentium exercitationem.lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa voluptas molestiae vel illo est recusandae, facilis quo quibusdam sequi fugit quos corporis iusto, omnis non dolores. At unde, explicabo quod vel, error tempora consequuntur voluptatibus quae minus aut velit consectetur id laboriosam iste nostrum maiores culpa neque qui magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusanda", years : "2007-2009"},
    {id: 5, title : 'Directeur Technique ASUS', content :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla soluta quidem sit enim aperiam ad. Velit, dolore? Adipisci quam nemo veniam voluptatum debitis totam ipsa rerum, est praesentium exercitationem.lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa voluptas molestiae vel illo est recusandae, facilis quo quibusdam sequi fugit quos corporis iusto, omnis non dolores. At unde, explicabo quod vel, error tempora consequuntur voluptatibus quae minus aut velit consectetur id laboriosam iste nostrum maiores culpa neque qui magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusanda", years : "2007-2009"}
]

    return (
        

        <div className="experience">
                <h3>Expérience</h3>
                
                        {
                            experiences.map ((item) => {
                                return (
                                    <div className={"exp-" + item.id}>
                                   <span style={{display : 'flex', justifyContent:'space-between'}}>   
                                <h4>{item.title}</h4>
                                <button id="buttonExp" onClick={() => showExp(item)}> Voir détails</button>
                                </span> 
                                <h5>{item.years}</h5>

                                {showInfo == item.id ? (  <p>{item.content}</p> ) : null}
                               
                                </div>
                            )})
                        }
                {/* <h4 > <span>Directeur technique   <button id="buttonExp" onClick={showExp}> Voir détails</button></span></h4>
                 
                    <p id="experiencepara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla soluta quidem sit enim aperiam ad. Velit, dolore? Adipisci quam nemo veniam voluptatum debitis totam ipsa rerum, est praesentium exercitationem.lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa voluptas molestiae vel illo est recusandae, facilis quo quibusdam sequi fugit quos corporis iusto, omnis non dolores. At unde, explicabo quod vel, error tempora consequuntur voluptatibus quae minus aut velit consectetur id laboriosam iste nostrum maiores culpa neque qui magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusandae laboriosam? Nihil dolorum repellat molestiae voluptatum et autem dicta provident at magnam corrupti sapiente, saepe dolorem ea praesentium unde sint, Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, aperiam? Atque commodi officia, sunt explicabo soluta sapiente maiores adipisci aut dicta cupiditate iusto reiciendis ratione suscipit consequuntur deleniti, placeat in culpa expedita at nisi! Placeat, voluptatum amet! Maiores perferendis eos exercitationem, sit eveniet hic nemo ex dicta at, dolores distinctio?.</p>
                    </div>      
                    <div className="exp-2">
                    <h4> <span>Directeur technique   <button id="buttonExp" onClick={showExp}> Voir détails</button></span></h4>
                    <h5>2007-2009</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto expedita necessitatibus architecto dignissimos, autem ratione cum voluptas nihil dolores sequi quaerat deserunt, nisi natus assumenda eveniet facere quibusdam recusandae laboriosam</p> */}
                    </div>                  
        
      
    
 
    );
};

export default Experience;