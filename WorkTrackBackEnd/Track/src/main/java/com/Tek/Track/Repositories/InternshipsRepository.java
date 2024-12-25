package com.Tek.Track.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.Tek.Track.Models.Internships;

import java.util.List;

@Repository
public interface InternshipsRepository extends CrudRepository <Internships, Long>{

    List<Internships> findByUserUserId(Long userId);
}