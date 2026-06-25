//Author : Kaaviya R
//File : MainApp

package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.model.Book;
import com.library.service.BookService;

public class MainApp {

    public static void main(String[] args) {

        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        Book book = (Book) context.getBean("book");
        BookService service = (BookService) context.getBean("bookService");

        service.displayBook(book);
    }
}

