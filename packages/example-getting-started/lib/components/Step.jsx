import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';
import checks from '../modules/checks';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

const Step = ({ step, text, children }) => (
  <div className="step">

    <div className="step-text">
      <ReactMarkdown source={text} />
    </div>
    
    <div className="step-contents">{children}</div>

    {checks[`step${step}`]() && (
      <div className="step-done">
        Well done! You can now <Link to={`/${step + 1}`}>move on to Step {step + 1}</Link>.
      </div>
    )}
  </div>
);

registerComponent('Step', Step);