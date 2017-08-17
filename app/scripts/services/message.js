(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        Message.all = messages;

        Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
            var filteredRef = ref.orderByChild('roomID').equalTo(roomId);
            return $firebaseArray(filteredRef);
        };
        
        Message.send = function(newMessage, currentRoomId, username) {
        // Send method logic
            messages.$add({
                content: newMessage,
                sentAt: firebase.database.ServerValue.TIMESTAMP,
                username: username,
                roomID: currentRoomId
                
            })
            //username: $cookies.get('blocChatCurrentUser');
            //sentAt: firebase.database.ServerValue.TIMESTAMP;
            //roomId: currentRoom.$id;
            
        };
        
        console.log($firebaseArray);
        
        return Message;
    
        
         
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();