function googleLogin() {
    // Implement Google SSO logic here
    // For example, you might redirect the user to a Google OAuth endpoint
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";  

}

function facebookLogin() {
    // Implement Facebook SSO logic here
    // For example, you might use the Facebook JavaScript SDK
    FB.login(function(response) {
        if (response.authResponse) {
            // Handle successful login
        } else {
            // Handle login error
        }
    }, {scope: 'email'});
}

//function GithubLogin() {
    // Implement Facebook SSO logic here
    // For example, you might use the Facebook JavaScript SDK
    //.login(function(response) {
        //if (response.authResponse) {
            // Handle successful login
       // } else {
            // Handle login error
        //}
    //}, {scope: 'email'});
//} 