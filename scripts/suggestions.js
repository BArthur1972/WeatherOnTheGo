fetch("https://raw.githubusercontent.com/Emmanuelikeh/jsonfront_end/main/activities.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data.snowy[0].clothes);
        console.log(data.rainy[3].clothes);
        snowpopulate(data.snowy);
        rainpopulate(data.rainy);

        // snowpopulate(data.snowy);


        sunpopulate(data.sunny);
        chillpopulate(data.chilly);

    });



function rainpopulate(value){
    let new_array = [];
    let variable;
   while(new_array.length <  3){
    variable = Math.floor(Math.random() * (5-1) + 1);
    if (new_array.includes(variable)){}
    else{
        new_array.push(variable);
        }
    }

for( let i = 0; i < 3; i++){

document.querySelector(".rclothes0" + i).innerText = value[new_array[i]].clothes;
document.querySelector(".rainy0" + i).src = value[new_array[i]].clothes_emoji;
document.querySelector(".rimg0" + i).src = value[new_array[i]].emoji;
document.querySelector(".ractivity0" + i).innerText = value[new_array[i]].activity;

}



}



function snowpopulate(value){
    let new_array = [];
    let variable;
   while(new_array.length <  3){
    variable = Math.floor(Math.random() * (5-1) + 1);
    if (new_array.includes(variable)){}
    else{
        new_array.push(variable);
        }
    }

for( let i = 0; i < 3; i++){

document.querySelector(".snclothes0" + i).innerText = value[new_array[i]].clothes;
document.querySelector(".snowy0" + i).src = value[new_array[i]].clothes_emoji;
document.querySelector(".snimg0" + i).src = value[new_array[i]].emoji;
document.querySelector(".snactivity0" + i).innerText = value[new_array[i]].activity;

}



}


function sunpopulate(value){
    let array = [];
    let num;
   while(array.length <  3){
    num = Math.floor(Math.random() * (5-1) + 1);
    if (array.includes(num)){}
    else{
        array.push(num);
        }
    }

for( let i = 0; i < 3; i++){

document.querySelector(".suclothes0" + i).innerText = value[array[i]].clothes;
document.querySelector(".sunny0" + i).src = value[array[i]].clothes_emoji;
document.querySelector(".suimg0" + i).src = value[array[i]].emoji;
document.querySelector(".suactivity0" + i).innerText = value[array[i]].activity;

}


}


function chillpopulate(value){
    let new_array = [];
    let variable;
   while(new_array.length <  3){
    variable = Math.floor(Math.random() * (5-1) + 1);
    if (new_array.includes(variable)){}
    else{
        new_array.push(variable);
        }
    }

for( let i = 0; i < 3; i++){

document.querySelector(".cclothes0" + i).innerText = value[new_array[i]].clothes;
document.querySelector(".chilly0" + i).src = value[new_array[i]].clothes_emoji;
document.querySelector(".cimg0" + i).src = value[new_array[i]].emoji;
document.querySelector(".cactivity0" + i).innerText = value[new_array[i]].activity;

}



}

 

