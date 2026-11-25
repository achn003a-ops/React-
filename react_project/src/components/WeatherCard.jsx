const WeatherCard = () => {

    let is_sunny = true
    return(
        <>
        <div className="card">
           <div className="weather">
            {
                is_sunny ? <>
                <img src="/sunny.png" />
                 <h2>Sunny ☀</h2>
                 </>
                 : 
                 <>
                 <img src="/rainy.jpg" />
                 <h2>Rainy 🌧</h2>
                 </>
            }

            </div>
            <h3><b>Location:</b> Chandigarh</h3>
           <h3><b>Tempreture :</b> 30c</h3>

        </div>
        </>
    )
}


export default WeatherCard