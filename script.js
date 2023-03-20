document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()
    getColors();
})





const getColors = () => {

   let choosenColor = document.getElementById("choosen-color").value
   let choosenScheme = document.getElementById("scheme-selection").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${choosenColor.substring(1)}&mode=${choosenScheme}&count=5`)
         .then((response) => response.json())
         .then((data) => {
            let schemeColorsArr = []
            for (let i = 0 ; i < data.colors.length ; i++){
                schemeColorsArr.push(data.colors[i].hex.value)
            }
            

            let html = ''
             for (let color of schemeColorsArr){
              html += `<div class="w-[110px] h-[414px]" style="background-color: ${color}"></div>`
             }
             for (let color of schemeColorsArr){
                html+= `<div class="bg-slate-100 w-[110px] h-[43px] flex items-center justify-center">${color}</div>`
             }


             document.getElementById("colors-displayed").innerHTML = html
       
    });

}

