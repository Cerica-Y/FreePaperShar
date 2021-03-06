package com.example.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="PaperTable")
public class PaperTable {

    @Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column (name="Id")
	private long id;

    @Column(name = "paperName", length = 50, nullable = false)
	private String paperName;

    @Column(name = "prefectures", length = 50, nullable = false)
	private String prefectures;

    @Column(name = "city", length = 50, nullable = false)
	private String city;

    @Column(name = "category", length = 50, nullable = false)
	private String category;

    
    @Column(name = "year", length = 50, nullable = false)
	private int year;

    @Column(name = "month", length = 50, nullable = false)
	private int month;

    @Column(name = "comment", length = 200, nullable = true)
	private String comment;

    @Column(columnDefinition="MEDIUMTEXT", name = "uploadImg", nullable = true)
	private String image;

    @Column(name="create_date")
	private Date createDate;

    @Column(name="update_date")
	private Date updateDate;

    @PrePersist
    public void onPrePersist() {
        setCreateDate(new Date());
        setUpdateDate(new Date());
    }

    @PreUpdate
    public void onPreUpdate() {
        setUpdateDate(new Date());
    }

    // @Column(name = "uId", length = 50, nullable = false)
	// private String uId;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private userData userId;

}
