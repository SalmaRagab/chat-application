package chatapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import chatapp.models.Message;
import chatapp.services.MessageService;

@RestController
@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
public class ChatAppController {
	
	@Autowired
	private MessageService messageService;
	
	@GetMapping("/")
    public String index() {
        return "This is Home page";
    }
	
	@MessageMapping("/send-message")
	@SendTo("/message/chat")
	public Message message(Message message) throws InterruptedException {
		var createdMessage = messageService.create(message);
		return createdMessage;
	}
	
	@GetMapping("/messages")
	public List<Message> getMessages() {
		var messages = (List<Message>) messageService.findAll();
        return messages;
	}
}
