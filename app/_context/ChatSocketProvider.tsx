"use client"
import { io } from 'socket.io-client'
import { createContext, useContext, useEffect, useState } from 'react'

const ChatSocketContext = createContext<any>(null);

 function useChatSocket(){
    return useContext(ChatSocketContext);
}

 const ChatSocketProvider = ({ children }: any) => {
    const [socket, setSocket] = useState<any>(null);
    const [messages, setMessages] = useState<any>([]);
    const [recieveOnline, setRecieveOnline] = useState<any>(false);


    function emitMessage(msg: any, sender: any, reciever: any) {
        if (!socket || !socket.connected) return;
        socket.emit('message', msg, sender, reciever);
    }
    function emitOnline(online: boolean, sender: any, chatid: any) {
        if (!socket || !socket.connected) return;
        socket.emit('online', online, sender, chatid);
    }
    useEffect((() => {
        const newSocket = io('http://localhost:4000');
        function recieveMessage(msg: any, sender: any, reciever: any) {
            console.log('recieved message', msg, sender, reciever);
            setMessages((prev: any) => [...prev, { msg:msg, sender:sender, reciever:reciever }]);
        }
        function recieveOnline(online: boolean, sender: any) {
            console.log('recieved online', online, sender);
            setRecieveOnline(online);
        }
        newSocket.on('message', recieveMessage);
        newSocket.on('online', recieveOnline);
        setSocket(newSocket);
        
        return () => {
            setSocket(null);
            newSocket.disconnect()};
    }) as any, [])

    

    return (
        <ChatSocketContext.Provider
            value={
                {
                    socket,
                    messages,
                    setMessages,
                    recieveOnline,
                    emitMessage,
                    emitOnline,
                }
            }>
            {children}
        </ChatSocketContext.Provider>
    )
}

export  {useChatSocket, ChatSocketProvider}