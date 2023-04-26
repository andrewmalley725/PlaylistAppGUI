/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useEffect, useState, useRef} from "react";
import axios from 'axios';

export default function DisplaySongs(){
    const url = 'https://localhost:5001/api';
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const totalPages = useRef(0);
    
    useEffect(() => {
        axios.get(`${url}/Songs?page=${page}&pageSize=${30}`).then(res => {setData(res.data.songs); totalPages.current = res.data.totalPages})
    }, [page]);

    function addToPlaylist(id)
    {
        const uid = parseInt(localStorage.getItem('userId'));
        axios.post(`${url}/Playlist?userid=${uid}&songId=${id}`).then(res => {
            console.log(res);
        });
    }

    return (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                {localStorage.getItem('userId') ? <td>Add to Playlist</td> : <></>}
              </tr>
            </thead>
            <tbody>
              {data.map(song => (
                <tr>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.genre}</td>
                  {localStorage.getItem('userId') ? <a href="#" onClick={() => addToPlaylist(song.songId)}>Add</a> : <></>}
                </tr>
              ))}
            </tbody>
          </table>
          <p>Page {page} of {totalPages.current}</p>
    
          <div className="btn-group">
            {page > 1 && (
              <button type="button" className="btn btn-primary" onClick={() => setPage(page - 1)}>
                Previous
              </button>
            )}
            {page < totalPages.current && (
              <button type="button" className="btn btn-primary" onClick={() => setPage(page + 1)}>
                Next
              </button>
            )}
          </div>
        </div>
      );
}