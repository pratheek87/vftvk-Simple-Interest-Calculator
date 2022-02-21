var slider = document.getElementById("rate");
var op = document.getElementById("op");
op.innerHTML = slider.value;

slider.oninput = function () {
    op.innerHTML = this.value;
}

function compute()
{
    p = document.getElementById("principal").value;
    
}
        