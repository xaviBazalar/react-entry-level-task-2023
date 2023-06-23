import React, { useState} from 'react'


export const MainContent =   ({games}) => {

   const [isOpenIframe,setIsOpenIframe]= useState(false)

    const MainStyle={
            display: "grid",
            gap: "1rem",
            "grid-template-columns": "repeat(4, 1fr)",
            "grid-auto-rows": "minmax(100px, auto)"   
    }

    const ImgStyle={
        "z-index": "2",
        "position": "relative"
    }

    const ItemStyle={
        transition:"0.5s"
    }

    const iframeStyle={
        position:"fixed",
        opacity:"0",
        left:"0",
        transition:"0.5s",
        "z-index":(isOpenIframe)?"99":"1",
        "width": "100%",
        "height": "100%",
        "top": "0",
        
    }

    const linkStyle={
        "display":(isOpenIframe)?"block":"none",
        "width":"100%",
        "position":"fixed",
        "bottom": "10px",
        "z-index": "100",
        "left": "0",
        "opacity":"0"
    }

    const showIframe=(id)=>{
        let imgItem=document.querySelector("#img-game-"+id)
        let linkItem=document.querySelector("#link-game-"+id)
        let iframeItem=document.querySelector("#game-"+id)
        iframeItem.style.opacity=1
        linkItem.style.opacity=1
        imgItem.style.opacity=0

        setIsOpenIframe(true)

        setTimeout(()=>{
            iframeItem.style.opacity=0
            linkItem.style.opacity=0
            imgItem.style.opacity=1
            setIsOpenIframe(false)
        },500)
    }
    


    return (
      <main style={MainStyle}>
        {
            games.map((item,i)=>{
                return (
                    <div style={ItemStyle} key={i} onClick={()=>{showIframe(i)}}>
                        <img id={"img-game-"+i.toString()} style={ImgStyle} src={"https:"+item.icon} alt={item.name} />
                        <iframe style={iframeStyle} id={"game-"+i.toString()} src={item.link}/>
                        <p style={linkStyle}  id={"link-game-"+i.toString()}>{item.link}</p>
                    </div>)
            })
        }
      </main>
    );
    
}
