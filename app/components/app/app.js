import React from 'react';
import CSSModules from 'react-css-modules';
import { bindActionCreators } from 'redux';
import styles from './app.scss';

const App = ({count, decrementCount, incrementCount}) => (
  <div styleName="container">
     <h1 styleName="title">
       {count}
     </h1>
     <div styleName="button__wrapper">
       <button
         onClick={decrementCount}
         styleName="button">
           -1
       </button>
       <button
         onClick={incrementCount}
         styleName="button">
           +1
       </button>
     </div>
  </div>
);

export default CSSModules(App, styles);
