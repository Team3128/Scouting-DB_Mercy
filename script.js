
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
  var scan_num = 1;
  var sep_data = all_data.split(/\n/);
    for(var i=0;i<sep_data.length;i++){
      try{
        if(sep_data[i] == ''){
          continue;
        }
          var data = sep_data[i].split(',');
          //data[0] = robot number, data[1] = match number
          if(data[1].length !=2){
            data[1] = "0" + data[1];
          }
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
        
          cr(or(sr(db, 'Events/Test2022/Robots/' + data[0] + '/'), data[1]), json_data)
          cr(or(sr(db, `Events/Test2022/Matches/`), (data[1] + "-" + data[3])),json_data)
          document.getElementById("status").innerHTML += "Successful Upload at scan " + String(scan_num) + "<br>" ;
          scan_num +=1;
      }
      catch(err){
        document.getElementById("status").innerHTML += "ERROR at scan "+ String(scan_num) + ": " + err.message + "<br>";
        scan_num +=1;
        }
 
    }
  }
document.getElementById("button").addEventListener("click", uploadData);
