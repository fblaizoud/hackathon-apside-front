import React from 'react';

import groupsArray from '../../data/MessagesGroupArray';
import peopleArray from '../../data/PeopleGroupArray';

const MessagesGroup = () => {
  return (
    <div className="MessagesGroup">
      <div className="MessagesGroup__search">
        <img
          className="MessagesGroup__search--img"
          src="./assets/search.png"
          alt="search"
        />
        <span className="MessagesGroup__search--text">Search </span>
      </div>
      <div className="MessagesGroup__groups">
        <h1 className="MessagesGroup__groups--title">Groups</h1>
        {groupsArray &&
          groupsArray.map((groups) => (
            <div className="MessagesGroup__groups__tchat" key="index">
              <img
                className="MessagesGroup__groups__tchat--img"
                src={groups.link}
                alt={groups.name}
              />
              <div className="MessagesGroup__groups__tchat__div">
                <div className="MessagesGroup__groups__tchat__div__1">
                  <span className="MessagesGroup__groups__tchat__div__1--name">
                    {groups.name}
                  </span>
                  <span className="MessagesGroup__groups__tchat__div__1--date">
                    {groups.date}
                  </span>
                </div>
                <div className="MessagesGroup__groups__tchat__div__2">
                  <span className="MessagesGroup__groups__tchat__div__2--tchat">
                    {groups.tchat}
                  </span>
                  <img
                    className="MessagesGroup__groups__tchat__div__2--logo"
                    src={groups.logo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="MessagesGroup__people">
        <h1 className="MessagesGroup__people--title">People</h1>
        {peopleArray &&
          peopleArray.map((people) => (
            <div className="MessagesGroup__people__tchat" key="index">
              <img
                className="MessagesGroup__people__tchat--img"
                src={people.link}
                alt={people.name}
              />
              <div className="MessagesGroup__people__tchat__div">
                <div className="MessagesGroup__people__tchat__div__1">
                  <span className="MessagesGroup__people__tchat__div__1--name">
                    {people.name}
                  </span>
                  <span className="MessagesGroup__people__tchat__div__1--date">
                    {people.date}
                  </span>
                </div>
                <div className="MessagesGroup__people__tchat__div__2">
                  <span className="MessagesGroup__people__tchat__div__2--tchat">
                    {people.tchat}
                  </span>
                  <img
                    className="MessagesGroup__people__tchat__div__2--logo"
                    src={people.logo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MessagesGroup;
