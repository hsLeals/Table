var a = 0;
var t;
number()



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
        $("tbody").append(`<tr>
            <td></td>
            <td><input type="checkbox" class="ch"> </input>${$(".ad").val()}</td>
            <td>${$(".soyad").val()}</td>
            <td>${$(".ish").val()}</td>
            <td>${$(".olke").val()}</td>
            <td>${$(".maash").val()}$</td>
            <td><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
            </tr>`)

        $(".log input").val("")
        $(".add").css("display", "none")
        $(".log").css("display", "none")
        $(".blur").css("filter", "none")
    }
    number()
});

//search...................................................


$(".sch").keyup(function () {
    $("tbody tr").each(function () {

        if ($(this).text().toLocaleUpperCase().includes($(".sch").val().toLocaleUpperCase()) || $(".sch").val() == "") {
            $(this).css("display", "");
        }
        else {
            $(this).css("display", "none")
        }
    })
})


//remove.....................................................................................................

$("tbody").on("click", ".fa-trash", function () {
    t = $(this).parent().parent();
    $(".add").css("display", "block")
    $(".remove").css("display", "block")
})
$(".remove button").eq(1).click(function () {
    t.remove();
    number()

    // if (Number(a.eq(0).html())%2==0) {
    //     $("tr td").css("background-color", "#eee")
    // }else{
    //     $("tr td").css("background-color", "white")
    // }

    $(".add").css("display", "none")
    $(".remove").css("display", "none")
})
$(".remove button").eq(0).click(function () {
    $(".add").css("display", "none")
    $(".remove").css("display", "none")
})










//edit................................................................................................

$("tbody").on("click", ".fa-pen-to-square", function(){
    $(".edit").css("display", "block")
    t = $(this).parent().parent();
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
        if ($("#list").val()=="all") {
            
        }
    })
});

//checkbox.............................................................................................

$(".del").click(function () {
    $(".ch").each(function () {
        if ($(".ch").is(':checked')) {
            $(this).parent().parent().remove();
            number()
        }
    })
});