var database=
[
    {
        username:"andrei",
        password:"secret"
    }
];

var news_feed=
[
    {
        username:"Bobby",
        timeline:"hello I am bobby"
    },
    {
        username:'sally',
        timeline:'javascript is cool'
    }
];

var userNamePrompt=prompt("What is your username?");
var passwordPrompt=prompt("What is your password?");

function signIn(username, password){
    if (username===database[0].username &&
        password===database[0].password
        )
        {
            console.log(news_feed)
        }
    else {
            alert("sorry wrong username or password")
        }
}

signIn(userNamePrompt, passwordPrompt);