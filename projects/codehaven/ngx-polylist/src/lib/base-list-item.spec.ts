import { BaseListItem } from './base-list-item';

class TestListElement extends BaseListItem<any, any> {
  constructor(id: string) {
    super(id);
  }
}

describe('BaseListItem', () => {
  let item: BaseListItem<any, any>;
  it('should create an instance', () => {
    item = new TestListElement('id');
    expect(item).toBeTruthy();
  });
  it('should have an id', () => {
    item = new TestListElement('id');
    expect(item.id).toEqual('id');
  });
});
