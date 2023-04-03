import styles from './home.module.css';
import io from "socket.io-client";
import { useState } from 'react';
import { useEffect } from 'react';



export const Home=()=>{
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    let socket='';
    useEffect(() => {
      // Listen for incoming messages
        const socket = io("http://localhost:2000");
      console.log('use effect called');
        socket.off("direct message");
      socket.on("direct message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }, [socket]);
  const handleSend=()=>{
     const socket = io("http://localhost:2000");
    socket.emit("direct message", {
      sender: "64267dbb1fbd8d7c5baf8c25",
      reciever: "64267dbb1fbd8d7c5baf8c25",
      message: newMessage,
    });
    setNewMessage("");
  }
  console.log('message',messages);
  
    return (
      <div>
        <div className={styles.cont}>
          <div className={styles.display}>
           
            <div className={styles.single_chat}>hey</div>
            {messages.map((e)=>{
              return <div className={styles.single_chat}>{e.message}</div>;
            })}
            
          </div>
          <div className={styles.btn_cont}>
            <input
              className={styles.btn_input}
              type="text"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e)=>{
                setNewMessage(e.target.value);
              }}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    );
}