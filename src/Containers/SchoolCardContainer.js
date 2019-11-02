import React from 'react';
import SchoolCard from './SchoolCard';
import './SchoolCardContainer.css'
import { connect } from 'react-redux';


export const SchoolCardContainer = ({ schools, error }) => {

  // let testSchool = {
  //   schoolid: "080336006756"
  // }

console.log('schools value is: ', schools, error);
let schoolCards;
  (schools) ?  schoolCards = schools.schoolList.map(school => {
    console.log('SCC_Map data: ', school);
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
  }):  schoolCards =  [];
   return (
     <section>
       {schoolCards}
     </section>
   )
};

export const mapStateToProps = state => ({
  schools: state.schools,
  error: state.error
});

export default connect(mapStateToProps)(SchoolCardContainer);