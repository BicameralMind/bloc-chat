(function() {
    function BlocChatCookies($cookies) {
        var User = {};
        User.currentUser = function() {
            return $cookies.get('blocChatCurrentUser');
        }
        
            
        User.addUser = function(currentUser) {
            $cookies.put('blocChatCurrentUser', currentUser);
            console.log(currentUser);
        }
        
        return User;
        
    }

    angular
        .module('blocChat')
        .factory('BlocChatCookies', ['$cookies', BlocChatCookies]);
})();