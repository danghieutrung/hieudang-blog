// src/Pages/Blogs/SpotifyBlog/SpotifyBlog.js
import React from "react";

import ContactMe from "../../../Components/ContactMe.js";
import HomeSection from "../../../Components/HomeSection.js";
import Head from "../../../Components/Head.js";
import ScrollUpButton from "../../../Components/ScrollUpButton.js";
import SingleBlogFooter from "../SingleBlogFooter.js";
import SingleBlogHeader from "../SingleBlogHeader.js";

import BarChartRaceArtists from "./Plots/BarChartRaceArtists.js";
import BarChartRaceSongs from "./Plots/BarChartRaceSongs.js";
import SankeyDiagram from "./Plots/SankeyDiagram.js";
import GanttArtist from "./Plots/GanttArtist.js";
import GanttSong from "./Plots/GanttSong.js";
import Sunburst from "./Plots/Sunburst.js";
import MatrixTaylor from "./Plots/MatrixTaylor.js";
import DivergingBar from "./Plots/DivergingBar.js";
import Treemap from "./Plots/Treemap.js";
import Waterfall from "./Plots/Waterfall.js";
import WindRose from "./Plots/WindRose.js";
import Dashboard from "./Plots/Dashboard.js";

import "./CSS/plots.css";

function SpotifyBlog() {
  return (
    <div>
      <Head />
      <SingleBlogHeader />
      <main className="main">
        <HomeSection
          imgUrl={"/img/ava/me_little.jpg"}
          profession={"Inception"}
        />
        <h1 className="blog-title">
          Chasing Melodies: 163,000 Spotify Minutes in 10 Charts
        </h1>
        <h2 className="plot-heading">
          1. Bar Chart Race: All-time Most-played Songs and Artists
        </h2>
        <BarChartRaceSongs />
        <h3 className="plot-text">The Queen</h3>
        <p className="plot-text">
          <b>Taylor Swift: </b>Growing up was listening to Taylor Swift songs in
          my dad's car. <i>Life was easy&nbsp;</i> when I was living{" "}
          <i>The best day</i>. They played{" "}
          <b>We Are Never Ever Getting Back Together</b> on MTV when I was 9,{" "}
          <i>and that was the moment I knew</i>, that <i>for the first time</i>,
          <i> I was enchanted to meet&nbsp;</i> my gorgeous queen. And{" "}
          <i>everything has changed</i>. Who is Taylor Swift? For the blind, she
          is the vision. For the hungry, she is the chef. For the thirsty, she
          is the water. If Taylor thinks, I agree. If Taylor speaks, I’m
          listening. If Taylor has one fan, it is me. If Taylor has no fans, I
          don’t exist.
        </p>
        <div className="plot">
          <img
            src="/blog/design/taylor.jpg"
            alt="https://in.pinterest.com/pin/542472717591871380/"
            className="plot"
            style={{ height: "300px", width: "230px" }}
          />
        </div>
        <p className="img-description">
          https://in.pinterest.com/pin/542472717591871380/
        </p>
        <h3 className="plot-text">Classical</h3>
        <p className="plot-text">
          <b>Piano and Concerto: </b>I was only into piano and classical music
          late in high school. I came across a YouTube video a pianist named
          Rousseau playing Moonlight Sonata 3rd. It struck me, simply a
          beautiful piece. Soon all contents on politics and sports disappeared
          from my social media, and my YouTube was filled with piano and
          classical pieces. And then there were Chopin, Mozart, Paganini pieces
          playing when I washed my clothes, when I did the dishes, or when I did
          my homework.
        </p>
        <BarChartRaceArtists />
        <h3 className="plot-text">The greatest</h3>
        <p className="plot-text">
          <b>1. The Pledge: </b>The first few times I listened to the piece, I
          didn’t think much of it. Still, I decided to give it a few more
          chances, since it was the only video by Rousseau with over 100M views.
          It was a typical dark, rainy day that saps your motivation to do
          anything normally enjoyable. I could not focus on my homework, and
          playing games was boring, and picking up a book was tedious. Out of
          boredom, I turned on the video, for it was the only reasonable thing
          to do in that moment. The beginning pace was so slow, and the sound
          was so small to barely hear anything at normal volume, and that was
          always when I swiped to the next video.
        </p>
        <p className="plot-text">
          <b>2. The Turn: </b>But on that particular day, I kept my focus on the
          rhythm, anticipating the transition to the main theme. I have never
          been that far into the piece before, and it felt like taking the same
          old route to school every day until one day you stumbled upon a
          hidden, vibrant corner that captivated you. I found myself desiring to
          explore every angle of that small path, intrigued by its newfound
          beauty, gently closed my eyes and carefully catched every node of the
          rhythm.
        </p>
        <div className="plot">
          <img
            src="/blog/design/nuvolebianche.png"
            alt="https://www.youtube.com/watch?v=4VR-6AS0-l4"
            className="plot"
          />
        </div>
        <p className="img-description">
          https://www.youtube.com/watch?v=4VR-6AS0-l4
        </p>
        <p className="plot-text">
          <b>3. The Prestige: </b>The main theme soared, and in that moment, I
          just knew Nuvole Bianche was the greatest musical pieces I ever
          listened to. It was a rainy, dreadful afternoon, with only the
          faintest rays of sunlight struggling to break through the dark clouds
          shadowing the boundless and gloomy sky. In a small apartment, a gentle
          melody warmed the air, weaving threads of hope and joy. Like an a
          mischievous child, I cracked a little smile, and all the fatigue and
          worries all these times magically dissolved into nothingness. Suddenly
          in that space, the world faded away, and nothing had ever existed. It
          was just me standing there, speechless, and heart-warmed, and puzzled,
          wondering if there were others, from all walks of life, were inspired
          and uplifted by Ludovico Einaudi's enchanting music the same way I
          did, unconciously hypnotized and lost in the soothign rhythm of a true
          masterpiece.
        </p>
        <h3 className="plot-text">V-Pop</h3>
        <p className="plot-text">
          <b>Sơn Tùng M-TP, Justatee, and others: </b>I almost never paid any
          attention to V-Pop my whole life, for I always thought US-UK pop was
          superior. Eventually I picked up V-Pop late in my 3rd year in
          university, and I have always been on my V-Pop playlist lately. Yet
          Taylor Swift is still the best❤️❤️❤️.
        </p>
        <h2 className="plot-heading">
          2. Sankey Diagram: 100 Most-played Songs
        </h2>
        <SankeyDiagram />
        <div className="plot-text">
          <b>Proliferation: </b>My passion for music spans a vibrant array of
          genres. I’m drawn to the heartfelt melodies of US-UK songs, especially
          those by Taylor Swift, whose storytelling resonates deeply with me.
          Equally, I find solace and inspiration in the world of instrumental
          music. Each note tells a story, and every rhythm evokes cherished
          memories of my life. Music fills my heart with gratitude, a constant
          source of joy and a reminder of the countless blessings that have come
          my way.
        </div>
        <h2 className="plot-heading">
          3. Gantt Chart: Top Songs and Artists of the Month
        </h2>
        <GanttArtist />
        <p className="plot-text">
          <b>The greatest musical achievement: </b>In 5 years, only 9 artists
          have ever achieved the prestigious title of being named my personal
          Artist of the Month. Among them, <b>Taylor Swift</b> stands out with
          an impressive 36 honors, followed by <b>Ludovico Einaudi</b> with 17.
          Other notable artists include <b>Ed Sheeran</b>, <b>Chopin</b>,{" "}
          <b>Joe Hisaishi</b>, and <b>Lana Del Rey</b>, each recognized once.
          This chart also highlights my growing passion for V-Pop, as the last 6
          Artists of the Month have all been V-Pop singers. <b>Justatee</b> and{" "}
          <b>Andiez</b> were my top artists in May and June 2024, while{" "}
          <b>Sơn Tùng M-TP</b> has dominated as my top artist for the past 4
          months.
        </p>
        <GanttSong />
        <p className="plot-text">
          <b>The greatest tracks ever produced: </b>While the Top Artist of the
          Month award features only nine artists, the Song of the Month award
          includes 22 songs. Nuvole Bianche has achieved the remarkable feat of
          being a 23-time SOTM, including an astounding 15 consecutive months
          from February 2021 to April 2022. 8 tracks by Taylor Swift have also
          topped the monthly leaderboards, most notably Enchanted, which has
          claimed the title 11 times, and Sparks Fly, with 5 times. Similar to
          the Artist of the Month category, the past six months have also seen
          V-Pop tracks dominate the charts, including <b>Suýt Nữa Thì</b> in May
          2024 and <b>Nơi Này Có Anh</b> in the last 5 months.
        </p>
        <h2 className="plot-heading">
          4. Sunburst Chart: My Most-played Albums
        </h2>
        <p className="plot-text">
          <b>This chart only includes albums I have played at least 5 tracks</b>
        </p>
        <Sunburst />
        <p className="plot-text">
          <b>Taylor Swift: </b>No surprise that Taylor Swift dominated another
          chart with 7 albums, with my the 3 most popular being <b>Speak Now</b>
          , <b>Red</b>, and <b>Fearless</b>.
        </p>
        <p className="plot-text">
          <b>Ludovico Einaudi: </b>The chart also features 6 albums by the
          Italian composer. Besides <b>Nuvole Bianche</b>, <b>Oltremare</b>,{" "}
          <b>Experience</b>, and <b>Primavera</b> are my favorite tracks.
        </p>
        <h2 className="plot-heading">5. Matrix Table: My Taylor Top 10</h2>
        <MatrixTaylor />
        <p className="plot-text">
          <b>Fearless: </b>
          <i>Haters gonna hate hate hate hate hate</i>, but if there is someone
          that deserves a chart of her own, that person is Taylor Swift. Old
          heads and new Taylor Swift fans, look away, but this is my Personal
          Top 10 Taylor Swift songs of all time. First off, none of my Top 10
          favorites feature in Rolling Stone's all-time list. These beautiful
          tracks have always resonated with me and have been a constant presence
          throughout my childhood. They simply are the songs of my life.
        </p>
        <p className="plot-text">
          <b>Timeless: </b>Why are all these songs from ten years ago? There are
          two reasons: I never get bored of listening to the same tracks
          repeatedly—they will always hold a special place in my heart. And I
          have a confession: I haven’t explored any new Taylor Swift songs since{" "}
          <b>Look What You Made Me Do</b> back in 2017. For me, that marked the
          end of the country princess era. While I’m no longer into her newer
          music, I remain a true and supportive fan of everything she’s
          accomplished. She is an incredible person and will always be my role
          model.
        </p>
        <h2 className="plot-heading">
          6. Diverging Bar Chart: Westlife vs Backstreet Boys
        </h2>
        <DivergingBar />
        <p className="plot-text">
          <b>Recall: </b> I still remember those summer nights when my mom, my
          brother, and I would take the 51 bus to Chùa Bộc to buy new clothes.
          Almost every shop we visited, an English song seemed to play on
          repeat, a catchy hit that filled the air. Years went by, the romantic
          melody echoed in my mind, and I still never knew the song's name, and
          Shazam didn’t exist back then. It wasn't until I was in university,
          sharing a hall with my roommate, that I finally heard it again. He
          played the song while taking a shower, and it was <b>My Love</b> by
          Westlife. It felt like a 15-year search had come to an end,
          reconnecting me with a cherished piece of my childhood.
        </p>
        <h2 className="plot-heading">7. Treemap Chart: Disney Songs</h2>
        <Treemap />
        <p className="plot-text">
          <b>Mischievous: </b>There's a child in me that comes to life when I
          watch animated movies or listen to Disney songs. When I was little, I
          watched <b>Tangled</b> with my brother late one night, and mom made us
          pause the movie to go to bed. We stopped at the moment when Rapunzel
          and Flynn were on the boat together, watching the lanterns float into
          the sky on Rapunzel's birthday. <b>Tangled</b> is one of my favorite
          childhood movies, along with <b>How to Train Your Dragon</b>, which
          I’ve seen at least 15 times, and also <b>Toy Story</b> and{" "}
          <b>Finding Nemo</b>.
        </p>
        <h2 className="plot-heading">
          8. Waterfall Chart: My Listening Activity
        </h2>
        <Waterfall />
        <p className="plot-text">
          <b>Ocean Waves: </b>Years pass, carrying with them the ups and downs
          of life. Yet music remains a constant, always true and ready to uplift
          my spirits. On average, I spend about 90 minutes a day on Spotify—an
          unexpected companion I never knew I needed.
        </p>
        <h2 className="plot-heading">9. Wind Rose Chart: The Replayer</h2>
        <WindRose />
        <p className="plot-text">
          <b>Reminiscent: </b> I could read <i>the very last line</i> of{" "}
          <b>Harry Potter and the Half-Blood Prince</b> a hundred times more and
          still be astounded just like the first time. I could watch{" "}
          <b>How to Train Your Dragon</b> for the sixteenth time and still enjoy
          every second of it. I still relive the moment when my favorite player
          and childhood idol transformed into the Flying Dutchman during that
          World Cup rematch, even though he later moved to my least favorite
          club - one of those rare moments that broke my heart of a little
          child💔.
        </p>
        <p className="plot-text">
          <b>Loyalty: </b>I often find myself lost in the uplifting melody of{" "}
          <b>Sparks Fly</b>, the melancholic theme from <b>Enchanted</b>, or the
          relaxing flow of <b>Nuvole Bianche</b>, playing on repeat for hours. I
          embrace whatever resonates with my feelings in the moment, never
          feeling the urge to seek something new out of boredom. After all,
          loyalty is always reflected in the name my parents gave me.
        </p>
        <h2 className="plot-heading">10. Dashboard: 163000 Minutes</h2>
        <Dashboard />
        <p className="plot-text">
          <b>Tomorrow: </b>And this dashboard, shamelessly made from Powerpoint,
          wraps my 163000 minutes on Spotify. I will keep listening and
          discovering new rhythms and the sounds of life. You've come this far,
          and I hope you enjoy these little glimpses into my life. I’m sure
          you’ll write meaningful stories of your own, and I believe in each and
          every one of you. ❤️
        </p>
        <p className="plot-text">
          <br />
          <br />
          <b>Blessings: </b>I would like to say thank you to my dad, mom, and
          brother for the constant support that I am forever grateful for. And a
          special shoutout to my wonderful friends,{" "}
          <a
            href="https://www.linkedin.com/in/luke-duc-nguyen-minh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minh Duc
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/ducanhdo183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Duc Anh
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/van-thang-nguyen-0271912a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thang
          </a>
          , who inspired me to start this small project!
        </p>
        <ContactMe />
      </main>
      <SingleBlogFooter />
      <ScrollUpButton />
    </div>
  );
}

export default SpotifyBlog;
