package com.mvc.suspendProjects;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.mvc.suspendProjects.*;

@Repository
public class SuspendProjectsDAO{
	private HibernateTemplate hibernateTemplate;

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		hibernateTemplate = new HibernateTemplate(sessionFactory); 
	}

	@SuppressWarnings("unchecked")
	public List<SuspendProjects> getAll() {
		try {
		    SuspendProjects suspendProjects = new SuspendProjects();
			return hibernateTemplate.findByExample(suspendProjects, 0 , 10);
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<SuspendProjects> getAll(int start, int limit) {
		try {
		    SuspendProjects suspendProjects = new SuspendProjects();
			return hibernateTemplate.findByExample(suspendProjects, start , limit);
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<SuspendProjects> getAll(int start, 
									int limit,
									String type,
									String value,
									String field) {
		try {
		    String query = new String();
		    hibernateTemplate.setMaxResults(limit);
		    query = "from SuspendProjects suspendProjects where suspendProjects." + field + " like '%" + value + "%'"; 
			return hibernateTemplate.find(query);
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	public SuspendProjects create(SuspendProjects SuspendProjects) {
		try {
			hibernateTemplate.saveOrUpdate(SuspendProjects);
			return SuspendProjects;
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}

	public void delete(int id) {
		try {
			Object record = hibernateTemplate.load(SuspendProjects.class, id);
			hibernateTemplate.delete(record);
		}catch (Exception e){
			System.out.println(e);
		}
	}
}
