//const { off } = require("process");

 //get api 
    const url=`https://api.covid19api.com/summary`
    fetch(url)
    .then(res=>res.json())
    .then(data=>dilplayGlobalData(data));
    
// display data
    const dilplayGlobalData=(data)=>{
        const global =  data.Global;
        const countries =  data.Countries;


// Global result
        const globalResult=document.getElementById('global')
        const div=document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card h-100" >
            <div class="card-body">
                <h4> NewConfirmed: ${global.NewConfirmed}</h1>
                <h4 class="card-title"> TotalConfirmed :${global.TotalConfirmed}</h5>
                <h4 class="card-title"> TotalDeaths :${global.TotalDeaths}</h5>
                <h4 class="card-title"> NewDeaths :${global.NewDeaths}</h5>
                <h4 class="card-title"> Date :${global.Date}</h5>
            </div>
        </div>
        `;
        globalResult.appendChild(div);
// country result
        const countryResult=document.getElementById('country-result')
         for(country of countries){
            const countryDiv=document.createElement('div');
            countryDiv.classList.add('card')
             countryDiv.innerHTML=`
             <h4>${country.Country}</h4>
                <div class="card">
                    <h5>TotalConfirmed :${country.TotalConfirmed}</h5>
                    <h5>NewConfirmed :${country.NewConfirmed}</h5>
                    <h5>TotalDeaths :${country.TotalDeaths}</h5>
                    <h5>NewDeaths :${country.NewDeaths}</h5>
                    <h5>Date :${country.Date}</h5>
                </div>
             `;
             countryResult.appendChild(countryDiv);
        }
}

// get api for search
 //get api 
 const submit=()=>{
     const inputArea=document.getElementById('input-area')
     const searchText=inputArea.value;
     inputArea.value='';

     const search=`https://api.covid19api.com/summary`
     fetch(search)
     .then(res=>res.json())
     .then(data=>dilplaySearchlData(data));  


     const dilplaySearchlData=(data)=>{
        const countries = data.Countries;
        for(country of countries){
            let totalCountry=country.Slug;
            const text= searchText.toLowerCase();           
            if(totalCountry===text){
                console.log('confirm',text);
                const showSearch=document.getElementById('search-result');
                showSearch.textContent='';
                const showSearchDiv=document.createElement('div')
                showSearchDiv.classList.add('card');
                showSearchDiv.innerHTML=`
             <h4>${country.Country}</h4>
                <div class="card">
                    <h5>TotalConfirmed :${country.TotalConfirmed}</h5>
                    <h5>NewConfirmed :${country.NewConfirmed}</h5>
                    <h5>TotalDeaths :${country.TotalDeaths}</h5>
                    <h5>NewDeaths :${country.NewDeaths}</h5>
                    <h5>Date :${country.Date}</h5>
                </div>
                 
                `;
                showSearch.appendChild(showSearchDiv);


            }
    
        }
     }

 }


