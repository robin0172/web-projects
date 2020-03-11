
/*11*/ window.addEventListener('load', () => {
    /*11.2*/ let long;
   /*11.3*/  let lat;
     /*11.4.5.3*/let temperetureDescription = document.querySelector('.temperature-description');
     /*11.4.5.4*/let tempereturedgree = document.querySelector('.tempereature-dgree');
     /*11.4.5.5*/let locationtimezone = document.querySelector('.location-timeZone');
    let temperaturesection=document.querySelector('.dgree-section')
    const temperaturespan=document.querySelector('.dgree-section span')





    /*11.4*/ if (navigator.geolocation) {
       /*11.4.2*/ navigator.geolocation.getCurrentPosition(position => {
            // console.log(position)
           /*11.4.3*/ long = position.coords.longitude
            /*11.4.4*/lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"//get from (https://cors-anywhere.herokuapp.com/)
            /*11.4.5*/const api = `${proxy}https://api.darksky.net/forecast/20104ec6c2ed359b94e809a437255ad5/${lat},${long}`

            /*11.4.6*/ fetch(api).then(Response => {
                return Response.json();
            }).then(data => {
                console.log(data)
                 /*11.4.5.2*/const { temperature, summary,icon } = data.currently;
                // set dom elements drom api
                /*11.4.5.6*/ tempereturedgree.textContent = temperature
                 /*11.4.5.7*/temperetureDescription.textContent=summary
                 /*11.4.5.8*/locationtimezone.textContent=data.timezone
                // formula for cuilcius
                /*11.4.5.9*/let celcsius=(temperature-32)*(5/9)
                // set icon
                seticons(icon,document.querySelector('.icon'))

                // chang temperature in cilcus
                /*11.4.5.10*/temperaturesection.addEventListener('click',()=>{
                    /*11.4.5.11*/if(temperaturespan.textContent==="F"){
                        temperaturespan.textContent="C";
                        tempereturedgree.textContent = Math.floor(celcsius) 

                    }else{
                        temperaturespan.textContent="F"
                        tempereturedgree.textContent = temperature


                    }
                })
            })
        });

    }
    function seticons(icon,iconid){
        const skycons=new  Skycons({color:"white"})
        const currentIcons=icon.replace(/-/g,"_").toUpperCase();
         skycons.play();
         return skycons.set(iconid,skycons[currentIcons])
    }
})