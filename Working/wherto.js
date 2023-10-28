document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    const today = new Date();
    
    // Format it as YYYY-MM-DD for the date input
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    // Set the default value for the date input
    document.getElementById('date').value = formattedDate;
  });

const fromStation = document.getElementById('fromstation');
const toStation = document.getElementById('tostation');
const date = document.getElementById('date');
const searchButton = document.getElementById('find-train');
const result = document.getElementById('where-to-go-result');


searchButton.addEventListener('click',async(e)=>{
    if(fromStation.value == "" || toStation.value == "" || date.value == ""){
        alert("Sir/Mam, Please give me all details!");
    }
    else{
        const response = await fetch(`http://localhost:5000/wheretogo?from=${fromStation.value}&to=${toStation.value}&date=${date.value}`); // Use /proxy path
        const data = await response.json();
        result.innerHTML = "";
        if(data.data =="No direct trains found"){
            alert("No direct trains found");
        }
        else{
            result.innerHTML = "";
            for(let tra of data.data){
                let tr = document.createElement('div');
                tr.classList.add('timeline-box')
                let name = document.createElement('h3');
                name.innerText = tra.train_base.train_no+" "+tra.train_base.train_name;
                name.classList.add('trainname');

                let rou = document.createElement('h5');
                rou.classList.add('trainname')
                rou.innerText = "Runs from "+tra.train_base.source_stn_name+" "+ " to "+tra.train_base.dstn_stn_name;

                let rout2 = document.createElement('div');
                rout2.classList.add('rou');
                let from2 = document.createElement('div');
                from2.innerText = tra.train_base.from_stn_name + " "+ tra.train_base.from_stn_code;
                let to2 = document.createElement('div');
                to2.innerText = tra.train_base.to_stn_name + " "+ tra.train_base.to_stn_code;
                let divder2 = document.createElement('div');
                divder2.innerText = tra.train_base.travel_time+"Hr";
                divder2.classList.add('divder-h');

                let rout3 = document.createElement('div');
                rout3.classList.add('rou');
                let from3 = document.createElement('div');
                from3.innerText = tra.train_base.from_time;
                let to3 = document.createElement('div');
                to3.innerText = tra.train_base.to_time;

                rout2.appendChild(from2);
                rout2.appendChild(divder2);
                rout2.appendChild(to2);
                rout3.appendChild(from3);
                rout3.appendChild(to3);
                tr.appendChild(name);
                tr.appendChild(rou);
                tr.appendChild(rout2);
                tr.appendChild(rout3);result.appendChild(tr);

            }
        }
        
    }
});