module.exports.budget = budget =>
{
  var reason = budget[0];
    var ram = budget[1];
    var storage = budget[2];
    var os = budget[3];

    if(reason === "Gaming" && ram >= 8 && storage >= 256 && os === "Windows" || os === "macos")
      {
        console.log("You need $1500-2000 for the laptop with these specifications.");
      }
      else if(reason === "Gaming" && os === "chrome"){
        console.log("You won't get a great gaming experience with a Chromebook laptop.");
      }
      else if(reason === "Gaming" && ram >= 16 && storage >= 512) {
        console.log("You need $2500 for the laptop with these specifications.");
      }
      else if(reason === "Gaming" && ram >= 16 && storage >= 1000){
        console.log("You need $3000 for the laptop with these specifications.");
      }
      else if(reason === "Gaming" && ram >= 4){
        console.log("You need $1000 for the laptop with these specifications.");
      }
      else if(reason === "Gaming" && os === "chrome"){
        console.log("You won't get a great gaming experience with a Chromebook laptop.");
      }
      else if(reason === "Programming" && os === "chrome"){
        console.log("You need $500 for the laptop wit these specifications.");
      }
      else if(reason === "Programming" && ram === "4" && storage >= 256 && os === "Windows"){
        console.log("You need $500 for the laptop wit these specifications.");
      }
      else if(reason === "Programming" && ram >= 8 && storage >= 256 && os === "macos"){
        console.log("You need $1500 for the laptop wit these specifications.");
      }
      else if(reason === "Business" && ram >= 8 && storage >= 256 && os === "Windows"){
        console.log("You need $1000 for the laptop wit these specifications.");
      }
      else if(reason === "Business" && ram >= 4 && os === "chrome"){
        console.log("You need $600 for the laptop wit these specifications.");
      }
      else if(reason === "Business" && ram >= 4 && os === "chrome"){
        console.log("You need $600 for the laptop wit these specifications.");
      }
      else if(reason === "Music Production" && os === "chrome"){
        console.log("You won't get a good music production laptop with ChromeOS.");
      }
      else if(reason === "Music Production" && os === "Windows"){
        console.log("You Need atleast $1500 for this requirements.");
      }
      else if(reason === "Music Production" && os === "macos"){
        console.log("You Need atleast $2000 for this requirements.");
      }
      else if(reason === "Music Production" && os === "macos"){
        console.log("You Need atleast $2000 for this requirements.");
      }
      else if(reason === "General-Purpose" && os === "chrome"){
        console.log("You need around $400 for these specifications.");
      }
      else if(reason === "General-Purpose" && os === "Windows"){
        console.log("You need around $1000 for these specifications.");
      }
      else if(reason === "General-Purpose" && os === "macos"){
        console.log("You need around $1500 for these specifications.");
      }
      else{
        console.log("You need around $900 for a laptop with these specifications.");
      }

}
