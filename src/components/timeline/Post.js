import { FavoriteBorder } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post({displayName, text, avatar, image}) {
  return (
    <div className="post">
        <div className="post_avatar">
            <Avatar src={avatar} />
        </div>
        <div className='post_body'>
            <div className="post_header">
                <div className="post_headerText">
                    <h3>{displayName}</h3>
                </div>
                <div className="post_headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className="post_footer">
                <FavoriteBorder fontSize="small"/>
            </div>
        </div>
    </div>
  )
}

export default Post