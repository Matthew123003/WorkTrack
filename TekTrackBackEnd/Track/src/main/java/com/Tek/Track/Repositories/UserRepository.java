package com.Tek.Track.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.Tek.Track.Models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{

    User findByUserName(String username);

}
