import './App.css';
import AddStatus from './components/AddStatus';
import FirstCopyProcessed from './components/FirstCopyProcessed';
import GatePassReceived from './components/GatePassReceived';
import OutofCharge from './components/OutofCharge';
import PositiveAcknowledgement from './components/PositiveAcknowledgement';
import QueryRaised from './components/QueryRaised';
import QueryReply from './components/QueryReply';

function App() {
  return (
    <>
      <AddStatus />
      <PositiveAcknowledgement />
      <QueryRaised />
      <QueryReply />
      <FirstCopyProcessed />
      <OutofCharge />
      <GatePassReceived />
    </>
  );
}

export default App;
