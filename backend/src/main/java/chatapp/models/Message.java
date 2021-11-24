package chatapp.models;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "messages")
public class Message {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
	 
	 private String content;
	 private String sender;
	 private Timestamp dateTime;
	 
	 public Message() {}
	 
	 public Message(int id, String content, String sender, Timestamp dateTime) {
		this.id = id;
		this.content = content;
		this.sender = sender;
		this.dateTime = dateTime;
	}
	 
	 public int getId() {
		return id;
	 }
	 public String getContent() {
		return content;
	 }
	 public String getSender() {
		return sender;
	 }
	 public Timestamp getDateTime() {
		return dateTime;
	 }
	 
	 public void setSender(String sender) {
		this.sender = sender;
	 }
	 
	 public void setContent(String content) {
		this.content = content;
	 }
	 
	 public void setDateTime(Timestamp dateTime) {
		this.dateTime = dateTime;
	 }

}
