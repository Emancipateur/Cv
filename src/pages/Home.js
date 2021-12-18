import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
<Navigation />
<div className="homeContent">
    <div className="content">
        <h1>Jean sctact</h1>
        <h2>Developpeur web</h2>
        <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">Telecharger CV</a>
        </div>
    </div>
</div>
        </div>
    );
};

export default Home;