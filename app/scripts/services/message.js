(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        Message.all = messages;

        Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
            var filteredRef = ref.orderByChild('roomID').equalTo(roomId);
            return $firebaseArray(filteredRef);
        };
        
        Message.send = function(newMessage, currentRoom) {
        // Send method logic
            messages.$add({
                content: newMessage,
                sentAt: firebase.database.ServerValue.TIMESTAMP,
                username: $cookies.get('blocChatCurrentUser'),
                roomId: currentRoom
                
            })
            //username: $cookies.get('blocChatCurrentUser');
            //sentAt: firebase.database.ServerValue.TIMESTAMP;
            //roomId: currentRoom.$id;
            
            console.log(currentRoom);
        };
        
        console.log($firebaseArray);
        
        return Message;
    
        
         
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();