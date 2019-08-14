import Collapsible from './CollapsibleView';
import withToggle from '../../hocs/withToggle';

export default withToggle(Collapsible, {
  toggleOn: 'open',
  onToggle: 'onClick'
});