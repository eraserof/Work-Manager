package com.wm.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.Servlet;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

public class ServletLifeCycle implements Servlet{
	private ServletConfig servletConfig = null;

	@Override
	public void init(ServletConfig config) throws ServletException {
        this.servletConfig = config;
        System.out.println("Servlet has been loaded by the class loader and instantiated already!!!");
        System.out.println("init(ServletConfig config) method invoked!");
        System.out.println("Servlet Name: " + servletConfig.getServletName());
	}

	@Override
	public ServletConfig getServletConfig() {
		// TODO Auto-generated method stub
		return this.servletConfig;
	}

	@Override
	public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        System.out.println("service(ServletRequest req, ServletResponse res) method invoked!");
        
        //set content type for response
        res.setContentType("text/html");
         
        PrintWriter out = res.getWriter();
        out.print("<b>com.jcg.example.servlet.ServletLifeCycle Example</b>");
		
	}

	@Override
	public String getServletInfo() {
		return "JavaCodeGeeks Servlet Life Cycle Example";
	}

	@Override
	public void destroy() {
		System.out.println("destroy() method invoked!");
		
	}

}
