$(function() {

    const jsonObject = {
        "name": "Vijay Dankhara",
        "age": 25,
        "city": "Surat",
        "skills": {
            "programming": "JavaScript",
            "database": "MongoDB"
        }
    };


    $('#getValues').on('click', function() {
        const { name, age, city, skills: { programming } } = jsonObject;

        $('#output').html(`
            <strong>Name:</strong> ${name}<br>
            <strong>Age:</strong> ${age}<br>
            <strong>City:</strong> ${city}<br>
            <strong>Programming Skill:</strong> ${programming}
        `);
    });
});