package chatapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chatapp.models.Message;
import chatapp.repositories.MessageRepository;

@Service
public class MessageService {
	@Autowired
	private MessageRepository repository;
	
	public List<Message> findAll() {
		return (List<Message>) repository.findAll();
	}
	
	public Message create(Message message) {
		message.setDateTime(new java.sql.Timestamp(new java.util.Date().getTime()));
		return repository.save(message);
	}
}
