function ViewModel() {
  var self = this;
  self.games = ko.observableArray(games);
  self.visiblenow = function(game) {
    self.games.visibility = true;
  };
  self.frontpage = games.forEach(function(game) {
    self.visibility = false;
  });
}

ko.applyBindings(ViewModel());
