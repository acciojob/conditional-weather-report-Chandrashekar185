const WeatherDisplay=({weather})=>{
    const {temperature,condition}=weather;
    const tempStyle={color: temperature > 20 ? 'red':'blue'}
    return(
        <div>
            <p>Temperature:<span style={tempStyle}>{temperature}</span></p>
            <p>condition:{condition}</p>


        </div>
    )
}
export default WeatherDisplay;