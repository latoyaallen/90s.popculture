import React from 'react';
import { MOBILE } from '../lib/breakpoints';
import { css, StyleSheet } from 'aphrodite-jss';

const styles = StyleSheet.create({
  videoContainer: {
    pointerEvents: 'none',
    position: 'absolute', // hide the top of the YouTube video
    top: '-60px', // hide the top of YouTube video
    zIndex: -1, // place below music player when overlap
    [MOBILE]: {
      pointerEvents: 'auto',
    },
  },

  musicContainer: {
    position: 'absolute',
    bottom: 375,
    left: 350,
    [MOBILE]: {
      left: 40,
      bottom: 250,
    },
  },
});

  const Iframe = (props) => (
    <div>
      <iframe
        src={props.src}
        height={props.height}
        width={props.width}
        title="1990.fm"
      />
    </div>
  );

  // video data
  const youTubeEmbed = "https://www.youtube.com/embed/";
  const queryParam = "?autoplay=1&mute=1&controls=0&modestbranding=1&disablekb=1&playsinline=1&enablejsapi=1&widgetid=1";
  const chanel = youTubeEmbed + "qU2yClpx7s0" + queryParam;
  const arsenioHallSaltNPepa = youTubeEmbed + "kWyArtStJxQ" + queryParam + "&start=10";
  const joeyRomoneDeborahHarry = youTubeEmbed + "cHTJnFB_IEc" + queryParam;
  const cindyCrawfordWillSmith = youTubeEmbed + "tH5EzHmwDD4" + queryParam + "&start=15";
  const princessDiana = youTubeEmbed + "YUp2OJ9QiE" + queryParam + "&start=15";
  const thierryMugler = youTubeEmbed + "anpF3vnM0RY" + queryParam + "&start=40";
  const spikeLee = youTubeEmbed + "J-dLQ65tI0Y" + queryParam ;
  const billClintonSax = youTubeEmbed + "CRatTuWdT_Q" + queryParam ;
  const mariah1991 = youTubeEmbed + "OEX1qEujzoU" + queryParam ;
  const vh1FashionMusicAwards = youTubeEmbed + "hTVk2a1nREA" + queryParam ;

  const videos = [
    {"id": 0, "url": chanel},
    {"id": 1, "url": arsenioHallSaltNPepa},
    {"id": 3, "url": joeyRomoneDeborahHarry},
    {"id": 4, "url": cindyCrawfordWillSmith},
    {"id": 5, "url": princessDiana},
    {"id": 6, "url": thierryMugler},
    {"id": 7, "url": spikeLee},
    {"id": 8, "url": billClintonSax},
    {"id": 9, "url": mariah1991},
    {"id": 9, "url": vh1FashionMusicAwards},
  ];
  // video data

  class Media extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        currentVideo: videos[0]["url"],
      };
    }

    componentDidMount () {
      // the interval time is too fast for mobile
      // since there is no way to auto play videos on mobile
      // the user has to click the play button each time
      // which is not a great experience
      this.interval = setInterval(() => this.changeVideo(), 20000);
    }

    changeVideo() {
      let count = this.state.count;
      if(count < videos.length) {
        this.setState({count: count + 1});
        this.setState({currentVideo: videos[count]["url"]});
      }
    };

    componentWillUnmount () {
      clearInterval(this.interval);
    }


    render() {
      const playlist = "https://open.spotify.com/embed/playlist/0PXEMbE3FANeoTbzo15IVp";

      return (
        <div>
          <div className={css(styles.videoContainer)}>
            <Iframe
              src={this.state.currentVideo}
              height="415"
              width="560"
            />
          </div>
          <div className={css(styles.musicContainer)}>
            <Iframe
              src={playlist}
              height="80"
              width="300"
            />
          </div>
        </div>
      );
    }
  }


  export default Media;
