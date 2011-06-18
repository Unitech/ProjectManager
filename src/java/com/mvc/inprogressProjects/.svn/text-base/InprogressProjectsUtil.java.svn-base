package com.mvc.inprogressProjects;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Component;

import com.mvc.inprogressProjects.*;

@Component
public class InprogressProjectsUtil {
	public InprogressProjects getInprogressProjectsFromRequest(Object data){
		data = (Object)data.toString().replace("[", "").replace("]", "");
		return (InprogressProjects) getInprogressProjectsFromJSON(data);
	}

	private InprogressProjects getInprogressProjectsFromJSON(Object data){
		JSONObject jsonObject = JSONObject.fromObject(data);
		return (InprogressProjects) JSONObject.toBean(jsonObject, InprogressProjects.class);
	}

	public List<Integer> getListIdFromJSON(Object data){
		JSONArray jsonArray = JSONArray.fromObject(data);
		return (List<Integer>) JSONArray.toCollection(jsonArray, Integer.class);
	}
}

