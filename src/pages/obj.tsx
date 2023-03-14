import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Obj() {
  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
   }, []);
  return (
    <div>
     <div data-aos="fade-up" data-aos-once="true" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 1</div>
     <div data-aos="fade-left" data-aos-once="true" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 2</div>
     <div data-aos="fade-left" data-aos-once="true" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 3</div>
     <div data-aos="fade-left" data-aos-once="true" data-aos-duration="3000" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 4</div>
     <div data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="3000" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 5</div>
     <div data-aos="fade-left" data-aos-once="true" data-aos-duration="3000" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 6</div>
     <div data-aos="zoom-out-right" data-aos-once="true" data-aos-duration="3000" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 7</div>
     <div data-aos="fade-right" data-aos-duration="3000" style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 8</div>
     <div style={{backgroundColor:"lightblue",width:"300px", height:"500px" ,margin:"100px auto", color:"black" ,display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"35px" }}>num 9</div>
    </div>
  )
}
