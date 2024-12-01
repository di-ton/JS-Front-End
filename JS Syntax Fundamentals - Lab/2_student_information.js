function student_info(name, age, grade) {
    age = Number(age)
    grade = Number(grade)

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

student_info('Steve', 16, 2.1426)