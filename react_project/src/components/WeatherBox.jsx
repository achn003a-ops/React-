import "../styles/first.css"

function WeatherBox(props){
    return(
        <div ClassName="WeatherBox">
            <h2>City: {props.city}</h2>
            <p>Temperature: {props.temp}</p>
            <p>Condition: {props.condition}</p>
        </div>
    )
}
export default WeatherBox