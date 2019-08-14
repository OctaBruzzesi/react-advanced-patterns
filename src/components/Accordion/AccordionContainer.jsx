import Accordion from './AccordionView';
import withToggle from '../../hocs/withToggle';

export default withToggle(Accordion, {
  toggleOn: 'open',
  onToggle: 'onClick'
});