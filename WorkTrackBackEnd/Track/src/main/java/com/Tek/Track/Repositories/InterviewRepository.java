package com.Tek.Track.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.Tek.Track.Models.Interview;

@Repository
public interface InterviewRepository extends CrudRepository <Interview, Long>{
    
}
