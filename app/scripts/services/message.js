(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");

        Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
            var filteredRef = ref.orderByChild('roomID').equalTo(roomId);
            return $firebaseArray(filteredRef);
        };
        
        return Message;
    
        
         
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();