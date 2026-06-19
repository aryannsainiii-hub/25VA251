function calculateResult(){

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);

    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = total / 5;

    let result;

    if(
        m1 < 35 || m2 < 35 || m3 < 35 ||
        m4 < 35 || m5 < 35
    ){
        result = "❌ Fail";
    }
    else if(percentage >= 75){
        result = "🏆 Distinction";
    }
    else if(percentage >= 60){
        result = "🥇 First Class";
    }
    else if(percentage >= 50){
        result = "🥈 Second Class";
    }
    else{
        result = "Pass";
    }

    document.getElementById("total").innerHTML =
        "Total Marks : " + total + " / 500";

    document.getElementById("percentage").innerHTML =
        "Percentage : " + percentage.toFixed(2) + "%";

    document.getElementById("grade").innerHTML =
        "Result : " + result;

    let bar = document.getElementById("bar");
    bar.style.width = percentage + "%";

    if(percentage >= 75){
        bar.style.background = "green";
    }
    else if(percentage >= 50){
        bar.style.background = "orange";
    }
    else{
        bar.style.background = "red";
    }
}

function resetForm(){

    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
    document.getElementById("m4").value = "";
    document.getElementById("m5").value = "";

    document.getElementById("total").innerHTML = "";
    document.getElementById("percentage").innerHTML = "";
    document.getElementById("grade").innerHTML = "";

    document.getElementById("bar").style.width = "0%";
}