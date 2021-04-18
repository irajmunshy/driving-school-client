import React from 'react';
import Team from '../Team/Team';
import TeamOne from '../../../images/team1.jpg'
import TeamTwo from '../../../images/team2.jpg'
import TeamThree from '../../../images/team3.jpg'

const teams = [
    {
        img: TeamOne,
        driverName: 'William Leonard',
        skills: 'Owner and Senior Driving Coach'
    },
    {
        img: TeamTwo,
        driverName: 'Marcus Lamb',
        skills: 'Lead Instructor'
    },
    {
        img: TeamThree,
        driverName: 'Adams Erik',
        skills: 'Driving Instructor'
    }
];

const Teams = () => {
    return (
        <div className="container my-5 text-center">
            <h1>Our Instructors</h1>
            <p className="py-3">We have the most expert and experienced driving coaches in the industry</p>
            <div className="row">
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Teams;