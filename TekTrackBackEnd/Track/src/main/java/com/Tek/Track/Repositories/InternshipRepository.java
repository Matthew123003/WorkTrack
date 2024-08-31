package com.Tek.Track.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.Tek.Track.Models.Internship;

import java.util.List;

@Repository
public interface InternshipRepository extends CrudRepository <Internship, Long>{

    List<Internship> findByUserUserId(Long userId);
}
