import React  from "react";
function Greeting(props){
    return <h1>Hello, {props.name}</h1>;
}

export default function Home(){
    return <Greeting name="World" />;
}