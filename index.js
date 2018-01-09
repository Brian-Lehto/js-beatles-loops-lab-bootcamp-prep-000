function theBeatlesPlay(musicians, instruments){
  var Beatles = [];
  for(var i = 0; i < musicians.length; i++){
    Beatles.push(musicians[i]+" plays "+instruments[i]);
  }
  return Beatles;
}
