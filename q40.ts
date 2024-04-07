// define the make_album function
function make_album(artist_name:string,album_title:string,tracks?: number){
    let album :{artist:string,title:string,tracks?:number}= {
        artist:artist_name,
        title:album_title
    };
    if (tracks!== undefined){
        album.tracks = tracks;
    }
    return album;
}
// calling three functions with different values
let album1 = make_album("Manal", "Album title 1");
let album2 = make_album("Romail","Album title 2");
// calling with 3rd parameter
let album3 = make_album("Rohail","Album title 2",10);
// printing values of our object  created by function
console.log(album1);
console.log(album2);
console.log(album3);