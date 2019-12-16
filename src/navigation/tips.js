import React from 'react';

const Tips = () => {
    return (
        <div className="App">
            <div className="content">
                <br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Santa_Ana_River_and_Path.jpg/2560px-Santa_Ana_River_and_Path.jpg" />
                <h2>Some tips before going out</h2>

                <ul>
                    <li>Plan ahead and pick a hike you'll probably like. Be sure it's suitable with your skill level and fitness.</li>
                    <li>Bring the supplies you'll need like food and water.</li>
                    <li>Be sure to check the weather beforehand to make sure you go prepared.</li>
                    <li>Be sure to wear the correct shoes and socks.</li>
                    <li>Don't pack too much! Try to stay as light as possible.</li>
                    <li>Have fun and don't litter!</li>
                </ul>

            </div>
            <hr />
            <footer className="footer">
                    <p> &copy;2019 Hiking Guides.
                    Photos by
                        &nbsp;
                    <a href="https://www.cityofirvine.org/parks-facilities/community-parks-centers">
                        City of Irvine</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Turtle_Rock,_Irvine,_California#/media/File:Turtle_rock_feb_2008_detail.jpg">
                        Jerry Picker</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Santa_Ana_River_Trail#/media/File:Santa_Ana_River_and_Path.jpg">
                        Basar</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Santa_Ana_Mountains#/media/File:20131214-0163_Saddleback.JPG">
                        Nandaro</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Woodbridge,_Irvine,_California#/media/File:North_Woodbridge_Lake_2008-02-29.jpg">
                        Armin Eshaiker</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/San_Diego_Creek_bicycle_path">
                        OChistory</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Woodbridge,_Irvine,_California#/media/File:Woodbridge.jpg">
                        David Eppstein</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Bommer_Canyon#/media/File:Bommer_Canyon_Bridge.jpg">
                        Sueswim03</a>,
                        &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Irvine_Lake#/media/File:Irvine_lake_California_photo_D_Ramey_Logan.jpg">
                        D Ramey Logan</a>,

                    licensed under the
                    <a href="https://creativecommons.org/licenses/by-sa/3.0/">&nbsp;Attribution: Sharelike 4.0
                    International License.</a>
                    </p>
            </footer>
        </div>
    );
};

export default Tips;



