package com.Tek.Track.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.Tek.Track.Models.Interviews;

@Repository
public interface InterviewsRepository extends CrudRepository <Interviews, Long>{
    
}
