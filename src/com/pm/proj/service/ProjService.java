package com.pm.proj.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pm.proj.dao.ProjDAO;
import com.pm.proj.model.Proj;
import com.pm.proj.util.UtilProject;

@Service
public class ProjService {
	@Autowired
	private ProjDAO projDAO;
	@Autowired
	private UtilProject utilProject;
	
	@Transactional
	public List<Proj> getProjList(){
		return projDAO.getAll();
	}
	
	@Transactional
	public Proj createNewProj(Object data){
		Proj proj = utilProject.getProjsFromRequest(data);
		return projDAO.create(proj);
	}
	
	@Transactional
	public void deleteProj(Object data){
		Integer id = Integer.parseInt(data.toString());
		projDAO.delete(id);
	}
}
