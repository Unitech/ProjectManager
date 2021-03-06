package com.mvc.archiveProjects;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mvc.archiveProjects.*;
import com.mvc.utils.UtilsDate;

@Service
public class ArchiveProjectsService {
	@Autowired
	private ArchiveProjectsDAO archiveProjectsDAO;
	@Autowired
	private ArchiveProjectsUtil archiveProjectsUtil;
        @Autowired
        private UtilsDate utilsDate;


	@Transactional
	public List<ArchiveProjects> getArchiveProjectsList(){
		return archiveProjectsDAO.getAll();
	}
	
	@Transactional
	public List<ArchiveProjects> getArchiveProjectsList(int start, int limit){
		return archiveProjectsDAO.getAll(start, limit);
	}
	
	@Transactional
	public List<ArchiveProjects> getArchiveProjectsList(int start, 
												int limit,
												String type,
												String value,
												String field){
		return archiveProjectsDAO.getAll(start, limit, type, value, field);
	}
	
	@Transactional
	public ArchiveProjects createNewArchiveProjects(Object data){
		ArchiveProjects archiveProjects = archiveProjectsUtil.getArchiveProjectsFromRequest(data);
                archiveProjects.setEndDate(utilsDate.getActualDate());
		return archiveProjectsDAO.create(archiveProjects);
	}
	
	@Transactional
	public void deleteArchiveProjects(Object data){
		Integer id = Integer.parseInt(data.toString());
		archiveProjectsDAO.delete(id);
	}
}


