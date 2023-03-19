
let choosenColor
let choosenScheme
let colors = [];


document.getElementById("btn").addEventListener("click", (e) =>{
    e.preventDefault()
    choosenColor = document.getElementById("choosen-color").value
    choosenScheme = document.getElementById("scheme-selection").value
    getColors();
    setTimeout(renderHtml,1000)

    
})

const getColors = () => {
fetch(`https://www.thecolorapi.com/scheme?hex=${choosenColor.substring(1)}&mode=${choosenScheme}&count=5`)
    .then((response) => response.json())
    .then((data) => {
        colors = data.colors
        console.log(colors)
        console.log(colors[0].hex.value)
    });
}


const renderHtml =  () =>{
    document.getElementById("colors-displayed").innerHTML = 
        `<div class="bg-[${colors[0].hex.value}] w-[110px] h-[414px]"></div>
        <div class="bg-[${colors[1].hex.value}] w-[110px] h-[414px]"></div>
        <div class="bg-[${colors[2].hex.value}] w-[110px] h-[414px]"></div>
        <div class="bg-[${colors[3].hex.value}] w-[110px] h-[414px"></div>
        <div class="bg-[${colors[4].hex.value}] w-[110px] h-[414px]"></div>
        <div
          class="bg-slate-100 w-[110px] h-[43px] flex items-center justify-center"
        >asdasd
      </div>
        <div
          class="bg-slate-100 w-[110px] h-[43px] flex items-center justify-center"
        >asdasd
      </div>
        <div
          class="bg-slate-100 w-[110px] h-[43px] flex items-center justify-center"
        >asdasd
      </div>
        <div
          class="bg-slate-100 w-[110px] h-[43px] flex items-center justify-center"
        >asdasd
      </div>
        <div
          class="bg-slate-100 w-[110px] h-[43px] flex items-center justify-center"
        >asdasd
      </div>
        `
}
