import { useEffect } from "react";
import { useIsMount } from "../utils/useIsMount";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useStoreActions } from "easy-peasy";
import { convertRegion } from "../utils/stateNameAbbreviation";
import Weather from "../components/Weather/Weather";
import { getPosition, fetchLocation, fetchWeather } from "../api/APIUtils";
import iplocation from "iplocation";
import "../styles.scss";

const index = () => {
  const setWeather = useStoreActions(actions => actions.weather.setWeatherData);
  const setLatitude = useStoreActions(actions => actions.location.setLocationLatitude);
  const setLongitude = useStoreActions(actions => actions.location.setLocationLongitude);
  const setCity = useStoreActions(actions => actions.location.setLocationCity);
  const setState = useStoreActions(actions => actions.location.setLocationState);
  const setSpinner = useStoreActions(actions => actions.spinner.setSpinner);
  const isMount = useIsMount();

  function getWeatherLocation(lat, lng) {
    fetchLocation(lat, lng).then(results => {
      const json = results.features[0].properties.address;
      if (json.state) {
        let stateAbbr = convertRegion(json.state);
        setState(stateAbbr);
      } else if (json.country) {
        setState(json.country);
      }
      if (json.locality) {
        setCity(json.locality);
      } else if (json.town) {
        setCity(json.town);
      } else if (json.city) {
        setCity(json.city);
      } else if (json.county) {
        setCity(json.county);
      }
    });
    fetchWeather(lat, lng).then(results => setWeather(results));
  }

  useEffect(() => {
    setSpinner(true);
    if (isMount) {
      getPosition()
        .then(results => {
          const lat = results.coords.latitude;
          const lng = results.coords.longitude;
          setLatitude(lat);
          setLongitude(lng);
          getWeatherLocation(lat, lng);
          console.log("Geolocation Status: Success");
          setSpinner(false);
        })
        .catch(error => {
          const publicIp = require("public-ip");
          const providerList = require("../api/iplocation_providers.json");
          const filterData = providerList
            .filter(data => {
              return data.is_free === true;
            })
            .map(data => {
              return data.uri;
            });

          publicIp.v4().then(results => {
            iplocation(results, filterData)
              .then(res => {
                const lat = res.latitude;
                const lng = res.longitude;
                setLatitude(lat);
                setLongitude(lng);
                getWeatherLocation(lat, lng);
                setSpinner(false);
              })
              .catch(err => {
                console.error("IP Location Status:", err.message, "| Must type a city in search bar instead.");
              });
          });
          console.error("Geolocation Status:", error.message, "| Trying IP location search instead.");
        });
    }
  }, []);

  return (
    <Layout title="Weather App">
      <Header />
      <Weather />
      <Footer />
    </Layout>
  );
};

export default index;
