
const firebaseConfig = {
  apiKey: "AIzaSyAO1aIe_fTZB6duj8YIRyYcLTINlcP196w",
  authDomain: "escouting-7b4e0.firebaseapp.com",
  databaseURL: "https://escouting-7b4e0-default-rtdb.firebaseio.com",
  projectId: "escouting-7b4e0",
  storageBucket: "escouting-7b4e0.appspot.com",
  messagingSenderId: "377179821867",
  appId: "1:377179821867:web:cedab35ab708c12986976e",
  measurementId: "G-8VWYRF9QY6"
};

const app = initializeApp(firebaseConfig);
const database = to(app);
console.log("success")

const db = to();
function uploadData() {
  document.getElementById("status").innerHTML = "";
  var all_data = document.getElementById("input").value;
  if(all_data == ''){
    document.getElementById("status").innerHTML = "Empty Push, Not Registered";
    return;
  }
  var sep_data = all_data.split(/\n/);
  var sort_dict = {}
  var sort_arr = []
  var sorted_data = []
  for(var i=0;i<sep_data.length;i++){
    if(sep_data[i] == ''){
      continue;
    }
    var data = sep_data[i].split(',');
      //data[0] = robot number, data[1] = match number
      if(data[1].length !=2){
        data[1] = "0" + data[1];
      }
      if(sort_dict.hasOwnProperty(data[1] + data[3])){
        continue
      }else{
        sort_dict[data[1] + data[3]] = data
        sort_arr.push(data[1] + data[3])
      }
  }

  sort_arr.sort()
  for(var i=0;i<sort_arr.length;i++){
    sorted_data.push(sort_dict[sort_arr[i]])
  }
  
  for(var i=0;i<sorted_data.length;i++){
      try{
          var data = sorted_data[i];
          //data[0] = robot number, data[1] = match number
          var json_data = 
          { 
            "Scout Name": data[2],
            "Alliance Color": data[3],
            "Taxi": data[4],
            "Auto High": data[5],
            "Auto Low": data[6],
            "Auto Missed": data[7],
            "Tele High": data[8],
            "Tele Low": data[9],
            "Tele Missed": data[10],
            "Attempted Climb": data[11],
            "Climb Level": data[12],
            "Climb Time": data[13],
            "Defence Time": data[14],
            "Penalty": data[15],
            "Yeet": data[16],
            "Oof": data[17],
            "QATA": data[18],
            "Drivetrain Type": data[19],
            "Shooter Type": data[20],
            "ZMatch Number": data[1],
            "ZTeam": data[0]
          };
            hr(sr(db, 'Events/Test2022/Robots/' + data[0] + "/" + data[1] + "/"), json_data)

          cr(or(sr(db, 'Events/Test2022/Robots/' + data[0] + '/'), data[1]), json_data)

            hr(sr(db, 'Events/Test2022/Matches/' + data[1] + "-" + data[3] + "/"), json_data)

          cr(or(sr(db, `Events/Test2022/Matches/`), (data[1] + "-" + data[3])),json_data)
          document.getElementById("status").innerHTML += "Successful Upload for " + data[1] + "-" + data[3] + "<br>" ;
      }
      catch(err){
        document.getElementById("status").innerHTML += "Failed Upload for "+ data[1] + "-" + data[3] + ": " + err.message + "<br>";
        }
 
    }
  }
document.getElementById("button").addEventListener("click", uploadData);
