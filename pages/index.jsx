import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React ,{useState} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [state,setState]=useState("");
  console.log("state",state);
  const[password,setPassword]=useState("");
  console.log("password", password);
  const[email,setEmail]=useState("");
  console.log("email", email);
function handleState(event){
  setState(event.target.value);
}
function handlePass(event){
 setPassword(event.target.value);

}
function handleEmail(event){
 setEmail(event.target.value);
}
function handleSubmit(event){
  if (password.length < 8){
    alert("password must contain atleast 8 characters");
    return;
  }
  console.log("submitted")
  }

  return (
   <h1>Home</h1>
  );
}
