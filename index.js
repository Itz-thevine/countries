window.onload = function exampleFunction( event) {
    event.preventDefault();

    const mode = document.getElementById('mode');
    

    
    mode.addEventListener('click', function(){

        const colorTwo = document.querySelectorAll('.darkTwo');
        var index, length = colorTwo.length;
        for(index = 0 ; index < length ; index++){
            colorTwo[index].style.backgroundColor = '#ffffff';
        }

        const chnge = document.querySelectorAll('.white');
        var index, len = chnge.length;
        for(index = 0 ; index < len ; index++){
            chnge[index].style.color = '#0c1011';
        }
        document.querySelector('.darkOne').style.backgroundColor = '#fafafa'
    })
}




fetch ('https://restcountries.com/v3.1/all').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completeData) =>{
    // console.log(completeData[1]);
    let data1 ="";

    completeData.map((values) =>{
        data1 += ` <div class="card col-lg-4 mb-4 darkTwo shadow-sm white card-width" style="width: 18rem;">
        <img src=${values.flags.png} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-md" style="margin-bottom: 15px;">${values.name.common}</h5>
          <p class="m-0">Population: ${values.population}</p>
          <p class="m-0">Region: ${values.region}</p>
          <p class="m-0">Capital: ${values.capital}</p>
        </div>
    </div>`
    })

    document.getElementById('root').innerHTML = data1

}).catch((err)=>{
    console.log(err);
})

// search
const search = document.getElementById('srch');

// console.log(search);

search.addEventListener("keyup", function (event){
    if(event.key === 'Enter'){
        event.preventDefault();
        
        //api call
        fetch(`https://restcountries.com/v2/name/${search.value}`).then((data) =>{
            return data.json()
        }).then((completeData) => {
            // console.log(completeData)
            
            completeData.map((values) =>{
                data1 = ` <div class="card col-lg-4 mb-4 darkTwo shadow-sm white card-width" style="width: 18rem;">
                <img src=${values.flags.png} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-md" style="margin-bottom: 15px;">${values.name.common}</h5>
                  <p class="m-0">Population: ${values.population}</p>
                  <p class="m-0">Region: ${values.region}</p>
                  <p class="m-0">Capital: ${values.capital}</p>
                </div>
            </div>`
            })

            document.getElementById('root').innerHTML = data1

        }).catch((err) => {
            console.log(err);
        })
    }
});

// filters
    
    const africa = document.getElementById('africa')
    const america = document.getElementById('america')
    const asia = document.getElementById('asia')
    const europe = document.getElementById('europe')
    const oceania = document.getElementById('oceania')

    africa.addEventListener("click", function(event){

        event.preventDefault();

        // console.log(africa.id)

        fetch(`https://restcountries.com/v3.1/region/africa`).then((data) =>{
            return data.json()
        }).then((completeData) => {
            // console.log(completeData)

            let data1 ="";

            completeData.map((values) =>{
                data1 += ` <div class="card col-lg-4 mb-4 darkTwo shadow-sm white card-width" style="width: 18rem;">
                <img src=${values.flags.png} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-md" style="margin-bottom: 15px;">${values.name.common}</h5>
                  <p class="m-0">Population: ${values.population}</p>
                  <p class="m-0">Region: ${values.region}</p>
                  <p class="m-0">Capital: ${values.capital}</p>
                </div>
            </div>`
            })

            document.getElementById('root').innerHTML = data1

        }).catch((err) => {
            console.log(err);
        })

    })    

    america.addEventListener("click", function(event){

        event.preventDefault();

        // console.log(africa.id)

        fetch(`https://restcountries.com/v3.1/region/americas`).then((data) =>{
            return data.json()
        }).then((completeData) => {
            // console.log(completeData)

            let data1 ="";

            completeData.map((values) =>{
                data1 += ` <div class="card col-lg-4 mb-4 darkTwo shadow-sm white card-width" style="width: 18rem;">
                <img src=${values.flags.png} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-md" style="margin-bottom: 15px;">${values.name.common}</h5>
                  <p class="m-0">Population: ${values.population}</p>
                  <p class="m-0">Region: ${values.region}</p>
                  <p class="m-0">Capital: ${values.capital}</p>
                </div>
            </div>`
            })

            document.getElementById('root').innerHTML = data1

        }).catch((err) => {
            console.log(err);
        })

    })

    asia.addEventListener("click", function(event){

        event.preventDefault();

        // console.log(africa.id)

        fetch(`https://restcountries.com/v3.1/region/asia`).then((data) =>{
            return data.json()
        }).then((completeData) => {
            // console.log(completeData)

            let data1 ="";

            completeData.map((values) =>{
                data1 += ` <div class="card col-lg-4 mb-4 darkTwo shadow-sm white card-width" style="width: 18rem;">
                <img src=${values.flags.png} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-md" style="margin-bottom: 15px;">${values.name.common}</h5>
                  <p class="m-0">Population: ${values.population}</p>
                  <p class="m-0">Region: ${values.region}</p>
                  <p class="m-0">Capital: ${values.capital}</p>
                </div>
            </div>`
            })

            document.getElementById('root').innerHTML = data1

        }).catch((err) => {
            console.log(err);
        })

    })   

    europe.addEventListener("click", function(event){

        event.preventDefault();

        // console.log(africa.id)

        fetch(`https://restcountries.com/v3.1/region/europe`).then((data) =>{
            return data.json()
        }).then((completeData) => {
            // console.log(completeData)

            let data1 ="";

            completeData.map((values) =>{
                data1 += ` <div class="card col-lg-4 mb-4 darkTwo shadow-sm white card-width" style="width: 18rem;">
                <img src=${values.flags.png} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-md" style="margin-bottom: 15px;">${values.name.common}</h5>
                  <p class="m-0">Population: ${values.population}</p>
                  <p class="m-0">Region: ${values.region}</p>
                  <p class="m-0">Capital: ${values.capital}</p>
                </div>
            </div>`
            })

            document.getElementById('root').innerHTML = data1

        }).catch((err) => {
            console.log(err);
        })

    })

    oceania.addEventListener("click", function(event){

        event.preventDefault();

        // console.log(africa.id)

        fetch(`https://restcountries.com/v3.1/region/oceania`).then((data) =>{
            return data.json()
        }).then((completeData) => {
            // console.log(completeData)

            let data1 ="";

            completeData.map((values) =>{
                data1 += ` <div class="card col-lg-4 mb-4 darkTwo shadow-sm white card-width" style="width: 18rem;">
                <img src=${values.flags.png} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-md" style="margin-bottom: 15px;">${values.name.common}</h5>
                  <p class="m-0">Population: ${values.population}</p>
                  <p class="m-0">Region: ${values.region}</p>
                  <p class="m-0">Capital: ${values.capital}</p>
                </div>
            </div>`
            })

            document.getElementById('root').innerHTML = data1

        }).catch((err) => {
            console.log(err);
        })

    })    

