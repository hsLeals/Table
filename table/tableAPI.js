
//API



var a = 0;
var t, tid, v;
number()


$.get("https://localhost:44305/api/Home", (res) => {
    $(res).each(function () {
        console.log(res);
        $("tbody").append(`<tr t="${this.userId}">
        <td>1</td>
        <td><input type="checkbox" class="ch"> </input>${this.userName}</td>
        <td>${this.userSurname}</td>
        <td>${this.userJob}</td>
        <td>${this.userCountry}</td>
        <td>${this.userSalary}$</td>
        <td><i class="fa-solid fa-pen-to-square" t="${this.userId}"></i><i class="fa-solid fa-trash"></i></td>
    </tr>`)
        number();
    })
})

//add................................................................................................
$(".bt").click(function () {
    $(".add").css("display", "block");
    $(".log").css("display", "block");
    $(".blur").css("filter", "blur(5px)");
});

$(".log i").click(function () {
    $(".add").css("display", "none");
    $(".log").css("display", "none");
    $("input").val("");
    $(".blur").css("filter", "none");
});

$(".log button").click(function () {
    if ($(".ad").val() == "" || $(".soyad").val() == "" || $(".ish").val() == "" || $(".olke").val() == "" || $(".maash").val() == "") {
        alert("Tam doldur!!!")
    }
    else {
        let data = {
            "UserName": $(".ad").val(),
            "UserSurname": $(".soyad").val(),
            "UserJob": $(".ish").val(),
            "UserCountry": $(".olke").val(),
            "UserSalary": $(".maash").val()
        };
        $.ajax({
            url: "https://localhost:44305/api/Home",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (x) {
                $("tbody").append(`<tr t="${x.userId}">
            <td></td>
            <td><input type="checkbox" class="ch"> </input>${$(".ad").val()}</td>
            <td>${$(".soyad").val()}</td>
            <td>${$(".ish").val()}</td>
            <td>${$(".olke").val()}</td>
            <td>${$(".maash").val()}$</td>
            <td><i class="fa-solid fa-pen-to-square" t="${x.userId}"></i><i class="fa-solid fa-trash"></i></td>
            </tr>`)
                $(".log input").val("")
                $(".add").css("display", "none")
                $(".log").css("display", "none")
                $(".blur").css("filter", "none")
                number()

            },
            error: function (x) {
                console.log(x);
            }

        })
    }
});

//search...................................................


$(".sch").keyup(function () {
    if ($(".sch").val()=="") {
        $("tbody").html("");
        $.get("https://localhost:44305/api/Home", (res) => {
    $(res).each(function () {
        $("tbody").append(`<tr t="${this.userId}">
        <td>1</td>
        <td><input type="checkbox" class="ch"> </input>${this.userName}</td>
        <td>${this.userSurname}</td>
        <td>${this.userJob}</td>
        <td>${this.userCountry}</td>
        <td>${this.userSalary}$</td>
        <td><i class="fa-solid fa-pen-to-square" t="${this.userId}"></i><i class="fa-solid fa-trash"></i></td>
    </tr>`)
        number();
    })
})
    }else{

        v = $(".sch").val();
        $("tbody").html("");
        $.get("https://localhost:44305/api/Home/search/" + v, (res) => {
            console.log(res);
            $(res).each(function () {
                $("tbody").append(`<tr t="${this.userId}">
                <td>1</td>
                <td><input type="checkbox" class="ch"> </input>${this.userName}</td>
                <td>${this.userSurname}</td>
                <td>${this.userJob}</td>
                <td>${this.userCountry}</td>
                <td>${this.userSalary}$</td>
                <td><i class="fa-solid fa-pen-to-square" t="${this.userId}"></i><i class="fa-solid fa-trash"></i></td>
            </tr>`)
                number();
            })
        })
    }
})


//remove.....................................................................................................

$("tbody").on("click", ".fa-trash", function () {
    t = $(this).parent().parent();
    tid = t.attr("t")
    $(".add").css("display", "block")
    $(".remove").css("display", "block")
})
$(".remove button").eq(1).click(function () {

    $.ajax({
        url: "https://localhost:44305/api/Home/" + tid,
        type: "delete",
        success: function (x) {
            console.log(x);
            number()
        },
        error: function (x) {
            console.log(x);
        }

    })
    t.remove();

    $(".add").css("display", "none")
    $(".remove").css("display", "none")
})
$(".remove button").eq(0).click(function () {
    $(".add").css("display", "none")
    $(".remove").css("display", "none")
})


//edit................................................................................................

$("tbody").on("click", ".fa-pen-to-square", function () {
    $(".edit").css("display", "block")
    t = $(this).parent().parent();
    tid = $(this).attr("t");
    $(".add").css("display", "block")
    $(".edit").css("display", "block")
    $(".edit .ad").val(`${t.children().eq(1).text()}`)
    $(".edit .soyad").val(`${t.children().eq(2).text()}`)
    $(".edit .ish").val(`${t.children().eq(3).text()}`)
    $(".edit .olke").val(`${t.children().eq(4).text()}`)
    $(".edit .maash").val(`${t.children().eq(5).text().slice(0, -1)}`)
    $(".edit .ad").val(`${t.children().eq(1).text()}`)
})

$(".edit i").click(function () {
    $(".add").css("display", "none")
    $(".edit").css("display", "none")
})

$(".edit button").click(function () {
    t.children().eq(1).html('<input type="checkbox">' + " " + $(".edit .ad").val())
    t.children().eq(2).text($(".edit .soyad").val())
    t.children().eq(3).text($(".edit .ish").val())
    t.children().eq(4).text($(".edit .olke").val())
    t.children().eq(5).html($(".edit .maash").val() + "$")
    let data = {
        "UserName": $(".edit .ad").val(),
        "UserSurname": $(".edit .soyad").val(),
        "UserJob": $(".edit .ish").val(),
        "UserCountry": $(".edit .olke").val(),
        "UserSalary": $(".edit .maash").val()
    };
    $.ajax({
        url: "https://localhost:44305/api/Home/" + tid,
        type: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (x) {
            console.log(x);
        },
        error: function (x) {
            console.log(x);
        }
    })
    $(".add").css("display", "none")
    $(".edit").css("display", "none")
});




function number() {
    a = 0;
    $("tbody tr").each(function () {
        a++;
        $(this).children().eq(0).text(a)
    })


    $("tbody tr").each(function () {
        if ($(this).children().eq(0).text() % 2 == 0) {
            $(this).css("background-color", "#eee")
        }
        else {
            $(this).css("background-color", "white")

        }
    })

}




//select list.......................................................................................

$("#list").change(function () {
    console.log($("#list").val());
    $("tbody tr").hide()
    $("tbody tr").each(function () {
        if ($(this).children().eq(0).text() > $("#list").val()) {
            $(this).hide()
        }
        else {
            $(this).show()
        }
        if ($("#list").val() == "all") {

        }
    })
});

//checkbox.............................................................................................

$(".del").click(function () {
    $(".ch").each(function () {
        if ($(this).is(':checked')) {
            t = $(this).parent().parent();
            tid = t.attr("t");
            $.ajax({
                url: "https://localhost:44305/api/Home/" + tid,
                type: "delete",
                success: function (x) {
                    console.log(x);
                    number()
                },
                error: function (x) {
                    console.log(x);
                }
            })
            t.remove();
        }
    })
});