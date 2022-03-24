const value = sessionStorage.getItem("country");

console.log(value);


fetch(`https://restcountries.com/v2/name/${value}`).then((data) =>{
    return data.json()
}).then((completeData) => {
    // console.log(completeData)
    let data1 ="";
    completeData.map((values) =>{
        console.log(values)

        const valLang = values.languages
        let lange = []
        let myVar2 = '';
        valLang.forEach(t=>{
            lange.push(t.name);
            myVar2 = lange.join(', ');
        })
        
        const countrybr = values.borders;
        let br =''
        countrybr.forEach(t=>{
            br += `<div class="col-lg-4 col-md-6 w-25 px-0 card darkTwo shadow-sm d-flex justify-content-center align-items-center">${t}</div>`
            console.log(t)
        })
        

        // console.log(lange)
        // const lang =values.languages
        data1 = ` <div class="col-lg-6">
                        <div class=" mt-5">
                            <img src=${values.flag} class="heroImg" alt="...">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="w-100 h-100 text-white d-flex flex-column justify-content-evenly">
                            <div class="pt-5">
                                <p class="fw-bold fs-2 white">${values.name}</p>
                                <div class="row">
                                    <div class="col-lg-6 white">
                                        <p><span class="fw-bold me-3">Native name:</span>${values.nativeName}</p>
                                        <p><span class="fw-bold me-3">Population:</span>${values.population}</p>
                                        <p><span class="fw-bold me-3">Region:</span>${values.region}</p>
                                        <p><span class="fw-bold me-3">Sub Region:</span>${values.subregion}</p>
                                        <p><span class="fw-bold me-3">Capital:</span>${values.capital}</p>
                                    </div>
                                    <div class="col-lg-6 white">
                                        <p><span class="fw-bold me-3">Top level domain:</span>${values.topLevelDomain}</p>
                                        <p><span class="fw-bold me-3">Currencies:</span>${values.currencies[0].name}</p>
                                        <p><span class="fw-bold me-3">Languages:</span>${myVar2}</p>
                                        
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div class="row white">
                                    <div class="col-lg-4 fw-bold ">Border Countries:</div>
                                    <div class="col-lg-8">
                                        <div class="row justify-content-evenly container">                                            
                                            ${br}
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    })

    document.getElementById('root').innerHTML = data1

}).catch((err) => {
    console.log(err);
})
