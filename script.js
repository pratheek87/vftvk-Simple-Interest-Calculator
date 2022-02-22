(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        var slider = document.getElementById("rate");
        var years = document.getElementById("years");
        var op = document.getElementById("op");
        op.value = slider.value;

        slider.oninput = function () {
            op.value = this.value;
        }

        op.oninput = function () {
            if (this.value <= 20 && this.value > 0)
                slider.value = this.value;
            else
                this.value = slider.value;
        }
        
        var contents;

        for (let i = 0; i < 20; i++) {
            contents += "<option>" + i + "</option>";
        }

        years.innerHTML = contents;
    }

})(window, document, undefined);



function compute()
{
    principal = Number(document.getElementById("principal").value);
    roi = document.getElementById("rate").value;
    years_to_calc = document.getElementById("years").value;
    console.log(principal);
    console.log(roi);
    console.log(years_to_calc);

    text_op = document.getElementById("text_op");

    if (principal > 0 && roi && years_to_calc != 0) {
        console.log(Number(roi) * Number(years_to_calc));
        total = Number(principal) * (1 + ((Number(roi) / 100) * Number(years_to_calc)));
        year_to_display = new Date().getFullYear() + Number(years_to_calc);
        text_op.innerHTML = "If you deposit  <mark class = 'yellow'>" + principal + "</mark></br> at an interest rate of <mark class = 'yellow'> " + roi +
            "</mark></br> You will receive an amount of <mark class = 'yellow'>" + parseInt(total) + "</mark> </br> in the year <mark class = 'yellow'>" +
            year_to_display + "</mark>";
    }
    else if (!principal || principal < 0) {
        window.alert("please enter principal value greater than 0");
        document.getElementById("principal").value = 0;
        document.getElementById("principal").focus();
    }
    else if (!roi)
        window.alert("please enter Rate of Interest");
    else if (0 == years_to_calc)
        window.alert("please enter number of years");

    
}
        