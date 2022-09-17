import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set, child } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"
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
        const database = getDatabase(app);


        console.log("success")
        
  const db = getDatabase();

function uploadData() {
    
        var match_number = document.getElementById('matchnumber').value;
        var color = document.getElementById('color').value;
        var robot = document.getElementById('robot').value;
        var data = document.getElementById('data').value.split(',');
        if (match_number == '' || color == '' || robot == '' || data == ''){
            alert("Not all fields are filled out!")
            return;
        }
        var json_data = 
        {
            "A High": data[0],
            "A Low": data[1],
            "A Miss": data[2],
            "A Taxi": data[3],
            "Attempt": data[4],
            "Climb Pts": data[5],
            "ClimbTik": data[6],
            "Def Tik": data[7],
            "Drivetrain Type": data[8],
            "High Goal": data[9],
            "Low Goal": data[10],
            "Match": data[11],
            "Miss": data[12],
            "Oof": data[13],
            "PenalT": data[14],
            "Qata": data[15],
            "Team": data[16],
            "Won": data[17],
            "X": data[18],
            "Y": data[19],
            "YEET distance": data[20]
        };
    
        set(child(ref(db, 'Events/CAPH22/matches/' + match_number + '/' + color + '/'), robot), json_data);

}
document.getElementById("button").addEventListener("click", uploadData);