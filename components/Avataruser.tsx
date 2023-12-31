
import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./ui/avatar"
  
  export function Avataruser() {
    return (
      <Avatar>
        <AvatarImage src="/micky.jpg" alt="avatar.img"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  