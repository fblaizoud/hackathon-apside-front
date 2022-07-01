import React from 'react';
import DiscussionCard from './DiscussionCard';
import MessagesGroup from './MessagesGroup';

const Messaging = () => {
  return (
    <div className="messagingContainer">
      <div className="messagingContainer__left">
        <MessagesGroup />
      </div>
      <div className="messagingContainer__right">
        <DiscussionCard />
      </div>
    </div>
  );
};

export default Messaging;
