import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

export interface IListItem<T extends object, C extends object> {
  component?: PolymorpheusComponent<T, C>;
  context?: C;
  id: string;
}

export abstract class BaseListItem<T extends object, C extends object> implements IListItem<T, C> {
  // tslint:disable-next-line:variable-name
  private _id: string;
  component?: PolymorpheusComponent<T, C>;
  context?: C;

  get id(): string {
    return this._id;
  }

  set id(newId: string) {
    this._id = newId;
  }

  protected constructor(id: string) {
    this.id = id;
  }
}

export type ListItem = BaseListItem<any, any>;
