function loadData(data){

    if(data=='btn1'){
        document.getElementById('img1').src="./image/img1.webp";
        document.getElementById('para1').innerHTML="iphone xs";
    }
    else if(data=='btn2'){
        document.getElementById('img1').src="./image/img3.jfif";
    }
    else if(data=='btn3'){
        document.getElementById('img1').src="./image/img4.jfif";
    }
    else if(data=='btn4'){
        document.getElementById('img1').src="./image/img5.jfif";
    }
    
}

function priceForLoop(){
    var phones=["iphone XS-$1346","iphone xs1-$200","iphone xs3-$250"];

    for(i=0,len=phones.length,list="phone avg price <br>";i<len;i++)
    {
       list+=phones[i]+"<br>"
    }
    document.getElementById('para1')=list;
}