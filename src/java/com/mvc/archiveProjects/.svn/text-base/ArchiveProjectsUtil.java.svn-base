package com.mvc.archiveProjects;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Component;

import com.mvc.archiveProjects.*;

@Component
public class ArchiveProjectsUtil {
	public ArchiveProjects getArchiveProjectsFromRequest(Object data){
		data = (Object)data.toString().replace("[", "").replace("]", "");
		return (ArchiveProjects) getArchiveProjectsFromJSON(data);
	}

	private ArchiveProjects getArchiveProjectsFromJSON(Object data){
		JSONObject jsonObject = JSONObject.fromObject(data);
		return (ArchiveProjects) JSONObject.toBean(jsonObject, ArchiveProjects.class);
	}

	public List<Integer> getListIdFromJSON(Object data){
		JSONArray jsonArray = JSONArray.fromObject(data);
		return (List<Integer>) JSONArray.toCollection(jsonArray, Integer.class);
	}
}

