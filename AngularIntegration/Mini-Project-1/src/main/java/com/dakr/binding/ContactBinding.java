package com.dakr.binding;

import org.springframework.stereotype.Component;

@Component
public class ContactBinding {
	
	
	private String contactName;
	private String contactEmail;
	private Long contactNum;
	
	
	
	
	public ContactBinding() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ContactBinding(String contactName, String contactEmail, Long contactNum) {
		super();
		this.contactName = contactName;
		this.contactEmail = contactEmail;
		this.contactNum = contactNum;
	}
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String contactName) {
		this.contactName = contactName;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	public Long getContactNum() {
		return contactNum;
	}
	public void setContactNum(Long contactNum) {
		this.contactNum = contactNum;
	}
	
	
	
}
