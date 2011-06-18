package com.pm.proj.util;

import java.util.ArrayList;
import java.util.List;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

import org.springframework.stereotype.Component;

import com.pm.proj.model.Proj;

@Component
public class UtilProject {
	public Proj getProjsFromRequest(Object data){
		data = (Object)data.toString().replace("[", "").replace("]", "");
		return (Proj) getProjFromJSON(data);
	}

	private Proj getProjFromJSON(Object data){
		//JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(new String[] {"MM/dd/yyyy"}));
		JSONObject jsonObject = JSONObject.fromObject(data);
		return (Proj) JSONObject.toBean(jsonObject, Proj.class);
	}

	@SuppressWarnings("unchecked")
	public List<Integer> getListIdFromJSON(Object data){
		JSONArray jsonArray = JSONArray.fromObject(data);
		return (List<Integer>) JSONArray.toCollection(jsonArray,Integer.class);
	}
}

