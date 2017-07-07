(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;
        
        Room.addRoom = function(room) {
            //use the firebase method $add here
            rooms.$add({
                name: room
                
            })
            
        }
        
        
        
        
        console.log(Room.all);
        
        
        

        return Room;
        
        //creating empty Room object and injecting database (ref) array into Room object
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();