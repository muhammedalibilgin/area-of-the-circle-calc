const radius=process.argv.slice(2)[0]

function areaCircle(r){
   const area=Math.PI* Math.pow(r,2)
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}.`)
}

areaCircle(radius)
