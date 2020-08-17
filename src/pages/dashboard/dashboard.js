import React from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import Layout from '../../components/Layout/Layout';
import DashHome from '../../components/DashHome/DashHome';
import NewBotForm from '../../components/NewBotForm/NewBotForm';
import Bot from '../../components/Bot/Bot';
import LiveTrader from '../../components/LiveTrader/LiveTrader';
import HowTo from '../../components/HowTo/HowTo';
import { Switch, Route } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <Layout>
      <DashHeader />
      <Switch>
        <Route path="/dashboard/new-bot" component={NewBotForm} />
        <Route path="/dashboard/bot" component={Bot}></Route>
        <Route path="/dashboard/trader" component={LiveTrader} />
        <Route path="/dashboard/how" component={HowTo} />
        <Route path="/" component={DashHome} />

      </Switch>
    </Layout>
  )
}

export default Dashboard;