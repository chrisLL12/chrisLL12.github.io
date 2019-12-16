import React from 'react';
import TrailList from './useStateMapLists/trailList';
import TrailListAfternoon from './useStateMapLists/trailListAfternoon';
import TrailListMorning from './useStateMapLists/trailListMorning';

let today = new Date();
let hour = today.getHours();
let greeting;

const TrailToggle = () => {
    if (hour >= 17) {
        greeting = <TrailList />;
    } else if (hour >= 12){
        greeting = <TrailListAfternoon />;
    } else if (hour >= 0) {
        greeting = <TrailListMorning />;
    } else {
        greeting = "Check out today's selection of trails.";
    }
    return (
        <div className="App">
            {greeting}
        </div>

    );
};

export default TrailToggle;