const button = () => {
    const bangla = document.getElementById('bangla').value;
    const english = document.getElementById('english').value;;
    const math = document.getElementById('math').value;;
    const science = document.getElementById('general-science').value;

    if (bangla.length == 0 || english.length == 0 || math.length == 0 || science.length == 0) {
        document.getElementById('showdata').innerHTML = `Input field should not empty`;
        return;
    }


    const total = parseFloat(bangla) + parseFloat(english) + parseFloat(math) + parseFloat(science);
    const percentage = (total / 400) * 100;
    let grades = "";
    if (bangla >= 33 && english >= 33 && math >= 33 && science >= 33) {
        if (percentage <= 100 && percentage >= 80) {
            grades = 'you got A+ and grade point is 5.00'
        } else if (percentage < 80 && percentage >= 70) {
            grades = 'you got  A and grade point is 4'
        } else if (percentage < 70 && percentage >= 60) {
            grades = 'you got a- and grade point is 3.5'
        } else if (percentage < 60 && percentage >= 50) {
            grades = 'you got b and grade point is 3'
        } else if (percentage < 50 && percentage >= 40) {
            grades = 'you got c and grade point is 2'
        } else if (percentage < 40 && percentage >= 33) {
            grades = 'you got d and grade point is 1'
        } else {
            grades = "You don't pass"
        }
    } else {
        console.log("you don't pass ")
    }
    if (bangla >= 33 && english >= 33 && math >= 33 && science >= 33) {
        document.getElementById('showdata').innerHTML = `Out of 400, your total mark is ${total}, percentage is ${percentage}% <br> ${grades}`;
    } else {
        document.getElementById('showdata').innerHTML = `Unfortunatly you are fail and try again`;
    }
}
