package ru.itmo.web.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;



@Entity
@Table(name = "points")
public class Point {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private double x;
    private double y;
    private double r;
    private boolean hit;
    private String currentTime;
    private Double executionTime;

    public Point() {}

    public Point(double x, double y, double r){
        this.x = x;
        this.y = y;
        this.r = r;


        this.currentTime = DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalDateTime.now());

        long startTime = System.nanoTime();
        this.hit = checkArea(x, y, r);
        long endTime = System.nanoTime();

        this.executionTime = ((double) (endTime - startTime) / 10000000);
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean isHit() {
        return hit;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public Double getExecutionTime() {
        return executionTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private boolean checkArea(double x, double y, double r){
        // Checks triangle area
        if (x >= 0 && y >= 0 && y <= -2 * x + r) {
            return true;
        }
        // Checks rectangle area
        if (x >= 0 && y <= 0 && x <= r && y >= - r / 2) {
            return true;
        }
        // Checks 1/4 circle area
        if (x <= 0 && y <= 0 && x * x + y * y <= r * r) {
            return true;
        }
        return false;
    }
}

