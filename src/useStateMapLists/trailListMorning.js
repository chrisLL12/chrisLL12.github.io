import React, { useState } from 'react';
import TrailDetailMorning from '../trailData/trailDetailMorning';

const TrailListMorning = () => {
    const [toggled, toggle] = useState(false);

    return (
        <>
            <div className="App">
                <button className="button" onClick={() => toggle(toggled => !toggled)}>
                    Click for Trails!
                </button>
                {toggled && TrailDetailMorning.map((trailSpecs, index) => {
                        return <div>
                            <h3>{trailSpecs.title}</h3>
                            <img src={trailSpecs.image}/>
                            <p>{trailSpecs.content}</p>
                            <p>Level: {trailSpecs.difficulty}</p>
                            <p>Distance: {trailSpecs.distance}</p>
                            <p>Rating: {trailSpecs.rating}</p>
                            <hr />
                        </div>
                })}

            </div>
        </>

    );
};

export default TrailListMorning;