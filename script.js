let text_crt_acc = document.querySelector(".text_crt_acc")
let number_crt_acc = document.querySelector(".number_crt_acc")

let pin_inp = document.querySelector(".pin_inp")
let pin_inp_again = document.querySelector("#pin_inp2")

let cus_add_inp = document.querySelector(".cus_add_inp")
let cus_num_inp = document.querySelector(".cus_num_inp")
let loan_cus_inp = document.querySelector(".loan_cus_inp")

let sup_add_inp = document.querySelector(".sup_add_inp")
let sup_num_inp = document.querySelector(".sup_num_inp")
let loan_sup_inp = document.querySelector(".loan_sup_inp")

let crt_sub_btn = document.querySelector("#crt_sub_btn")
let pin_sub_btn = document.querySelector("#pin_sub_btn")
let cus_sub_btn = document.querySelector(".cus_sub_btn")
let sup_sub_btn = document.querySelector(".sup_sub_btn")

let pabo_tk = document.querySelector(".pabo_tk")
let dibo_tk = document.querySelector(".dibo_tk")

let button_wrapper1 = document.querySelector(".button_wrapper1")
let button_wrapper2 = document.querySelector(".button_wrapper2")

let inp_for_plc = document.querySelectorAll(".inp_for_plc")
let plc_for_inp = document.querySelectorAll(".plc_for_inp")


    for (let i = 0; i < inp_for_plc.length; i++) {
        let element = inp_for_plc[i];

        element.addEventListener("input",() =>{

            if (element.value !== null && element.value!=="") {
                plc_for_inp[i].setAttribute("style","transform: translateY(-23px);")
            } else {
                plc_for_inp[i].setAttribute("style","transform: translateY(0px);")
            }

            // crt_btn active
            if (text_crt_acc.value !== "" && number_crt_acc.value!== "") {
                crt_sub_btn.classList.add("btn_active")
            } else {
                crt_sub_btn.classList.remove("btn_active")
            }

            // For Active Button (pin)
            if (pin_inp.value == pin_inp_again.value && pin_inp.value !="" && pin_inp_again.value !="" ) {
                pin_sub_btn.classList.add("btn_active")
            } else {
                pin_sub_btn.classList.remove("btn_active")
            }

            // customer_btn active
            if (cus_add_inp.value !== "" && cus_num_inp.value!== "") {
                cus_sub_btn.classList.add("btn_active")
            } else {
                cus_sub_btn.classList.remove("btn_active")
            }

            // supplier_btn active
            if (sup_add_inp.value !== "" && sup_num_inp.value!== "") {
                sup_sub_btn.classList.add("btn_active")
            } else {
                sup_sub_btn.classList.remove("btn_active")
            }


        })

    }


let show_hide1 = document.querySelector(".show_hide1 i")
let show_hide2 = document.querySelector(".show_hide2 i")

function eye() {
   eyes = document.querySelectorAll(".eye")
   pin_inp1 = document.querySelector("#pin_inp1")
   pin_inp2 = document.querySelector("#pin_inp2")

    eyes.forEach(eyes => {
        if (eyes.classList.contains("fa-eye")) {
            pin_inp1.type = "password";
            pin_inp2.type = "password";

            eyes.classList.remove("fa-eye")
            eyes.classList.add("fa-eye-slash")
        } else {
            pin_inp1.type = "text";
            pin_inp2.type = "text";
            eyes.classList.remove("fa-eye-slash")
            eyes.classList.add("fa-eye")
        }
    });
}

show_hide1.addEventListener("click",()=>{
    eye()
})

show_hide2.addEventListener("click",()=>{
    eye()
})


let setpinSec = document.querySelector("section.set_pin")
let crtSec = document.querySelector("section.create_acc")
let homeSec = document.querySelector("section.home_sec")
let name_taker = document.querySelector("#data_name_taker")
let store_name = document.querySelector(".store_name")
let store_num = document.querySelector(".store_num")
let round_name = document.querySelector(".round_short_name")
let new_cus_sup_overly = document.querySelector(".new_cus_sup_overly")
let new_done_wrapper = document.querySelector(".new_done_wrapper")
let done_ok_btn = document.querySelector(".done_ok_btn")
let done_name_taker = document.querySelector(".done_name_taker")
let home_features = document.querySelector(".home_features")
let li_new_home_page = document.querySelector(".li_new_home_page")
let cus_sup_ul = document.querySelector("#cus_sup_ul")
let customer_amount = document.querySelector("#customer_amount")
let suplier_amount = document.querySelector("#suplier_amount")

crt_sub_btn.addEventListener("click",() =>{
    localStorage.setItem('acc_name', [text_crt_acc.value] )
    localStorage.setItem('acc_num', [number_crt_acc.value] )
    crtSec.setAttribute("style","display:none; padding: 0px;")
    setpinSec.setAttribute("style","right:0px")
    name_taker.innerHTML = localStorage.getItem("acc_name")
    store_name.innerHTML = localStorage.getItem("acc_name")
    store_num.innerHTML = `<span>+88</span> ${localStorage.getItem("acc_num")}`
    round_name.innerHTML = localStorage.getItem("acc_name").slice(0,1)
})


pin_sub_btn.addEventListener("click",()=>{
    localStorage.setItem('pin', pin_inp_again.value);
    setpinSec.setAttribute("style","transition: 0; display:none;")
    homeSec.setAttribute("style","right:0px;")
    add_customer.style.display = "inline-flex";
})


cus_sub_btn.addEventListener("click",()=>{

    if (localStorage.getItem('customer_info') === null) {
        localStorage.setItem('customer_info', '[]')
    }

    let old = JSON.parse(localStorage.getItem('customer_info'))

    
    cus_array = {
        cus_name: cus_add_inp.value,
        cus_number: cus_num_inp.value,
        cus_baki: loan_cus_inp.value
    }

    old.push(cus_array)

    localStorage.setItem('customer_info', JSON.stringify(old))

    new_cus_sup_overly.classList.remove("new_done_display")
    done_name_taker.innerHTML = `"${cus_add_inp.value}" - কে IKSR যোগ করা হয়েছে`;
    home_features.classList.add("new_done_display")
    li_new_home_page.classList.remove("new_done_display")


    let infos = JSON.parse(localStorage.getItem("customer_info"))
    let new_li

    for (let i = 0; i < infos.length; i++) {
        const element = infos[i]

        new_li  = `
    <li>
        <div class="left">
            <div class="short_name_wrapper_cus">${element.cus_name.slice(0,1)}</div>
            <h4>${element.cus_name}</h4>
        </div>

        <div class="right">
            <div class="each_money_hishab">${element.cus_baki}</div>
            <i class="fas fa-angle-right"></i>
        </div>
    </li>
    `
    }

    let data = parseFloat(loan_cus_inp.value)
    let store = JSON.parse(localStorage.getItem('Total_pabo'))
    localStorage.setItem('Total_pabo',data += store)
    pabo_tk.innerHTML = localStorage.getItem('Total_pabo')


    cus_sup_ul.innerHTML += new_li

    customer_amount.innerHTML = infos.length


})

sup_sub_btn.addEventListener("click",()=>{

    if (localStorage.getItem('suplier_info') === null) {
        localStorage.setItem('suplier_info', '[]')
    }

    let sup_data = JSON.parse(localStorage.getItem('suplier_info'))

    
    sup_array = {
        sup_name: sup_add_inp.value,
        sup_number: sup_num_inp.value,
        sup_baki: loan_sup_inp.value
    }

sup_data.push(sup_array)

    localStorage.setItem('suplier_info', JSON.stringify(sup_data))


    new_cus_sup_overly.classList.remove("new_done_display")
    done_name_taker.innerHTML = `"${sup_add_inp.value}" - কে IKSR যোগ করা হয়েছে`;
    home_features.classList.add("new_done_display")
    li_new_home_page.classList.remove("new_done_display")

    let infos = JSON.parse(localStorage.getItem("suplier_info"))
    let new_li

    for (let i = 0; i < infos.length; i++) {
        const element = infos[i]

        new_li  = `
    <li>
        <div class="left">
            <div class="short_name_wrapper_sup">${element.sup_name.slice(0,1)}</div>
            <h4>${element.sup_name}</h4>
        </div>

        <div class="right">
            <div class="each_money_hishab">${element.sup_baki}</div>
            <i class="fas fa-angle-right"></i>
        </div>
    </li>
    `
    }

    let data = parseFloat(loan_sup_inp.value)
    let store = JSON.parse(localStorage.getItem('Total_dibo'))
    localStorage.setItem('Total_dibo',data += store)
    dibo_tk.innerHTML = localStorage.getItem('Total_dibo')

    cus_sup_ul.innerHTML += new_li
    
    suplier_amount.innerHTML = infos.length
})



done_ok_btn.addEventListener("click",()=>{
    new_customer_section.classList.remove("top_back")
    new_cus_sup_overly.classList.add("new_done_display")
    button_wrapper1.classList.add("new_done_display")
    button_wrapper2.classList.add("new_done_display")
    cus_add_inp.value = ""
    cus_num_inp.value = ""
    sup_add_inp.value = ""
    sup_num_inp.value = ""
    loan_sup_inp.value = ""
    loan_cus_inp.value = ""


    for (let i = 0; i < inp_for_plc.length; i++) {
        let element = inp_for_plc[i];

            if (element.value !== null && element.value!=="") {
                plc_for_inp[i].setAttribute("style","transform: translateY(-23px);")
            } else {
                plc_for_inp[i].setAttribute("style","transform: translateY(0px);")
            }

            // crt_btn active
            if (text_crt_acc.value !== "" && number_crt_acc.value!== "") {
                crt_sub_btn.classList.add("btn_active")
            } else {
                crt_sub_btn.classList.remove("btn_active")
            }

            // For Active Button (pin)
            if (pin_inp.value == pin_inp_again.value && pin_inp.value !="" && pin_inp_again.value !="" ) {
                pin_sub_btn.classList.add("btn_active")
            } else {
                pin_sub_btn.classList.remove("btn_active")
            }

            // customer_btn active
            if (cus_add_inp.value !== "" && cus_num_inp.value!== "") {
                cus_sub_btn.classList.add("btn_active")
            } else {
                cus_sub_btn.classList.remove("btn_active")
            }

            // supplier_btn active
            if (sup_add_inp.value !== "" && sup_num_inp.value!== "") {
                sup_sub_btn.classList.add("btn_active")
            } else {
                sup_sub_btn.classList.remove("btn_active")
            }

    }
})


let tally_div = document.querySelector('.tally_foot')
let cash_div = document.querySelector('.cash_foot')
let inbx_div = document.querySelector('.inbx_foot')

tally_div.addEventListener("click",()=>{
    tally_div.classList.add("foot_actv")
    inbx_div.classList.remove("foot_actv")
    cash_div.classList.remove("foot_actv")
})

cash_div.addEventListener("click",()=>{
    tally_div.classList.remove("foot_actv")
    inbx_div.classList.remove("foot_actv")
    cash_div.classList.add("foot_actv")
})

inbx_div.addEventListener("click",()=>{
    cash_div.classList.remove("foot_actv")
    tally_div.classList.remove("foot_actv")
    inbx_div.classList.add("foot_actv")
})


window.addEventListener('load', ()=>{
    let preloader = document.querySelector('.preloader_wrapper')
    setTimeout(() => {
        preloader.style.display = "none";
        
        if (preloader.style.display = "none") {
            document.querySelector(".create_acc").setAttribute("style","display: block;")
        }
    }, 3000 );

    if (localStorage.getItem("acc_name") != undefined && localStorage.getItem("pin") != undefined) {
        name_taker.innerHTML = localStorage.getItem("acc_name")
        store_name.innerHTML = localStorage.getItem("acc_name")
        store_num.innerHTML = `<span>+88</span> ${localStorage.getItem("acc_num")}`
        round_name.innerHTML = localStorage.getItem("acc_name").slice(0,1)

        crtSec.setAttribute("style","display: none; padding: 0;")
        setpinSec.setAttribute("style","display: none; padding: 0;")
        homeSec.setAttribute("style","right:0px;")
        add_customer.style.display = "inline-flex";
    }


    if (localStorage.getItem("customer_info") != undefined) {

        home_features.classList.add("new_done_display")
        li_new_home_page.classList.remove("new_done_display")
        
        let infos = JSON.parse(localStorage.getItem("customer_info"))

        for (let i = 0; i < infos.length; i++) {
            const element = infos[i]
    
            cus_sup_ul.innerHTML += `
        <li>
            <div class="left">
                <div class="short_name_wrapper_cus">${element.cus_name.slice(0,1)}</div>
                <h4>${element.cus_name}</h4>
            </div>
    
            <div class="right">
                <div class="each_money_hishab">${element.cus_baki}</div>
                <i class="fas fa-angle-right"></i>
            </div>
        </li>
        `
        }

        customer_amount.innerHTML = infos.length
    }


    if (localStorage.getItem("suplier_info") != undefined) {

        home_features.classList.add("new_done_display")
        li_new_home_page.classList.remove("new_done_display")

        let infos = JSON.parse(localStorage.getItem("suplier_info"))
        for (let i = 0; i < infos.length; i++) {
            const element = infos[i]
    
            cus_sup_ul.innerHTML += `
        <li>
            <div class="left">
                <div class="short_name_wrapper_sup">${element.sup_name.slice(0,1)}</div>
                <h4>${element.sup_name}</h4>
            </div>
    
            <div class="right">
                <div class="each_money_hishab">${element.sup_baki}</div>
                <i class="fas fa-angle-right"></i>
            </div>
        </li>
        `
        }
        suplier_amount.innerHTML = infos.length
    }

})

if (localStorage.getItem('Total_pabo') == undefined) {
    pabo_tk.innerHTML = 0
} else{
    pabo_tk.innerHTML = localStorage.getItem('Total_pabo')
}

if (localStorage.getItem('Total_dibo') == undefined) {
    dibo_tk.innerHTML = 0
} else{
    dibo_tk.innerHTML = localStorage.getItem('Total_dibo')
}


let ul = document.querySelector("#help_ul");

for (let index = 0; index < 8;index++) {
    ul.innerHTML += `
    <li>
    <div class="li_wrapper">
        <div class="li_head">
            <h6 class="left_txt">IKSR কি কি করা যায় ?</h6>
            <i class="fas fa-angle-right"></i>
        </div>

        <p class="invisible_p">
            অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার
            মাঝেই আছে অনেক কিছু। যদি তুমি মনে করো, এটা তোমার কাজে
            লাগবে, তাহলে তা লাগবে কাজে। নিজের ভাষায় লেখা দেখতে
            অভ্যস্ত হও। মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি তাকে
            অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে, যখন তুমি
            তাতে অর্থ ঢালো। যেকোনো লেখাই তোমার কাছে অর্থবোধকতা তৈরি
            করতে পারে, যদি তুমি সেখানে অর্থদ্যোতনা দেখতে পাও।
            …ছিদ্রান্বেষণ? না, তা হবে কেন?
          </p>
    </div>
</li>
    `  
}





    let li = document.querySelectorAll(".li_wrapper");
    let head_txt = document.querySelectorAll(".left_txt");
    let li_head = document.querySelectorAll(".li_head");
    let p_txt = document.querySelectorAll(".invisible_p");
    let p_active_icon = document.querySelectorAll(".li_wrapper i");
    
    li_head.forEach((element,i) => {
        element.addEventListener("click", ()=>{
            
            element.classList.toggle("clicked_head")
            p_txt[i].classList.toggle("clicked_p")
            p_active_icon[i].classList.toggle("p_active_icon")

        })
    });


    let head_help_wrapper = document.querySelector(".head_help_wrapper")
    let help_sec = document.querySelector(".help_support_sec")

    head_help_wrapper.addEventListener("click",()=>{
        help_sec.setAttribute("style"," right: 0px; visibility:visible; transform: translateX(0%); pointer-events: inherit; width: 100%;")
    })

    let back_supp = document.querySelector("#back_support")

    back_supp.addEventListener("click",()=>{
        help_sec.setAttribute("style","right: 80px; transform: translateX(100%); visibility: hidden; pointer-events: none; width: 0%;")
    })



    let head_bar = document.querySelector("#header_bar")
    let left_menu = document.querySelector(".left_menu")
    let overlay = document.querySelector(".overlay")
    
    head_bar.addEventListener("click", () => {
        left_menu.classList.toggle("left_back")
    })

    overlay.addEventListener("click", () => {
        left_menu.classList.toggle("left_back")
    })


    let log_out = document.querySelector("#log_out")

    log_out.addEventListener("click", () => {
        localStorage.clear()
        location.reload()
    })


    let customer = document.querySelector(".customer")
    let suplier = document.querySelector(".suplier")
    let cus_sup = document.querySelectorAll(".cus_sup_opt")
    let customer_information = document.querySelector(".customer_information")
    let suplier_information = document.querySelector(".supplier_information")

    customer.addEventListener("click", () =>{
        customer.classList.add("active")
        suplier.classList.remove("active")

        customer_information.classList.add("cus_sup_info_display")
        suplier_information.classList.remove("cus_sup_info_display")

    })

    suplier.addEventListener("click", () =>{
        suplier.classList.add("active")
        customer.classList.remove("active")

        suplier_information.classList.add("cus_sup_info_display")
        customer_information.classList.remove("cus_sup_info_display")
    })



    let add_customer = document.querySelector(".add_customer")
    let top_backing_icon = document.querySelector(".top_backing_icon")
    let new_customer_section = document.querySelector("section.new_customer")

    add_customer.addEventListener("click",() => {
        new_customer_section.classList.add("top_back")
    })

    top_backing_icon.addEventListener("click",() => {
        new_customer_section.classList.remove("top_back")
    })

// calculator calculator calculator calculator calculator calculator calculator calculator


    let screen_cus = document.querySelector(".screen_cus")
    let screen_sup = document.querySelector(".screen_sup")

    let cal_btn1 = document.querySelectorAll(".cal_btn1")
    let calculator_btn1 = document.querySelectorAll(".calculator_btn1")
    let loan_spn_1 = document.querySelector(".loan_spn_1")
    let clear1 = document.querySelector(".clear1")
    let equal1 = document.querySelector(".equal1")


    screen_cus.addEventListener("focus",()=>{
        button_wrapper1.classList.remove("new_done_display")
    })

    // screen_cus.addEventListener("blur",()=>{
    //     button_wrapper1.classList.add("new_done_display")
    // })


    cal_btn1.forEach(i =>{

        i.addEventListener("click", ()=>{
            loan_spn_1.setAttribute("style", "transform: translateY(-23px) !important;")
        })
    })
    
    calculator_btn1.forEach(i =>{
        i.addEventListener("click", ()=>{
            screen_cus.value += i.innerHTML;
        })
    })

    clear1.addEventListener("click",()=>{
        screen_cus.value ='0'
    })

    equal1.addEventListener("click",()=>{
        screen_cus.value = eval(screen_cus.value)
    })


    
    let cal_btn2 = document.querySelectorAll(".cal_btn2")
    let calculator_btn2 = document.querySelectorAll(".calculator_btn2")
    let loan_spn_2 = document.querySelector(".loan_spn_2")
    let clear2 = document.querySelector(".clear2")
    let equal2 = document.querySelector(".equal2")

    screen_sup.addEventListener("focus",()=>{
        button_wrapper2.classList.remove("new_done_display")
    })

    // screen_sup.addEventListener("blur",()=>{
    //     button_wrapper2.classList.add("new_done_display")
    // })
 

    cal_btn2.forEach(i =>{

        i.addEventListener("click", ()=>{
            loan_spn_2.setAttribute("style", "transform: translateY(-23px) !important;")
        })
    })
    
    calculator_btn2.forEach(i =>{
        i.addEventListener("click", ()=>{
            screen_sup.value += i.innerHTML;
        })
    })

    clear2.addEventListener("click",()=>{
        screen_sup.value ='0'
    })

    equal2.addEventListener("click",()=>{
        screen_sup.value = eval(screen_sup.value)
    })