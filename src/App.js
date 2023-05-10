import React, { useState } from 'react';
import Theme from './components/ThemContext';
import ThemSwitcher from './components/ThemeSwitcher';
import CheckUserContext from './components/Credentials/CheckUserContext';
import TrueUser from './components/TrueUser';
import UseMemoComp from './components/UseMemo';
import CalculatorComp from './components/Calculator/CalculatorComponenet';

const App = function () {
  return (
    <div>
      <CheckUserContext>
        <Theme>
          <ThemSwitcher />
          <TrueUser/>
      {/* <UseMemoComp /> */}
        </Theme>
      </CheckUserContext>/
      <hr />
      <CalculatorComp />
    </div>
  )
}

export default App;