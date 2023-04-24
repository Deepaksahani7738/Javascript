function mydata() {
    //nested else if ladder in javascript
    var age = eval(document.getElementById("age").value);
    var percentage = eval(document.getElementById("per").value);

    if (age >= 24 && age <= 100 && percentage >= 70 && percentage <= 100) {
        document.write("you are eligible for job")
    } else {
        if (age === 23 && percentage === 70) {
            document.write("You are note eligible for job")
        } else {
            if (age >= 0 && age < 24 && percentage >= 10 && percentage < 70) {
                document.write("Your age is not currect you are note eligible for job")

            } else {
                if (age >= 2 && age <= 24 && percentage >= 70 && percentage <= 100) {
                    document.write("please enter valid data ")

                } else {
                    document.write("both are note match value , please enter again !!")
                }
            }
        }
    }

}