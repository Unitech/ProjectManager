package com.mvc.suspendProjects;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mvc.suspendProjects.*;
import com.mvc.utils.UtilsDate;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class SuspendProjectsService {
	@Autowired
	private SuspendProjectsDAO suspendProjectsDAO;
	@Autowired
	private SuspendProjectsUtil suspendProjectsUtil;
	@Autowired
        private UtilsDate utilsDate;

	@Transactional
	public List<SuspendProjects> getSuspendProjectsList(){
		return suspendProjectsDAO.getAll();
	}
	
	@Transactional
	public List<SuspendProjects> getSuspendProjectsList(int start, int limit){
		return suspendProjectsDAO.getAll(start, limit);
	}
	
	@Transactional
	public List<SuspendProjects> getSuspendProjectsList(int start, 
												int limit,
												String type,
												String value,
												String field){
		return suspendProjectsDAO.getAll(start, limit, type, value, field);
	}
	
	@Transactional
	public SuspendProjects createNewSuspendProjects(Object data){
		SuspendProjects suspendProjects = suspendProjectsUtil.getSuspendProjectsFromRequest(data);
                suspendProjects.setEndDate(utilsDate.getActualDate());
		return suspendProjectsDAO.create(suspendProjects);
	}
	
	@Transactional
	public void deleteSuspendProjects(Object data){
		Integer id = Integer.parseInt(data.toString());
		suspendProjectsDAO.delete(id);
	}
}


