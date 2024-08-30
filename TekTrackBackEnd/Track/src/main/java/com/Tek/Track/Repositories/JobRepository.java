package com.Tek.Track.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Tek.Track.Models.JobInfo;

import java.util.List;

@Repository
public interface JobRepository extends CrudRepository<JobInfo, Long> {

    List<JobInfo> findByUserUsername(String username);

    List<JobInfo> findByUserUserId(Long userId);
}
