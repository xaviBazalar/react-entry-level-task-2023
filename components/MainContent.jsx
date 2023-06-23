import styled from '@emotion/styled';
import {useMediaQuery} from '@mui/material';
import React, {  useState} from 'react'

export const MainContent =   ({games}) => {

    const [isOpenIframe,setIsOpenIframe]= useState(false)
    const [idSelected,setSelectId]= useState(0)


    const sm = useMediaQuery('(min-width:600px) or (max-width:600px)' );
    const me = useMediaQuery('(min-width:768px) or (min-width:1080px)');
    const lg = useMediaQuery('(min-width:1360px)');
 
  

    const MainStyle={
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: (lg)?"repeat(6, 1fr)":
            (
                (me )?"repeat(4, 1fr)":(
                    (sm)?"repeat(2, 1fr)":"repeat(6, 1fr)"
                )
            ),
            "grid-auto-rows": "minmax(100px, auto)" ,
            
    }

    

    const showIframe=(id)=>{
        setSelectId(id)
        setIsOpenIframe(true)

        setTimeout(()=>{
            setIsOpenIframe(false)
            setSelectId(0)
        },5000)
    }

    const closeIframe=()=>{
        setIsOpenIframe(false)
        setSelectId(0)
    }

    return (
      <main style={MainStyle}>
        {
            games.map((item,i)=>{
                return (
                    [<div
                    className={(isOpenIframe)?"card-game-no-hover":"card-game"}
                   
                    key={i} 
                    onClick={()=>{showIframe(i)}} 
                    >
                        <img id={"img-game-"+i.toString()}  src={"https:"+item.icon} alt={item.name} />
                        
                        {isOpenIframe && i==idSelected &&
                            ([
                            <iframe className='iframe-link-game' key={"game-"+i.toString()} src={item.link}/>,
                            <p className='link-game'  key={"link-game-"+i.toString()}>{item.link}</p>
                            ])
                        }
                        
                        
                    </div>,
                        isOpenIframe?<button key={"btn-game-"+i.toString()} className='btn-close'  type='button' onClick={closeIframe}>Close</button>:""
                    ]
                )
            })
        }
      </main>
    );
    
}
