var total=0;
count=0;

function cart(x){
    total+=x;
    alert(total);
    count=count+1;
    document.getElementById("print1").innerHTML = count;
    document.getElementById("total").innerHTML = total ;
    var d=10;
    document.getElementById("discountcent").innerHTML = d+"%" ;
    var discamount=Math.floor(total/d);
    document.getElementById("discount").innerHTML = discamount ;
    var g=18;
    document.getElementById("gstcent").innerHTML = g+"%" ;
    var gst=Math.floor(total/g);
    document.getElementById("gst").innerHTML = gst ;
    var final=total+gst-discamount;
    document.getElementById("final").innerHTML = final ;
}

var t=count;
function quantity(){
    document.getElementById("print1").innerHTML = count;
   
}
//SANJAY K 20BCE0020