const nevadat=[]
const nevemail=[]
const nevtel=[]
const nevlakcim=[]
const nevtaj=[]
const nevkoll=[]
var i=-1

function adatbe(){
    
    const nev=document.getElementById("nev").value
    const email=document.getElementById("email").value
    const tel=document.getElementById("telefonszám").value
    const lakcim=document.getElementById("lakcim").value
    const taj=document.getElementById("taj").value

   const kolle=document.querySelector('input[name="kollegium"]:checked').value;


    const emailPattern = 
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const isValid = emailPattern.test(email);

     const phonePattern=/^\(?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
     const isValidPhone=phonePattern.test(tel);


    if (nev=="" || email=="" || tel=="" || lakcim=="" || taj=="" || kolle==""){
        alert("HIÁNYZÓ ADAT!")
    }
    else if(!isValid) {

        alert("rossz az e-mail cím!")

    }

    else if (!isValidPhone)
    {
        alert("rossz a telefonszám")
    }
    else{
        i++
        nevadat[i]=nev
        nevemail[i]=email
        nevtel[i]=tel
        nevlakcim[i]=lakcim
        nevtaj[i]=taj
        nevkoll[i]=kolle


       

    }
}

function listazas() {
    
    const tablazat=document.getElementById("adattabla")

    for (j=0;j<nevadat.length;j++) {

        const sor=document.createElement("tr")

        const nevoszlop=document.createElement("td")
        nevoszlop.textContent=nevadat[j]
        sor.appendChild(nevoszlop)

        const emailoszlop=document.createElement("td")
        emailoszlop.textContent=nevemail[j]
        sor.appendChild(emailoszlop)

        const teloszlop=document.createElement("td")
        teloszlop.textContent=nevtel[j]
        sor.appendChild(teloszlop)

        const lakoszlop=document.createElement("td")
        lakoszlop.textContent=nevlakcim[j]
        sor.appendChild(lakoszlop)

        const tajoszlop=document.createElement("td")
        tajoszlop.textContent=nevtaj[j]
        sor.appendChild(tajoszlop)

        const koloszlop=document.createElement("td")
        koloszlop.textContent=nevkoll[j]
        sor.appendChild(koloszlop)


       tablazat.appendChild(sor)





    }
    
    
}