import Dashboard from '../../Dashboard';
import {ComplaintsWrapper} from './complaints.styles'
import Usage from '../../../component/Tooltip/usage'

const Index = () => {
  return (
    <Dashboard>
      <ComplaintsWrapper>
       <Usage />
      </ComplaintsWrapper>
    </Dashboard>
  );
}

export default Index;

