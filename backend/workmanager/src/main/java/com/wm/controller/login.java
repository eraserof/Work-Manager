package com.wm.controller;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class login extends HttpServlet{
    private String msg;
    
    @Override
    public void init() throws ServletException {
          msg = "Welcome To Java Code Geeks";
    }
 
    @Override
    public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
 
    	request.getRequestDispatcher("login.jsp").forward(request, response);
    }
 
    @Override
    public void destroy() {
          /* leaving empty for now this can be
           * used when we want to do something at the end
           * of Servlet life cycle
           */
    }
}
