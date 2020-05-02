package com.example.book.domain;
import javax.persistence.*;

@Entity
@Table(name="book_market")

public class Book {
  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  @Column
  private Long id;
  @Column
  private String name;
  @Column
  private String author;

  public Long getId() {
    return id;
  }
  public Book() {
  }

  public Book(String name, String author) {
    this.name = name;
    this.author = author;
  }
  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }
}
