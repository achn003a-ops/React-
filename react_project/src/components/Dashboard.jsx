import WeatherBox from './WeatherBox'

const Dashboard=()=>{
    return(
        <>
        <WeatherBox city="New York" temp="18C" condition="Rainy" />
        <WeatherBox city="Tokyo" temp="24C" condition="Sunny" />
        <WeatherBox city="London" temp="15C" condition="Cloudy" />
        </>
    )
}

export default Dashboard;