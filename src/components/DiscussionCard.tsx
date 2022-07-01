import React from 'react';

const DiscussionCard = () => {
  return (
    <div className="discussionCardContainer">
      <div className="discussionCardContainer__header">
        <div className="discussionCardContainer__header__left">
          <img src="assets/discussionPicture.png" alt="discussionPicture" />
          <div className="discussionCardContainer__header__left__text">
            <h1>Anil</h1>
            <p>Online - Last seen, 2.02pm</p>
          </div>
        </div>
        <div className="discussionCardContainer__header__logos">
          <img src="assets/discussionPhone.png" alt="discussionPhone" />
          <img src="assets/discussionVideo.png" alt="discussionVideo" />
          <img src="assets/discussionMenu.png" alt="discussionMenu" />
        </div>
      </div>
      <div className="discussionCardContainer__messages">
        <div className="discussionCardContainer__messages__left">
          <p>Hey There!</p>
          <p>How are you?</p>
          <p>I am doing well, Can we meet tomorrow?</p>
        </div>
        <div className="discussionCardContainer__messages__right">
          <p>Hello!</p>
          <p>I am fine and how are you?</p>
          <p>Yes Sure!</p>
        </div>
      </div>
      <div className="discussionCardContainer__answerContainer">
        <div className="discussionCardContainer__answerContainer__input">
          <img src="/assets/join.png" alt="join" />
          <input type="textarea" placeholder="Type your message here..."></input>
          <img src="/assets/emote.png" alt="emote" />
          <img src="/assets/camera.png" alt="camera" />
        </div>
        <div className="discussionCardContainer__answerContainer__mic">
          <img src="/assets/mic.png" alt="mic" />
        </div>
        <div className="discussionCardContainer__answerContainer__send">
          <img src="assets/send.png" alt="send" />
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
