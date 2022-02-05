package com.koombiyo.repository;

import com.koombiyo.models.Bill;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BillRepository extends MongoRepository<Bill, String> {
    public Bill findByPatient(String patient);
}
