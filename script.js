var database=
[
    {
        username:"andrei",
        password:"secret"
    },
    {
        username:'sally',
        password:'123'
    },
    {
        username:'ingrid',
        password:'777'
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
    for (var i=0; i<database.length; i++){
        if (database[i].username===username &&
            database[i].password===password
        ) {
            console.log(news_feed);
        } else {
            alert{
                "Sorry, wrong username and password"
            }
        }
    
    /* if (username===database[0].username &&
        password===database[0].password
        )
        {
            console.log(news_feed)
        }
    else {
            alert("sorry wrong username or password")
        } */
}

signIn(userNamePrompt, passwordPrompt);