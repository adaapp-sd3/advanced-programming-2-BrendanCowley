import ConstrainedByField from './ConstrainedByField';

abstract class Animal extends ConstrainedByField {
  abstract makeSound(): void
  height = 16
  width = 16
  move(): string {
    return "roaming the earth..."
  }

}

export default Animal;
