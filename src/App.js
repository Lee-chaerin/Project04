import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5084%2F2021%2F07%2F26%2F0000162761_001_20210726002226818.jpg&type=sc960_832",
    rating: 5
  },
  {
    id: 2,
    name: "samgyeopsal",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjZfMjAz%2FMDAxNjI3Mjc3MzcyMTk4.sQL1ZYlM0CtlrBPrQwQV-Yrw0Nvlma3okDvVBFdcNskg.lU0Uwu6y_uuYt6jiWxr9l1MsLIb0mtEhLWMupfp_FCUg.JPEG.dbalswjd97%2FKakaoTalk_20210726_135055126_06.jpg&type=sc960_832",
    rating: 4.9
  },
  {
    id: 3,
    name: "bibimbap",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDlfMjYz%2FMDAxNjI4NTEyMDg1ODg1.UfGJsWnArO5nQeR93asTL5ImY2JeQqsMPBV8B5mH7hQg.xEUJIr9RO9ny3vAWVT1P3eNd_kxKw0YxXGV8zW8ix80g.JPEG.sj5636v%2FIMG_8993.jpg&type=a340",
    rating: 4.8
  },
  {
    id: 4,
    name: "doncasu",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjhfMjc4%2FMDAxNjI3NDUzODI2MzY3.jPEYWJjVkc1_f_Lj4WXdx9s3kv6CyBig9xxUZpBWKXwg.a_rl0T2bnK9MUFirwnGCXuvLSQgTi35hD22XFOos3ZMg.JPEG.djariel%2FIMG_9416.jpg&type=sc960_832",
    rating: 5.5
  },
  {
    id: 5,
    name: "kimbap",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTVfMjg1%2FMDAxNjI5MDMyNDQ5MDEw.03S2Sj83YDK9e-HIL-DYijmzmIgeLaUsyHeUNAX1xswg.Q-8t_sKlxY18rZV2g28lTwBG8qvfAdcoRlioeItSWygg.JPEG.hafoom77%2FScreenshot%25A3%25DF20210815%25A3%25AD215935%25A3%25DFInstagram.jpg&type=sc960_832",
    rating: 4.7
  }
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        />
      ))}
    </div>
  );
}

export default App;