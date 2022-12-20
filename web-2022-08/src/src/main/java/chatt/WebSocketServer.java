package chatt;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import jakarta.websocket.OnMessage;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint("/chatting")

public class WebSocketServer {
	
	privite static Set<Session> clients =
		Collections.synchronizedSet( new HashSet<T>());
	
    @OnOpen
	public void onOpen(Session s) { 
    	System.out.println("session open");
    }
    
    @OnClose
	public void onClose(Session s) {
    	System.out.println("session close");
    }
    
    @OnMessage
	public void onMessage(String msg, Session s) throws IOException{
    	System.out.println('message :' +msg);
    	for(Session ss : clients) {
    		  ss.getBasicRemote().sendText(msg);
    	}
    }
    
}
