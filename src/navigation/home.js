import React from 'react';
import TrailToggle from '../TrailToggle';
import Greeting from '../greeting';

const Home = () => {
    return (
        <div className="App">
            <div className="content">
                <h4>A hiking guide for the surrounding Irvine area.</h4>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/20131214-0163_Saddleback.JPG/2880px-20131214-0163_Saddleback.JPG"/>

                <Greeting />
                <TrailToggle />

                <p>
                    Are you in the Orange County area and looking for trails to bike, hike, and run on? Then look no
                    further! Irvine is a great place for hikes
                    and outdoor recreation like mountain biking, camping, and nature photography. Other places like
                    Crystal Cove State Park and the Laguna Coast Wilderness Park
                    are great places for outdoor activities as well and offer many options in terms of the best trails
                    you'll find in the area.
                </p>
                <p>
                    There are also many local parks for hiking and the general outdoors. For example, the Bommer Canyon
                    Trail is a really fun, almost 5 mile hike that isn't
                    too difficult for most skill levels. It's a nice and quiet area with lots of scenery. You'll also
                    see a lot of other hikers and runners scurrying about the trail.
                </p>
                <p>
                    There's also Hicks Canyon Community Park in Irvine which is not just fun for get-togethers and
                    picnics but has great hiking. It even has a river, is dog friendly,
                    and is the opposite of boring with its running and mountain biking!
                </p>
                <p>
                    Whatever you're interest, you won't find it difficult to come across outdoor activites you'll enjoy!
                </p>

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

export default Home;