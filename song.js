/*
Keeping up with the Javascritps - Part1: ES6
Homework Assignment #1: Data Types
Author: Salvador Benimeli
Date: 19/01/2018
*/

var title = "Video Killed The Radio Star";
var artist = "The Buggles";
var genre = "New wave . synth-pop";
var fromAlbum = "The Age of Plastic";
var recorded = 1979;
var hasVideoClip = true;
var format = "7\" single";

//Length object for single & album metadata
var length = {
    single: "3:25",
    album: "4:13"
};

//Constructor function for creating song writers components
function songWriterConstructor(name, instruments){
    this.name = name;
    this.instruments = instruments;
};

// Setting up the song writers array
var songWritersArray = [new songWriterConstructor("Geoff Downes",["Keyboards"]),
    new songWriterConstructor("Trevor Horn",["Bassguitar","keyboards","vocals"]),
    new songWriterConstructor("Bruce Woolley",["Vocals", "guitar", "theremin"])];


console.log("Homework Assignment #1: Data Types");
console.log("====================================");
console.log("Title: " + title);
console.log("Artist: " + artist);
console.log("Genre: " + genre);
console.log("Album: " + fromAlbum);
console.log("Recorded: " + recorded);
console.log("Format: " + format);
console.log("Has a video clip? " + hasVideoClip);

console.log();
console.log(">>>>>>> Length object");
console.log("Single version: " + length.single);
console.log("Album version: " + length.album);
console.log();
console.log(">>>>>>> Song writers: " + songWritersArray.length);
console.log("Song writer: " + songWritersArray[0].name);
console.log("Instruments: " + songWritersArray[0].instruments );
console.log("");
console.log("Song writer: " + songWritersArray[1].name);
console.log("Instruments: " + songWritersArray[1].instruments );
console.log("");
console.log("Song writer: " + songWritersArray[2].name);
console.log("Instruments: " + songWritersArray[2].instruments );