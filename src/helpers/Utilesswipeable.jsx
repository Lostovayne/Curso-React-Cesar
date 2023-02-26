import PropTypes from 'prop-types';

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';

const Utilesswipeable = () => {
  const leadingActions = () => {
    <LeadingActions>
      <SwipeAction
        onClick={() => {
          console.log('arrastrado leading');
        }}
      >
        <div>Editar!</div>
      </SwipeAction>
    </LeadingActions>;
  };

  const trailingActions = () => {
    <TrailingActions>
      <SwipeAction
        onClick={() => {
          console.log('arrastrado leading');
        }}
        destructive={true}
      >
        <div>Eliminar!</div>
      </SwipeAction>
    </TrailingActions>;
  };

  return (
    <>
      <h2>Listado swipeable</h2>

      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions}
          trailingActions={trailingActions}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            itaque obcaecati impedit id magni quia debitis nostrum
            necessitatibus ipsum veniam ea iusto facere perferendis fugiat aut
            molestiae, suscipit iure qui!
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </>
  );
};
export default Utilesswipeable;
