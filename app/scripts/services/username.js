(function() {
    function BlocChatCookies($cookies) {
        var User = {};
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
        // Do something to allow users to set their username
            
            User.addUser = function(currentUser) {
                $cookies.put('blocChatCurrentUser', currentUser);
                console.log(currentUser);
            }
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();