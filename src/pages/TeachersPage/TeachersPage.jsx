import React from 'react';
import LanguageCheckboxes from '../components/LanguageCheckboxes/LanguageCheckboxes';
import TeacherCard from '../components/TeacherCard/TeacherCard';

const TeachersPage = () => {
    return (
        <div>
            <LanguageCheckboxes />
            <TeacherCard />
        </div>
    );
};

export default TeachersPage;