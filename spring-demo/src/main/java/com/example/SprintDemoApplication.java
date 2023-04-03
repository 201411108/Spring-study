package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class SprintDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SprintDemoApplication.class, args);
	}

	@GetMapping(value="/")
	public String HelloWorld() {
		return "Hello World.";
	}

}
