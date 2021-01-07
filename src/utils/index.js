export const filterDataOfSongs = (data) => {
    let songs = data.map((song) => {
        return {
          id: song.id,
          title: song.title,
          album: {
            id: song.album.id,
            img: song.album.cover_big,
            title: song.album.title
          },
          artist: {
            id: song.artist.id,
            name: song.artist.name,
          },
          link: song.link,
          preview: song.preview,
        };
      });
    return songs  
} 

export const filterDataAlbum = (obj) => {
  let tracks = obj.tracks.data.map(track => {
    return {
      id: track.id,
      link: track.link,
      preview: track.preview,
      title: track.title,
    }
  })

  let data = {
    id: obj.id,
    img: obj.cover_medium,
    link: obj.link,
    title: obj.title,
    genres: obj.genres.data[0].name,
    artist: {
      id: obj.artist.id,
      name: obj.artist.name,
      picture: obj.artist.picture_medium
    } 
  }

  return {tracks, data}
}