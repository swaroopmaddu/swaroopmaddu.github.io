const key = [87, 101, 51, 116, 101, 52, 109, 55, 101, 52, 109, 64, 84, 90, 49, 57, 48, 120, 104, 101, 120, 87, 101, 51, 116, 101, 52, 109, 55, 101, 52, 109, 64, 84, 90, 49, 57 ];


function decrypt(cipher){
    console.log(cipher);
    cipher = cipher.substring(1, cipher.length-1).split(",");
    cipher = cipher.map(i=>Number(i));
    options = []
    for (let i = 0; i < cipher.length; ++i) {
        var c = cipher[i];
        c ^= key[i % key.length];
        options.push(String.fromCharCode(c));
    }
    evaluate(options);
}

function evaluate(options){
    const answers = ['A', 'B', 'A', 'C', 'B', 'B', 'C', 'B', 'C', 'A', 'B', 'B', 'B', 'C', 'D', 'B', 'C', 'C', 'C', 'C', 'B', 'C', 'B', 'D', 'B'];
    var score = 0;
    var unanswer = 0;
    var answered = 0;
    for (let i = 0; i < options.length; ++i) {
        if(answers[i]=== options[i]){
            score++;
        }
        if(answers[i]==='*')  unanswer++;
        else answered++;
    }   
    swal({
        title: "Score: "+score,
        text: "Good job!",
        icon: "success",
        button: "Done",
      });
}