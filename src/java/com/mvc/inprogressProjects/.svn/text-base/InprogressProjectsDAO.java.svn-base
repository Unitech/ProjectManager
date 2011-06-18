package com.mvc.inprogressProjects;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.mvc.inprogressProjects.*;

@Repository
public class InprogressProjectsDAO{
	private HibernateTemplate hibernateTemplate;

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		hibernateTemplate = new HibernateTemplate(sessionFactory); 
	}

	@SuppressWarnings("unchecked")
	public List<InprogressProjects> getAll() {
		try {
		    InprogressProjects inprogressProjects = new InprogressProjects();
			return hibernateTemplate.findByExample(inprogressProjects, 0 , 10);
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<InprogressProjects> getAll(int start, int limit) {
		try {
		    InprogressProjects inprogressProjects = new InprogressProjects();
			return hibernateTemplate.findByExample(inprogressProjects, start , limit);
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<InprogressProjects> getAll(int start, 
									int limit,
									String type,
									String value,
									String field) {
		try {
		    String query = new String();
		    hibernateTemplate.setMaxResults(limit);
		    query = "from InprogressProjects inprogressProjects where inprogressProjects." + field + " like '%" + value + "%'"; 
			return hibernateTemplate.find(query);
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	public InprogressProjects create(InprogressProjects InprogressProjects) {
		try {
			hibernateTemplate.saveOrUpdate(InprogressProjects);
			return InprogressProjects;
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}

	public void delete(int id) {
		try {
			Object record = hibernateTemplate.load(InprogressProjects.class, id);
			hibernateTemplate.delete(record);
		}catch (Exception e){
			System.out.println(e);
		}
	}
}
