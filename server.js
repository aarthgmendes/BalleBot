const btn = document.querySelector('#send');
btn.addEventListener("click", function(e) {

    const user = document.querySelector("#user");
    const pw = document.querySelector('#pw')
    let userResult = user.value;
    let pwResult = pw.value;

    console.log(userResult, pwResult);

})