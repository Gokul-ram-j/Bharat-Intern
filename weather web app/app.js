



city="pakistan"
let apikey="c94afd9f90bda3adc26cac08109f742c"
let apiurl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`
let tempDataset=[];
let windDataset=[];

google.charts.load('current', {packages: ['corechart', 'line']});

function drawBackgroundColor() {

    //   temperture dataset and graph
      var tempData = new google.visualization.DataTable();
      tempData.addColumn('string', 'time');
      tempData.addColumn('number', 'temperature');
      

      tempData.addRows(tempDataset);

      var tempOptions = {
        width:1350,
        height:300,
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Temperature'
        },
        backgroundColor: ''
    };
    var tempChart = new google.visualization.LineChart(document.getElementById('temp_chart_div'));
    tempChart.draw(tempData, tempOptions);



    //   wind dataset and graph
      var windData = new google.visualization.DataTable();
      windData.addColumn('string', 'time');
      windData.addColumn('number', 'wind');

      windData.addRows(windDataset);

      var windOptions = {
        width:1350,
        height:300,
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Wind'
        },
        backgroundColor: ''
      };

      var windChart = new google.visualization.LineChart(document.getElementById('wind_chart_div'));
      windChart.draw(windData, windOptions);
}

//--------------------------------------getting  data on temperature for a list of time interval---------------------------------------------------
function displayWeather(weatherList){
    for(item of weatherList){
        tempDataset.push([ item.dt_txt.split(" ")[1],item.main.temp])
        windDataset.push([item.dt_txt.split(" ")[1],item.wind.speed])
    }
    google.charts.setOnLoadCallback(drawBackgroundColor);

}

//-----------------------------------getting location of background-------------------------------------------
function getBackground(location){
    let mapelem=
                `
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${location}&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                `
    document.querySelector(".mapouter").innerHTML=mapelem
}


// --------------------------------------------------------getting data----------------------------------------------
async function searching(city,apikey){
    fetch(apiurl)
        .then((Response) => Response.json())
        .then((data) => {
            if(data.cod>=400){
                console.log("place not found",data.cod)
            }
            else{
                console.log(data)};
                displayWeather(data.list)
                getBackground(data.city.name)
                region=data.city.name
                temp=data.list[0].main.temp

            }
        )
}

searching(city,apikey);



// dt_txt
// main->temp,feels_like,temp_min,temp_max,grnd_level,humidity,pressure,sea_level
// weather->0->main,description
// wind->speed,deg,gust

// dt__txt
// for getting date only -> data.list[0].dt_txt.split(" ")[1])