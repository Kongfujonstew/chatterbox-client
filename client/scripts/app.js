// YOUR CODE HERE:

var app = {

  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  friends: {},
  rooms: {},

  init: function() {
    console.log('Init runs');
  },

  send: function(message) {

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',

      success: function (data) {
        console.log('chatterbox: Message sent');
      },

      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }

    });
  },

  fetch: function(roomname) {

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      dataType: 'json',
      data: {'order': '-createdAt', 'limit': 1000},
      contentType: 'json',

      success: function (data, status) {
        console.log('chatterbox: fetch success');
        console.log(data, status);
        var chats = data.results;

        for (var i = 0; i < chats.length; i++) {

          //render all messages
          if (!roomname || roomname === 'All rooms') {
            app.renderMessage(chats[i]);
          } else if (roomname === chats[i].roomname) {
            app.renderMessage(chats[i]);
          }

          //check if the room exists and if not, add to rooms object and call render rooms
          if (!app.rooms[chats[i].roomname]) {
            app.renderRoom(chats[i].roomname);
            app.rooms[chats[i].roomname] = chats[i].roomname;
          }

        }        
      },

      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to fetch messages', data);
      }

    });

  },

  clearMessages: function() {
    $('#chats').empty();
  },

  renderMessage: function(message) {
    var $chatDiv = $('#chats');
    var $newChat = $('<div></div>');
    $newChat.text('[' + message.roomname + '] ' + message.username + ': ' + message.text);
    $newChat.addClass('chat');
    $newChat.addClass('messages');
    $newChat.addClass('username');
    $newChat.attr('user', message.username);
    $chatDiv.append($newChat);
  },

  addFriend: function(friend) {
    app.friends[friend] = friend;
    //split the following into a renderFriends function???
    var $friendsDiv = $('#friends');
    var $newFriend = $('<div></div>');
    $newFriend.text(friend);
    $friendsDiv.append($newFriend);
  },

  //this renders a single room
  renderRoom: function(room) {

    if (room) {
      var $roomSelect = $('#roomSelect');
      var $newRoom = $('<option></option>');
      $newRoom.attr('value', room);
      $newRoom.text(room);
      $roomSelect.append($newRoom);
    }
  },

  handleUsernameClick: function() {
    console.log('** handleUsernameClick **');
    var friend = $(this).attr('user');
    app.addFriend(friend);
  },

  handleSubmit: function() {
    console.log('handleSubmit runs');
    var message = {
      username: getUrlParameter('username'),
      text: $('#message').val(),
      roomname: $('#new-room').val(),
    };

    console.log(message);
    this.send(message);

  }

}; // end app


var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1));
  var sURLVariables = sPageURL.split('&');
  var sParameterName;
  var i = 0;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

$(document).on('ready', function() {

  app.init();
  app.fetch();

  $('#send .submit').on('click', function() {
    app.handleSubmit();
  });

  // $('#send .submit').trigger('click');

  $('#clearChats').on('click', function() {
    app.clearMessages();
  });

  $('#chats').on('click', '.username', function() {
    app.handleUsernameClick();
  });

  $('#refresh').on('click', function() {
    app.fetch();
    app.init();
  });

  $('#roomSelect').on('change', function() {
    app.clearMessages();
    app.fetch($(this).val());
    ($('#roomSelect').val() === 'All rooms') ? $('#new-room').val('Lobby') : $('#new-room').val($('#roomSelect').val());
  });

});





