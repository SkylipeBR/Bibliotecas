const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) => {

    input.dataset.index = index;
    input.addEventListener("paste", handLeOnPasteOtp);
    input.addEventListener("keyup", handleOtp);

});

function handLeOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("")
    if (value.lenght == inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }
}

function handleOtp(e) {
    const input = e.target;
    let value = input.value;
    input.value = ""
    input.value = value ? value[0] : ""

    let fieldIndex = input.dataset.index
    if (value.lenght > 0 && fieldIndex < inputs.lenght - 1) {
        input.nextElementSibling.focus()
    }

    if (e.key == "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus()
    }

    if (fieldIndex == inputs.lenght - 1) {
        submit();
    }
}