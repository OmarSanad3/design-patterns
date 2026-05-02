export class Observer<T> {
  private subscribers: ((data: T) => void)[] = [];

  subscribe(newSubscriber: (data: T) => void) {
    this.subscribers.push(newSubscriber);
    return () => {
      this.subscribers = this.subscribers.filter(
        (sub) => sub !== newSubscriber,
      );
    };
  }

  notifySubscribes(data: T) {
    for (const subscriber of this.subscribers) {
      subscriber(data);
    }
  }
}
