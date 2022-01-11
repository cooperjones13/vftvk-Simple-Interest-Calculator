function compute()
{
    principle = document.getElementById("amount").value;
    interest = document.getElementById("interest").value;
    years = document.getElementById("years").value;


    total = Math.round(principle*(Math.pow(1+(interest/1000), years))*100)/100
    console.log("principle: $" + principle + " invested at a rate of: " + (interest/10) + "% for " + years + " years. Return: " + total)

    output(principle, interest, years, total)
    
}
        

function sliderChange(value)
{
    document.getElementById('sliderVal').innerHTML = value/10 + "%";
}

document.getElementById("interest").oninput = function() {
    sliderChange(document.getElementById("interest").value);
    // console.log(document.getElementById("interest").value);
};

document.getElementById("compute").onclick = compute;

function output(p, i, y, t){
    year = Number(new Date().getFullYear()) + Number(y);
    document.getElementById("output").innerHTML=`If you deposit <span class="highlighted">$${p}</span>, <br/> at a rate of <span class="highlighted">${i/10}%</span>. <br/> You will receive an amount of <span class="highlighted">$${t}</span>,<br/> in the year <span class="highlighted">${(year)}</span>`

}

