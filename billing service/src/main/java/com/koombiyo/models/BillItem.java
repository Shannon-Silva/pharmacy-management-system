package com.koombiyo.models;

import org.springframework.data.annotation.Id;

import java.util.List;

public class BillItem {

    public int quantity;
    public double price;
    public String name;

    public BillItem(String name, int quantity, double price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    @Override
    public String toString() {
        return String.format(
                "BillItem[ name='%s', quantity='%s', price='%s']",
                name, quantity, price);
    }

}
