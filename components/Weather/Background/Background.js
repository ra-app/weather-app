import styles from "./Background.module.scss";

const weatherBackground = props => {
  let image = null;
  let divStyle = null;
  if (props.condition) {
    if ( props.condition == "04d"){
      divStyle = {
        backgroundImage: `url('/weatherBackgrounds/cloudy.jpg')`
      };    
    }else{
      divStyle = {
        backgroundImage: `url('/weatherBackgrounds/${props.condition}.jpg')`
      };

    }
    image = <div className={styles["background"]} style={divStyle} />;
  }

  return image;
};

export default weatherBackground;
