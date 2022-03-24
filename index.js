   

//search field
const srch = document.getElementById('srch');

srch.addEventListener('click', function(){
    const srchP = document.getElementById('srch-p');
    srchP.style.display = 'none';
})

// the filter by region button
const drop = document.querySelector('.drop');

drop.addEventListener('click', function(){
    var droplist = document.querySelector('.droplist');
    droplist.classList.toggle('droplist-v')
})

// get the value of each of the cards



// my func

function myfunc () {
    const here = document.querySelectorAll('.here');

    here.forEach(function(t){
        t.addEventListener('click', function(){
            const country = t.id;
            // console.log(country)
            const value = sessionStorage.setItem("country", `${country}`);
            location.replace("more.html");
            
        })
    })

    
}



// api calls Start

fetch ('https://restcountries.com/v3.1/all').then((data)=>{
    return data.json();
}).then((completeData) =>{
    // console.log(completeData);
    let data1 ="";
    
    completeData.map((values) =>{
        //  const anchorElement = document.createElement('a');
        //  anchorElement.setAttribute('class', '')
        

        data1 += `  <div class='col-lg-3 here' id="${values.name.common}" onclick='myfunc()'>
                        <div class=" p-0 d-flex justify-content-around text-decoration-none ">
                            <div class="card  mb-4 darkTwo w-100 shadow-sm white card-width getitem" style="width: 18rem;" >
                                <img src=${values.flags.png} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-md" style="margin-bottom: 15px;">${ values.name.common}</h5>
                                    <p class="m-0">Population: ${values.population}</p>
                                    <p class="m-0">Region: ${values.region}</p>
                                    <p class="m-0">Capital: ${values.capital}</p>
                                </div>
                        </div>
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
                data1 = `  <div class='col-lg-3 here' id="${values.name}" onclick='myfunc()'>
                <div class=" p-0 d-flex justify-content-around text-decoration-none ">
                    <div class="card  mb-4 darkTwo w-100 shadow-sm white card-width getitem" style="width: 18rem;" >
                        <img src=${values.flags.png} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-md" style="margin-bottom: 15px;">${ values.name}</h5>
                            <p class="m-0">Population: ${values.population}</p>
                            <p class="m-0">Region: ${values.region}</p>
                            <p class="m-0">Capital: ${values.capital}</p>
                        </div>
                </div>
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
                data1 += `  <div class='col-lg-3 here' id="${values.name.common}" onclick='myfunc()'>
                <div class=" p-0 d-flex justify-content-around text-decoration-none ">
                    <div class="card  mb-4 darkTwo w-100 shadow-sm white card-width getitem" style="width: 18rem;" >
                        <img src=${values.flags.png} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-md" style="margin-bottom: 15px;">${ values.name.common}</h5>
                            <p class="m-0">Population: ${values.population}</p>
                            <p class="m-0">Region: ${values.region}</p>
                            <p class="m-0">Capital: ${values.capital}</p>
                        </div>
                </div>
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
                data1 += ` <div class='col-lg-3 here' id="${values.name.common}" onclick='myfunc()'>
                <div class=" p-0 d-flex justify-content-around text-decoration-none ">
                    <div class="card  mb-4 darkTwo w-100 shadow-sm white card-width getitem" style="width: 18rem;" >
                        <img src=${values.flags.png} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-md" style="margin-bottom: 15px;">${ values.name.common}</h5>
                            <p class="m-0">Population: ${values.population}</p>
                            <p class="m-0">Region: ${values.region}</p>
                            <p class="m-0">Capital: ${values.capital}</p>
                        </div>
                </div>
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
                data1 +=` <div class='col-lg-3 here' id="${values.name.common}" onclick='myfunc()'>
                <div class=" p-0 d-flex justify-content-around text-decoration-none ">
                    <div class="card  mb-4 darkTwo w-100 shadow-sm white card-width getitem" style="width: 18rem;" >
                        <img src=${values.flags.png} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-md" style="margin-bottom: 15px;">${ values.name.common}</h5>
                            <p class="m-0">Population: ${values.population}</p>
                            <p class="m-0">Region: ${values.region}</p>
                            <p class="m-0">Capital: ${values.capital}</p>
                        </div>
                </div>
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
                data1 += `  <div class='col-lg-3 here' id="${values.name.common}" onclick='myfunc()'>
                <div class=" p-0 d-flex justify-content-around text-decoration-none ">
                    <div class="card  mb-4 darkTwo w-100 shadow-sm white card-width getitem" style="width: 18rem;" >
                        <img src=${values.flags.png} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-md" style="margin-bottom: 15px;">${ values.name.common}</h5>
                            <p class="m-0">Population: ${values.population}</p>
                            <p class="m-0">Region: ${values.region}</p>
                            <p class="m-0">Capital: ${values.capital}</p>
                        </div>
                </div>
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
                data1 +=`  <div class='col-lg-3 here' id="${values.name.common}" onclick='myfunc()'>
                <div class=" p-0 d-flex justify-content-around text-decoration-none ">
                    <div class="card  mb-4 darkTwo w-100 shadow-sm white card-width getitem" style="width: 18rem;" >
                        <img src=${values.flags.png} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-md" style="margin-bottom: 15px;">${ values.name.common}</h5>
                            <p class="m-0">Population: ${values.population}</p>
                            <p class="m-0">Region: ${values.region}</p>
                            <p class="m-0">Capital: ${values.capital}</p>
                        </div>
                </div>
                </div>
            </div>`
            })

            document.getElementById('root').innerHTML = data1

        }).catch((err) => {
            console.log(err);
        })

    })    

// api calls ends here

//click activities
window.addEventListener('onload', function(){
    const getitem = document.querySelectorAll('.getitem');

    getitem.forEach(function(t){
        t.addEventListener('click', function(){
            console.log('yea')
        })
    })
})