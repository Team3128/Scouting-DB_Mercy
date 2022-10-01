
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
  var all_data = document.getElementById("input").value;
  if(all_data == ''){
    alert("Empty Push, Not Registered");
    return;
  }
  var sep_data = all_data.split(/\n/);
    for(var i=0;i<sep_data.length;i++){
      if(sep_data[i] == ''){
        return;
      }
        var data = sep_data[i].split(',');

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
          "Shooter Type": data[20]
        };
        cr(or(sr(db, 'Events/RRTest22/Robots/' + data[0] + '/Scouting/'), data[1]), json_data)
    }
}
document.getElementById("button").addEventListener("click", uploadData);