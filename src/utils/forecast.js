const request = require('request')

const forecast = (long, lat , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6971f9302702259bf058dcf2a4acac17&query=' + long + ',' + lat

    request({url, json: true}, (error, { body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, it feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast