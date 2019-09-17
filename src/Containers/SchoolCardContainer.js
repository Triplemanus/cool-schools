import React from 'react';
import SchoolCard from './SchoolCard';
import './SchoolCardContainer.css'
import { connect } from 'react-redux';


export const SchoolCardContainer = ({ schools, error }) => {

    // let school = schools;
  let schoolCards;
  schoolCards = schools.map(school => {
    return (
      <SchoolCard
      school_id={school.schoolid}
      key={school.schoolid}
      school_name={school.schoolName}
      phone={school.phone}
      address={school.address}
      distance={school.distance}
      low_Grade={school.lowGrade}
      high_Grade={school.highGrade}
      level={school.level}
      is_Charter={school.isCharterSchool}
      is_Magnet={school.isMagnetSchool}
      is_Private={school.isPrivate}
      />
    );
  });
};

export const mapStateToProps = store => ({
  schools: store.schools,
  error: store.error
});

export default connect(mapStateToProps)(SchoolCardContainer);