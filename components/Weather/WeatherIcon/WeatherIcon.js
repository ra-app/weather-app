const weatherIcon = props => {
  let icon = null;
  switch (props.condition) {
    case "clear-day":
    case "01d":
      icon = <img src={`/weather/icons/${props.color}/svg/clear.svg`} alt={props.condition} />;
      break;
    case "clear-night":
    case "01n":
      icon = <img src={`/weather/icons/${props.color}/svg/nt_clear.svg`} alt={props.condition} />;
      break;
    case "rain":
    case "10d":
    case "10n":
      icon = <img src={`/weather/icons/${props.color}/svg/rain.svg`} alt={props.condition} />;
      break;
    case "snow":
      icon = <img src={`/weather/icons/${props.color}/svg/snow.svg`} alt={props.condition} />;
      break;
    case "sleet":
    case "13d":
      icon = <img src={`/weather/icons/${props.color}/svg/sleet.svg`} alt={props.condition} />;
      break;
    case "wind":
      icon = <img src={`/weather/icons/${props.color}/svg/wind.svg`} alt={props.condition} />;
      break;
    case "fog":
    case "50d":
      icon = <img src={`/weather/icons/${props.color}/svg/fog.svg`} alt={props.condition} />;
      break;
    case "cloudy":
    // case "04d":
      icon = <img src={`/weather/icons/${props.color}/svg/cloudy.svg`} alt={props.condition} />;
      break;
    case "partly-cloudy-day":
    case "03d":
    case "04d":
      icon = <img src={`/weather/icons/${props.color}/svg/partlycloudy.svg`} alt={props.condition} />;
      break;
    case "partly-cloudy-night":
    case "03n":
    case "04n":
      icon = <img src={`/weather/icons/${props.color}/svg/nt_partlycloudy.svg`} alt={props.condition} />;
      break;
    case "hail":
      icon = <img src={`/weather/icons/${props.color}/svg/sleet.svg`} alt={props.condition} />;
      break;
    case "thunderstorm":
    case "01d":
      icon = <img src={`/weather/icons/${props.color}/svg/tstorms.svg`} alt={props.condition} />;
      break;
    case "tornado":
    case "50d":
      icon = <img src={`/weather/icons/${props.color}/svg/tornado.svg`} alt={props.condition} />;
      break;
    default:
      icon = <img src={`/weather/icons/${props.color}/svg/unknown.svg`} alt={props.condition} />;
      break;
  }
  return icon;
};

export default weatherIcon;
