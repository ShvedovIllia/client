let serverUrl = 'https://git.heroku.com/tranquil-gorge-30773.git';
let token = window.localStorage.getItem('auth_token');
let role = window.localStorage.getItem('auth_role');

$(document).ready(function(){
    $('#logoutBtn').on('click', function(){
        window.localStorage.removeItem('auth_token');
        window.localStorage.removeItem('auth_role');
        
        $(location).attr('href', 'signin.html');
    });
})