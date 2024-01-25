
fetch("api.openweathermap.org/data/2.5/forecast?q={chennai}&appid={}")
.then((res)=>res.json)
.then((data)=>{
    console.log(data)
})

fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={}")
.then((res)=>res.json)
.then((data)=>{
    console.log(data)
})