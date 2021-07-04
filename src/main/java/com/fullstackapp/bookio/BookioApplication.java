package com.fullstackapp.bookio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class BookioApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookioApplication.class, args);
	}

}
