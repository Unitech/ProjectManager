/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.mvc.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.stereotype.Component;

/**
 *
 * @author strzel-a
 */
@Component
public class UtilsDate {

    public String getActualDate() {
        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
        Date d1 = new Date();
        System.out.println(sdf.format(d1.getTime()));
        return sdf.format(d1.getTime());
    }
}
