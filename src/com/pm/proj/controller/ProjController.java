package com.pm.proj.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pm.proj.model.Proj;
import com.pm.proj.service.ProjService;

@Controller
@RequestMapping(value="/proj")
public class ProjController {
	@Autowired
	private ProjService projService;
	
	@RequestMapping(value="/listProj.action")
	public @ResponseBody Map<String,? extends Object> getProj(@RequestParam String limit) throws Exception {
		try {
			List<Proj> proj = projService.getProjList();
			return getMap(proj);
		}catch (Exception e){
			return getModelMapError("Failure");
		}
	}
	
	@RequestMapping(value="/createProj.action")
	public @ResponseBody Map<String,? extends Object> createProj(@RequestParam Object data) throws Exception{
		try{
			Proj proj = projService.createNewProj(data);
			return getMapSolo(proj);
		} catch (Exception e) {
			return getModelMapError("Error trying to update contact.");
		}
	}
	
	@RequestMapping(value="/updateProj.action")
	public @ResponseBody Map<String,? extends Object> updateProj(@RequestParam Object data) throws Exception{
		try{
			projService.createNewProj(data);
			Map<String,Object> modelMap = new HashMap<String,Object>(3);
			modelMap.put("success", true);
			return modelMap;
		} catch (Exception e) {
			return getModelMapError("Error trying to update contact.");
		}
	}
	
	@RequestMapping(value="/deleteProj.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestParam Object data) throws Exception {
		try{
			projService.deleteProj(data);
			Map<String,Object> modelMap = new HashMap<String,Object>(3);
			modelMap.put("success", true);
			return modelMap;
		} catch (Exception e) {
			return getModelMapError("Error trying to delete contact.");
		}
	}
	
	private Map<String,Object> getMap(List<Proj> proj){
		Map<String,Object> modelMap = new HashMap<String,Object>(4);
		modelMap.put("total", proj.size());
		modelMap.put("data", proj);
		modelMap.put("success", true);
		return modelMap;
	}
	
	private Map<String,Object> getMapSolo(Proj proj){
		Map<String,Object> modelMap = new HashMap<String,Object>(4);
		modelMap.put("data", proj);
		modelMap.put("success", true);
		return modelMap;
	}
	
	private Map<String,Object> getModelMapError(String msg){
		Map<String,Object> modelMap = new HashMap<String,Object>(2);
		modelMap.put("message", msg);
		modelMap.put("success", false);
		return modelMap;
	} 

}

