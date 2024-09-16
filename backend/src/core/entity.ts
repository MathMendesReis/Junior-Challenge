import { UniqueEntityId } from "./unique-entity"

export abstract class Entity<Props> {
  private _id: UniqueEntityId
  protected props: Props

  get id() {
    return this._id
  }

  get getProps() {
    return this.props
  }

  protected constructor(props: Props, id?: UniqueEntityId) {
    this._id = id ?? new UniqueEntityId()
    this.props = props
  }

  public equals(entity: Entity<any>) {
    return entity === this || entity._id === this.id
  }

  
}