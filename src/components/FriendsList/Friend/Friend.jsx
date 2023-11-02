import { Component } from "react"
import { Status, FriendItem, ImgBorder } from "./Friend.styled"
export const Friend =({friend})=>{
    return (<FriendItem key={friend.key}>
    <Status stat={friend.isOnline}></Status>
    <ImgBorder><img src={friend.avatar} alt={friend.name} width="48" /></ImgBorder>
    <p >{friend.name}</p>
  </FriendItem>)
}
