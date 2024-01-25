
fetch("api.openweathermap.org/data/2.5/forecast?q={chennai}&appid={c9368f9dd49c8c5fecb45b95d3b685aa}")
.then((res)=>res.json)
.then((data)=>{
    console.log(data)
})

fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={c9368f9dd49c8c5fecb45b95d3b685aa}")
.then((res)=>res.json)
.then((data)=>{
    console.log(data)
})