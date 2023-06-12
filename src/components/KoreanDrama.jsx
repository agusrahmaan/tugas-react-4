import React, { useState } from 'react'
import './KoreanDrama.css'

const KoreanDrama = (props) => {
    const [like, setLike] = useState(false);
    const [synop, setSynopsys] = useState(false);

    function handleMoreClickLike() {
        setLike(!like);
    }

    function handleMoreClickSynopsys() {
        setSynopsys(!synop);
    }

  return (
    <div className='kdrama'>
        <h3>{props.nama}</h3>
        <img src={props.gambar} alt={props.nama} />
        <p>{props.genre}</p>
        {synop && <p style={{textAlign: 'justify'}}>{props.synopsys}</p>}
        <button onClick={handleMoreClickLike} style={{backgroundColor: like? 'red' : 'blue'}}>
        {like ? "Batal Suka"  : "Suka"} 
        </button>
        <button onClick={handleMoreClickSynopsys}>
        {synop ? "Sembunyikan" : "Selengkapnya"} 
        </button>

    </div>
  )
}

export default KoreanDrama