package com.koombiyo.models;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Bill {
    @Id
    public String id;
    public boolean paid = false;
    public double total;
    public String patient;
    public List<BillItem> items;

    public Bill(String patient, double total) {
        this.patient = patient;
        this.total = total;
    }

    @Override
    public String toString() {
        return String.format(
                "Bill[id=%s, patient='%s', total='%s']",
                id, patient, Double.toString(total));
    }

}
