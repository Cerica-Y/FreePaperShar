package com.example.repository;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name="PullDownCity")
public class cityEntity {
    
    @Id
    @Column (name="Id")
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

    @Column (name="cityCode")
    private long cityCode;

    @Column (name="cityName")
    private String cityName;

    @Column (name="prefIdId")
    private long prefIdId;

}
