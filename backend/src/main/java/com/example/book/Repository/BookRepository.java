package com.example.book.Repository;

import com.example.book.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public  interface BookRepository extends JpaRepository<Book,Long> {
  List<Book> findByAuthor(String author);
  List<Book> findByName(String name);

}
