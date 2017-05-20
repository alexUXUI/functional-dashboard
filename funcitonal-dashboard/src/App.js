import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { inspect } from 'util';

var user = { name: 'Alex Bennett', role: 'admin' }
var roles = { admin: 'admin', user: 'user', open: 'open' }
var permissions = {
  admin: [ DashboardFunctionOne, DashboardFunctionTwo, DashboardFunctionThree ],
  user:  [ DashboardFunctionTwo, DashboardFunctionThree ],
  open:  [ DashboardFunctionThree ]
}

function App () {
  return (
    <div className="App">
      <DashBoardView />
    </div>
  );
}

function DashboardComponent(user, dashboardFunctions, permissions) {

  const { role, name } = user;
  const functionsUserIsAllowedToSee = permissions[ role ];
  const HOCProps = { name, role, functionsUserIsAllowedToSee }

  let DashboardFunctionsToShow = () => functionsUserIsAllowedToSee.map((DashFunc, i) => {

    // depending on which component, you could also toggle props being passed down
    if( DashFunc === DashboardFunctionOne ) {
      return <DashFunc { ...HOCProps } key={i} />
    } else {
      return <DashFunc { ...HOCProps } key={i} />
    }

  });

  return (
    <div>
      <h1>Dashboard Component</h1>
      { DashboardFunctionsToShow() }
    </div>
  );
}

function DashboardFunctionOne (props) {
  let { role, functionsUserIsAllowedToSee } = props;
  return(
    <h2>This is Dashboard Function One: { props.name } | { props.role }</h2>
  )
}
function DashboardFunctionTwo () {
  return(
    <h2>This is Dashboard Function Two</h2>
  )
}
function DashboardFunctionThree () {
  return(
    <h2>This is Dashboard Function Three</h2>
  )
}

const dashboardFunctions = [ DashboardFunctionOne, DashboardFunctionTwo, DashboardFunctionThree ];
const DashBoardView = () => DashboardComponent ( user, dashboardFunctions, permissions )

export default App;
