package com.pm.proj.dao;

import java.util.List;
import java.util.logging.Logger;

import org.apache.commons.logging.Log;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.pm.proj.controller.ProjController;
import com.pm.proj.model.Proj;

@Repository
public class ProjDAO{
	private HibernateTemplate hibernateTemplate;

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		hibernateTemplate = new HibernateTemplate(sessionFactory); 
	}

	@SuppressWarnings("unchecked")
	public List<Proj> getAll() {
		try {
			System.err.println();
			return hibernateTemplate.find("from Proj");
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	
	public Proj create(Proj proj) {
		try {
			hibernateTemplate.saveOrUpdate(proj);
			return proj;
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}

	public void delete(int id) {
		try {
			Object record = hibernateTemplate.load(Proj.class, id);
			hibernateTemplate.delete(record);
		}catch (Exception e){
			System.out.println(e);
		}
	}
}
