(function() {
    function HomeCtrl(Room) {
        this.title = "Bloc Chat"
        this.rooms = Room.all;
        
        this.newRoom = "Create Room";
        
        this.addRoom = Room.addRoom;
        
        //this and $scope are similar
        //$scope won't need "home.rooms" only "rooms"
        //this and $scope make the object public
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();