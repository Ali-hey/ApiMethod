let data = [];
  let res = fetch("https://jsonplaceholder.ir/users", {
  method: "GET",
  });

  res.then((res) => res.json()).then((json) => {
    
    data = json
    
    for (var i = 0; i < data.length; i++) {

      var id = data[i].id;
      var name = data[i].name;
      var user_name = data[i].username;
      var user_email = data[i].email;
      var user_website = data[i].website;

      var rows="";
      rows += "<tr><td>" + id + "</td><td>" + name + "</td><td>" + user_name + "</td><td>" + user_email + "</td><td>" + user_website + "</td></tr>";
      
      
      document.getElementById("rows").innerHTML += rows;

    }
})