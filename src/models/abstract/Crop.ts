import ConstrainedByField from './ConstrainedByField';

abstract class Crop extends ConstrainedByField {
  height = 16
  width = 16
  health: number = 10

}

export default Crop;
