class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);

    return () => this.unsubscribe(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach(callback => callback(data));
  }
}

export default Observer;
