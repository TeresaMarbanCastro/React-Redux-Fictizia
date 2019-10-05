import React from 'react'
import ThemeContext from './ThemeContext'


function ThemeTogglerButton() {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <button
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}>
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
  
  export default ThemeTogglerButton;








// export default () => <button>Change Language</button>