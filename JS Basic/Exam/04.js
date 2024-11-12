function exam(input) {
    let students = Number(input[0]);
    let grade2 = 0;
    let grade3 = 0;
    let grade4 = 0;
    let grade5 = 0;
    let sumOfGrades = 0;
    let averageGrade = 0;
    for (let index = 1; index <= students; index++) {
        let studentGrade = Number(input[index]);
        if (studentGrade >= 2.00 && studentGrade <= 2.99) {
            grade2++;
            sumOfGrades += studentGrade;
            averageGrade = sumOfGrades / students;
        } else if (studentGrade >= 3.00 && studentGrade <= 3.99) {
            grade3++;
            sumOfGrades += studentGrade;
            averageGrade = sumOfGrades / students;
        } else if (studentGrade >= 4.00 && studentGrade <= 4.99) {
            grade4++;
            sumOfGrades += studentGrade;
            averageGrade = sumOfGrades / students;
        } else if (studentGrade >= 5.00) {
            grade5++;
            sumOfGrades += studentGrade;
            averageGrade = sumOfGrades / students;
        }
    }
    let percentGrade2 = (grade2 / students) * 100;
    let percentGrade3 = (grade3 / students) * 100;
    let percentGrade4 = (grade4 / students) * 100;
    let percentGrade5 = (grade5 / students) * 100;

    console.log(`Top students: ${percentGrade5.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${percentGrade4.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${percentGrade3.toFixed(2)}%`)
    console.log(`Fail: ${percentGrade2.toFixed(2)}%`)
    console.log(`Average: ${averageGrade.toFixed(2)}`)
}
exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);