package ru.itmo.web.controller;

import javax.faces.bean.*;
import javax.persistence.*;
import java.util.*;
import java.io.Serializable;
import ru.itmo.web.model.Point;

@ManagedBean
@SessionScoped
public class ControllerBean implements Serializable {
    private EntityManagerFactory entityManagerFactory;

    private int x;
    private double y;
    private int r;

    private List<Point> pointList;

    public ControllerBean(){
        entityManagerFactory = Persistence.createEntityManagerFactory("default");
        pointList = new ArrayList<>(this.getPoints());
    }


    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public void addPoint() {
        if(isValid(this.x, this.y, this.r)) {
            Point point = new Point(this.x, this.y, this.r);
            EntityManager em = entityManagerFactory.createEntityManager();
            try {
                em.getTransaction().begin();
                em.persist(point);
                em.getTransaction().commit();
                pointList = this.getPoints();
            } catch (Exception e) {
                try {
                    em.getTransaction().rollback();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        }
    }

    public List<Point> getPointList() {
        return pointList;
    }

    public void setPointList(List<Point> pointList) {
        this.pointList = pointList;
    }

    public List<Point> getPoints() {
        EntityManager em = entityManagerFactory.createEntityManager();
        List<Point> points = (List<Point>) em.createQuery("SELECT p from Point p").getResultList();
        Collections.sort(points, Comparator.comparingLong(Point::getId));
        Collections.reverse(points);
        return points;
    }

    private final double[] rValues = {1, 2, 3, 4, 5};

    private boolean isValid(double x, double y, double r){
        boolean checkX =  x >= -5 && x <= 5;
        boolean checkY = y >= -5 && y <= 3;
        boolean checkR = java.util.Arrays.binarySearch(rValues, r) > -1;

        return checkX & checkY & checkR;
    }

}
