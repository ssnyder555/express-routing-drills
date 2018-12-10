let express = require('express');
let app     = express();


app.get('/', function(req, res){
  res.send('hi there');
});
app.get('/speak/:animal', function(req, res){
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "meh",
    goldfish: "..."
  }
  let animal = req.params.animal.toLowerCase();
  let sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get('/repeat/:message/:times', function(req, res){
  let message = req.params.message;
  let times = Number(req.params.times);
  let result = "";

  for (let i = 0; i < times; i++){
     result += message + " ";
  }
  res.send(result);
})

app.get("*", function(req, res){
  res.send("sorry page is not here bud");
});

  app.listen(3000, function(){
    console.log('server up and running');
  });
