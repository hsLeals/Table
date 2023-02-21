let s=0;
document.querySelector(".bt").addEventListener("click",function () {
    document.querySelector(".add").style.display="block";
    document.querySelector(".blur").style.filter="blur(5px)"
})
document.querySelector(".log i").addEventListener("click",function () {
    document.querySelector(".add").style.display="none";
    document.querySelectorAll("input").forEach(x => {
        x.value=""
    });
    document.querySelector(".blur").style.filter="none"
})
document.querySelector(".log button").addEventListener("click",function () {
    if (document.querySelector(".ad").value=="" || document.querySelector(".soyad").value=="" || document.querySelector(".ish").value=="" || document.querySelector(".olke").value=="" || document.querySelector(".maash").value=="") {
        alert("Tam doldur!!!")
    }
    else{
        s++
        if (s%2!=0) {
            document.querySelector("tbody").innerHTML+=
            `<tr>
            <td>${s}</td>
            <td><input type="checkbox"> </input>${document.querySelector(".ad").value}</td>
            <td>${document.querySelector(".soyad").value}</td>
            <td>${document.querySelector(".ish").value}</td>
            <td>${document.querySelector(".olke").value}</td>
            <td>${document.querySelector(".maash").value}$</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            </tr>`
        } else {
            document.querySelector("tbody").innerHTML+=
            `<tr>
            <td style="background-color: #eee;">${s}</td>
            <td style="background-color: #eee;"> <input type="checkbox"> </input>${document.querySelector(".ad").value}</td>
            <td style="background-color: #eee;">${document.querySelector(".soyad").value}</td>
            <td style="background-color: #eee;">${document.querySelector(".ish").value}</td>
            <td style="background-color: #eee;">${document.querySelector(".olke").value}</td>
            <td style="background-color: #eee;">${document.querySelector(".maash").value}$</td>
            <td style="background-color: #eee;"><i class="fa-solid fa-pen-to-square"></i></td>
            </tr>`
        }
        document.querySelectorAll("input").forEach(x => {
            x.value=""
        document.querySelector(".add").style.display="none";
        });
    document.querySelector(".blur").style.filter="none"
    }
})



document.querySelector(".sch").addEventListener("keyup", function () {
    document.querySelectorAll("tbody tr").forEach(tr => {
        if (tr.innerText.toLocaleUpperCase().includes(document.querySelector(".sch").value.toLocaleUpperCase())||document.querySelector(".sch").value=="") {
            tr.style.display=""
        }
        else{
            tr.style.display="none"
        }
    });
})